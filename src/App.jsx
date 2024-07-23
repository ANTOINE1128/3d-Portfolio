import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { textureLoader, gltfLoader, loadingManager } from './loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example of loading resources
    textureLoader.load('path/to/your/texture.jpg');
    gltfLoader.load('path/to/your/model.gltf', (gltf) => {
      // You can store the loaded model in a state or context if needed
      console.log('Model loaded', gltf);
    });

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
