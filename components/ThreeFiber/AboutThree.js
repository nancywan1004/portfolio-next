import { useRef } from 'react'
import { Canvas, useThree, extend } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import Box from './Box';

extend({OrbitControls})

const AboutThree = () => {
  const controlsRef = useRef();
    return (
        <Canvas style={{ width: '100%', height: '80%' }} camera={{ position: [2, 1, 5], fov: 25 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 5]} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[0,0,0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}/>
          <OrbitControls
            ref={controlsRef}
            enablePan={false} // Disable panning (moving)
            enableZoom={false} // Disable zooming (scaling)
            enableRotate={true} // Enable rotating
          />
        </Canvas>
      )
}

export default AboutThree;