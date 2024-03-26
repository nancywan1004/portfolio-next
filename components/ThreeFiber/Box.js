import { useState, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Vector2, Raycaster, Vector3, Quaternion } from 'three';

const Box = ({position, rotation}) => {
    const [size, set] = useState(0.5)
    const boxRef = useRef();

    const targetQuaternion = useRef(null);
    const lerping = useRef(false);
  
    const raycaster = useRef(new Raycaster());

    const handleFaceClick = (e) => {
      const mouse = new Vector2();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  
      raycaster.current.setFromCamera(mouse, e.camera);
  
      const intersects = raycaster.current.intersectObject(boxRef.current);
  
      if (intersects.length > 0) {
        // Get the point on the surface of the box that was clicked
        const clickedPoint = intersects[0].point;
  
        // Calculate the direction vector from the camera to the clicked point
        const cameraPosition = raycaster.current.ray.origin;
        const direction = new Vector3().subVectors(clickedPoint, cameraPosition).normalize();
  
        // Calculate the rotation needed to align the clicked surface with the camera's forward direction
        const rotation = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), direction);
  
        // Set the target rotation for lerping
        targetQuaternion.current = rotation;
  
        // Start lerping if not already lerping
        if (!lerping.current) {
          lerping.current = true;
        }
      }
    };
  
    useFrame(() => {
      // If lerping, interpolate between the current rotation and the target rotation
      if (lerping.current && targetQuaternion.current !== null) {
        // Calculate the lerped rotation
        const lerpedRotation = new Quaternion().copy(boxRef.current.quaternion).slerp(targetQuaternion.current, 0.1);
  
        // Update the rotation of the box
        boxRef.current.setRotationFromQuaternion(lerpedRotation);
  
        // If the rotation is close enough to the target rotation, stop lerping
        if (boxRef.current.quaternion.equals(targetQuaternion.current)) {
          lerping.current = false;
          targetQuaternion.current = null;
        }
      }
    });

    return (
      <mesh
      position={position}
      rotation={rotation}
      scale={size * 1.5}
      ref={boxRef}
      onClick={handleFaceClick}>
        <boxGeometry attach="geometry" args={[1, 1, 1]}/>
        <shaderMaterial attach="material" vertexShader={vertexShader} fragmentShader={fragmentShader} />
        {/* <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 font-mono">
                Tools, System & XR Content Developer at <a href="https://www.yumebau.com/" className="font-bold hover:text-yellow-500 dark:hover:text-blue-500">Yumebau Inc</a>. <br /> UBC Computer Science & Statistics and Master of Digital Media. <br /> A passionate <b>Software Engineer</b> engaged in <b>XR</b> hoping to create tools and system to empower the immersive digital community.
            </p>
        </div>
      </Html> */}
      </mesh>
    )
  }

  const vertexShader = `
  varying vec3 vNormal;

  void main() {
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec3 vNormal;

  void main() {
    vec3 color;

    if (vNormal.x > 0.5) {
      color = vec3(1.0, 0.0, 0.0); // Red
    } else if (vNormal.x < -0.5) {
      color = vec3(0.0, 1.0, 0.0); // Green
    } else if (vNormal.y > 0.5) {
      color = vec3(0.0, 0.0, 1.0); // Blue
    } else if (vNormal.y < -0.5) {
      color = vec3(1.0, 1.0, 0.0); // Yellow
    } else if (vNormal.z > 0.5) {
      color = vec3(1.0, 0.0, 1.0); // Magenta
    } else if (vNormal.z < -0.5) {
      color = vec3(0.0, 1.0, 1.0); // Cyan
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default Box;