# ThreeJS-export-OBJ
OBJ exporter for [three.js](https://github.com/mrdoob/three.js)



# Example

```javascript
import 'mrdoob/three.js/three.js';
import { saveAs } from 'file-saver';
import * as exportOBJ from 'Doodle3D/ThreeJS-export-OBJ';

const geometry = new THREE.BoxGeometry(1, 1, 1).clone();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.y = 0.5;

const buffer = exportOBJ.fromMesh(mesh);
const blob = new Blob([buffer], { type: exportOBJ.mimeType });

saveAs(blob, 'cube.obj');
```

# Installation

### Using JSPM (ECMAScript / ES6 Module)

Install the library.

```
jspm install github:Doodle3D/ThreeJS-export-OBJ
```

Include the library.

```javascript
import * as exportOBJ from 'Doodle3D/ThreeJS-export-OBJ';
```

### Using NPM (CommonJS module)

Install the library.

```
npm install threejs-export-obj --save
```

Include the library.

```javascript
const exportOBJ = require('threejs-export-obj');
```

# API

**exportOBJ.fromMesh**

```javascript
data: String || Buffer = exportOBJ.fromMesh( mesh: THREE.Mesh, [ binary: Boolean = true ] )
```

Creates a .OBJ from `THREE.Mesh`. When binary is set to `true` result will be a `Buffer` Object, when set to false result will be an ASCII string. The transformation on the `THREE.Mesh` will be applied to the OBJ geometry.

**exportOBJ.fromGeometry**

```javascript
data: String || Buffer = exportOBJ.fromGeometry( geometry: THREE.Geometry || THREE.BufferGeometry, [ matrix: THREE.Matrix4, binary: Boolean = true ] )
```

Creates a .OBJ from `THREE.Geometry`. When binary is set to `true` result will be a `Buffer` Object, when set to false result will be an ASCII string. The transformation from the optional `matrix` argument will be applied to the OBJ geometry.

**exportOBJ.mimeType**

```javascript
mimeType: String = exportOBJ.mimeType
```

A constant with the mime type of OBJ (`MIMETYPE`).
