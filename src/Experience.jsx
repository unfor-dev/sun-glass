import { Environment, OrbitControls, Lightformer } from '@react-three/drei';
import Particles from './Particle.jsx';
import { EffectComposer, Bloom, HueSaturation, ToneMapping } from '@react-three/postprocessing';
import CameraAnimation from './CameraAnimation.jsx';
import CameraRig from "./CameraRig.jsx"
import SunGlass from './sunGlass.jsx';

export default function Experience() {

    return (
        <>
            <ambientLight intensity={2} position={[1, 2, 3]} />
            <directionalLight intensity={0.1} position={[1, 2, 3]} />
            {/* <color attach="background" args={['#f0f0f0']} />  */}

            {/* <OrbitControls /> */}

            {/* <Particles /> */}

            {/* Kamera harakati */}
            <CameraRig>

            {/* Light */}
            {/* <Environment preset="city" /> */}

            <Environment shadow resolution={260} >
                <Lightformer color={'white'} intensity={1} position={[1, -1, 2]} scale={[1, 3, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />

                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
            </Environment>
                
            {/* SunGlass Model */}
            <SunGlass scale={[3, 3, 3]} position={[0, -0.5, 0 ]} rotation={[-0.3, 0.3, 0]} />

            <EffectComposer>
                <HueSaturation saturation={0.5} hue={0.01} />
                <ToneMapping mode={ToneMapping.ACES_FILMIC} />
                <Bloom luminanceThreshold={4} mipmapBlur />
            </EffectComposer>
            <CameraAnimation />
            </CameraRig>
        </>
    );
}
