// src/loader.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loadingManager = new THREE.LoadingManager();

loadingManager.onLoad = () => {
  console.log('All assets loaded');
  // Optional: You can trigger a state change or an event to notify that loading is complete
};

const textureLoader = new THREE.TextureLoader(loadingManager);
const gltfLoader = new GLTFLoader(loadingManager);

export { textureLoader, gltfLoader, loadingManager };
