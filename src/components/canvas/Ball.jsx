/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import PropTypes from 'prop-types';
import CanvasLoader from "../Loader";
import { useMediaQuery } from 'react-responsive'; // Import react-responsive library

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string,
};

const BallCanvas = ({ icon, isStatic }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Mobile view

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio); // Set pixel ratio to avoid high DPI issues
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {isMobile ? (
          <Ball imgUrl={icon} />
        ) : (
          <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <Ball imgUrl={icon} />
          </Float>
        )}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string,
  isStatic: PropTypes.bool,
};

export default BallCanvas;
