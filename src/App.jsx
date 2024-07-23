import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { textureLoader, gltfLoader, loadingManager } from './loader';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load textures
    textureLoader.load(
      '/desktop_pc/textures/Material_baseColor.jpeg',
      (texture) => {
        console.log('Texture loaded', texture);
      },
      undefined,
      (error) => {
        console.error('Error loading texture', error);
      }
    );

    textureLoader.load(
      '/planet/textures/Clouds_baseColor.png',
      (texture) => {
        console.log('Planet texture loaded', texture);
      },
      undefined,
      (error) => {
        console.error('Error loading planet texture', error);
      }
    );



    loadingManager.onLoad = () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while resources are being loaded
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
