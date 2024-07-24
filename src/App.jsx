import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as THREE from 'three';
import { textureLoader, loadingManager } from './loader';
import './index.css';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

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
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading Experience...</div>}>
          <Experience />
        </Suspense>
        <Suspense fallback={<div>Loading Tech...</div>}>
          <Tech />
        </Suspense>
        <Suspense fallback={<div>Loading Works...</div>}>
          <Works />
        </Suspense>
        <Suspense fallback={<div>Loading Feedbacks...</div>}>
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div>Loading StarsCanvas...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
