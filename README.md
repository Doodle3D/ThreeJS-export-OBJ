# ThreeJS-export-OBJ
OBJ exporter for [three.js](https://github.com/mrdoob/three.js)

For a STL exporter see https://github.com/Doodle3D/ThreeJS-export-STL

# Example

```javascript
import 'mrdoob/three.js/three.js';
import { saveAs } from 'file-saver';
import * as exportOBJ from 'Doodle3D/ThreeJS-export-OBJ';

const geometry = new THREE.BoxGeometry(1, 1, 1).clone();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.y = 0.5;

const buffer = exportOBJ.fromMesh(mesh).then(blob => {
  saveAs(blob, 'cube.obj');  
});
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

### Using NPM (CommonJS module) IS NOT YET PUBLISHED ON NPM

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
data: Buffer = async exportOBJ.fromMesh( mesh: THREE.Mesh )
```

Creates a .ZIP from `THREE.Mesh`. The .ZIP contains a `.obj` file and a `.mtl` file. The transformation on the `THREE.Mesh` will be applied to the OBJ geometry.

**exportOBJ.fromGeometry**

```javascript
data: Buffer = async exportOBJ.fromGeometry( geometry: THREE.Geometry || THREE.BufferGeometry, [ matrix: THREE.Matrix4, material: THREE.Material ] )
```

Creates a .ZIP from `THREE.Geometry`. The .ZIP contains a `.obj` file and optionally a `.mtl` file. The transformation from the optional `matrix` argument will be applied to the geometry.
