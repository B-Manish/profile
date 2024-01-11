// import { useEffect } from 'react';

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// import SceneInit from './lib/SceneInit';

// function App() {
//   useEffect(() => {
//     const test = new SceneInit('myThreeJsCanvas');
//     test.initialize();
//     test.animate();

//     let loadedModel;
//     const glftLoader = new GLTFLoader();
//     glftLoader.load('./assets/earth/earth.gltf', (gltfScene) => {
//       loadedModel = gltfScene;
//       // console.log(loadedModel);

//       gltfScene.scene.rotation.y = Math.PI / 8;
//       gltfScene.scene.position.y = 3;
//       gltfScene.scene.scale.set(10, 10, 10);
//       test.scene.add(gltfScene.scene);
//     });

//     const animate = () => {
//       if (loadedModel) {
//         loadedModel.scene.rotation.x -= 0.0005;
//         loadedModel.scene.rotation.y -= 0.001;
//         loadedModel.scene.rotation.z += 0.000;
//       }
//       requestAnimationFrame(animate);
//     };
//     animate();
//   }, []);

//   return (
//     <div style={{border:'1px solid white',width:'50vw',height:'50vh'}}>
//       <canvas id="myThreeJsCanvas" />
//     </div>
//   );
// }

// export default App;


import { useEffect } from 'react';

import Home from './components/Home';

function App() {


  return (
    <Home/>
  );
}

export default App;

