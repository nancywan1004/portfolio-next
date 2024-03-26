import { Canvas, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import Box from './Box';

const AboutThree = () => {
    return (
        <Canvas style={{ width: '100%', height: '80%' }} camera={{ position: [2, 0.5, 5], fov: 20 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 5]} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[0,0,0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}/>
          <OrbitControls makeDefault />
        </Canvas>
      )
}

export default AboutThree;