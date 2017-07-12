import * as THREE from 'three';
import { saveAs } from 'file-saver';
import { fromMesh, mimeType } from 'src/index.js';

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas });

const geometry1 = new THREE.TorusGeometry(1, 0.5, 10, 10);
geometry1.computeFaceNormals();

const geometry2 = new THREE.TorusGeometry(1, 0.5, 10, 10);
geometry2.computeFaceNormals();

const geometry = new THREE.Geometry();
geometry.merge(geometry1, new THREE.Matrix4().setPosition(new THREE.Vector3(1.5, 0, 0)), 0);
geometry.merge(geometry2, new THREE.Matrix4().setPosition(new THREE.Vector3(-1.5, 0, 0)), 1);

const material = new THREE.MultiMaterial([
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
]);
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

mesh.position.y = 0.5;

(function render() {
  requestAnimationFrame(render);

  const t = Date.now() * 0.001;
  const x = Math.sin(t) * 3;
  const y = 3;
  const z = Math.cos(t) * 3;

  camera.position.set(x, y, z);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer.render(scene, camera);
})();

const download = document.getElementById('download');
download.addEventListener('click', () => {
  fromMesh(mesh).then(zip => saveAs(zip, 'cube.zip'));
});
