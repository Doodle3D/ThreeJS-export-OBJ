import JSZip from 'jszip';
import { Geometry } from 'three';

export const mimeType = 'text/plain';

function geometryToData(geometry, material) {
  const { faces, vertices, faceVertexUvs: [faceVertexUvs] }  = geometry;

  let output = '';

  if (material) {
    output += 'mtllib material.mtl\n';
  }

  for (let i = 0; i < vertices.length; i ++) {
    const vertex = vertices[i];

    output += `v ${vertex.x} ${vertex.y} ${vertex.z}\n`;
  }

  for (let i = 0; i < faceVertexUvs.length; i ++) {
    const face = faceVertexUvs[i];
    for (let i = 0; i < face.length; i ++) {
      const uv = face[i];

      output += `vt ${uv.x} ${uv.y}\n`;
    }
  }

  for (let i = 0; i < faces.length; i ++) {
    const face = faces[i];

    for (let i = 0; i < face.vertexNormals.length; i ++) {
      const normal = face.vertexNormals[i];

      output += `vn ${normal.x} ${normal.y} ${normal.z}\n`;
    }
  }

  let currentMaterial = null;
  for (let i = 0; i < faces.length; i ++) {
    const face = faces[i];

    if (material && face.materialIndex !== currentMaterial) {
      const mtl = material.isMultiMaterial ? material.materials[face.materialIndex] : material;

      output += `usemtl ${(mtl.name !== '') ? mtl.name : `material ${mtl.id}`}\n`;

      currentMaterial = face.materialIndex;
    }

    const faceIndexes = [face.a + 1, face.b + 1, face.c + 1]
      .map((faceIndex, j) => `${faceIndex}/${faceVertexUvs.length > 0 ? j : ''}/${i * 3 + j + 1}`)
      .join(' ');

    output += `f ${faceIndexes}\n`;
  }

  return output;
}

function materialToData(material) {
  let output = '';

  if (material.isMultiMaterial) {
    for (const mtl of material.materials) {
      output += materialToData(mtl);
    }
  } else {
    output += `newmtl ${(material.name !== '') ? material.name : `material ${material.id}`}\n`;

    output += 'Ns 10.0000\n';
    output += 'Ni 1.5000\n';
    output += 'd 1.0000\n';
    output += 'Tr 0.0000\n';
    output += 'Tf 1.0000 1.0000 1.0000\n';
    output += 'illum 2\n';
    output += `Ka ${material.color.r} ${material.color.g} ${material.color.b}\n`;
    output += `Kd ${material.color.r} ${material.color.g} ${material.color.b}\n`;
    output += 'Ks 0.0000 0.0000 0.0000\n';
    output += 'Ke 0.0000 0.0000 0.0000\n';
  }

  return output;
}

export function fromGeometry(geometry, matrix, material) {
  if (geometry.isBufferGeometry) {
    geometry = new Geometry().fromBufferGeometry(geometry);
  } else if (geometry.isGeometry) {
    geometry = geometry.clone();
  } else {
    throw new Error('Geometry is not an instance of BufferGeometry or Geometry');
  }

  if (matrix && matrix.isMatrix4) {
    geometry.applyMatrix(matrix);
  }

  const zip = new JSZip();

  const geometryData = geometryToData(geometry, material);
  zip.file('object.obj', geometryData);

  if (material) {
    const materialData = materialToData(material);
    zip.file('material.mtl', materialData);
  }

  return zip.generateAsync({ type: 'blob' });;
}

export function fromMesh(mesh) {
  mesh.updateMatrix();

  return fromGeometry(mesh.geometry, mesh.matrix, mesh.material);
}
