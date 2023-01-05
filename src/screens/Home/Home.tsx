import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Environment , Stars} from '@react-three/drei'
import Car from './components/Car';
import './Home.scss'
import Present from './components/Present';
import SolarPanel from './components/SolarPanel';

const Home = () => {

  // const [PositionCar, setPositionCar] = useState <number> (4)
  const [FlagOfPresent, setFlagOfPresent] = useState <boolean> (false)
  const [ActiveSolarPanel, setActiveSolarPanel] = useState<boolean> (false)



  return (
    <Canvas 
      className='canvas-react-three' 
      shadows
      camera={{position : [0, 30, 60], fov : 15}}
    >

      {/* Se agregan controles por defecto para mover el cubo */}
      <OrbitControls />

      <Environment 
        // @PROPS Cargar imagenes externas para usarlas como background del canva.
        // files={} 
        // @PROPS Es un booleano que decide si poner o no una imagen de background.
        // background 
        preset='city' //@PROPS Agrega sombras a todos los mesh que se tenga dentro del canva.
      />

      {/* Desarrolla la luz del canva. */}
      <ambientLight  
        //@PROPS Se puede enviar la intensidad con la que queremos que tenga la luz.
        intensity={ActiveSolarPanel ? 1.5 : 0} 
      /> 
      
      {/* Mesh recibe un material y una figura. */}
      {/* Se le manda la posicion como coordenadas x,y,z. El sobre entiende que la el 0 es mantener centrado tanto en x como en y */}
      <group position={[0, -3, 0]} >

        {/* box */}
        <mesh position={[-6, 5, 3]} > 
          <boxGeometry args={[2, 3.5, 2]} />
          <meshStandardMaterial
            color='#e15050' //@PROPS  El color esta muy corelacionado con la luz que se le ponga al componente, sino se le asigna luz, la figura no tendrá color.
          />  
        </mesh>



        {!FlagOfPresent ? 
          <Present 
            position={[6, 5.5, 4]}
            onClick={(e : any) => setFlagOfPresent(true)}
          />
        : 
          <Car 
            position={[6, 5.5, 4]}
            onClick={(e : any) => setFlagOfPresent(false)}
          />
        }


        <SolarPanel 
          position={[1, 7.8, 4]}
          onClick={() => setActiveSolarPanel(!ActiveSolarPanel)}
          active={ActiveSolarPanel}
        />

        {/* 
        <Car  
          position={[6, 5.5, 4]}
          // onClick={(e : any) => setPositionCar(PositionCar + 1)}
        /> */}


        {/* Video Wall */}
        <mesh castShadow receiveShadow position={[0, 5, -1]}  >
          <boxGeometry args={[17, 11, 1]} />
          <meshStandardMaterial 
            color='black'
            envMapIntensity={1}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Base */}
        <mesh>
          <cylinderGeometry 
            args={[10, 10, 10, 64 ]}
          />
          <meshStandardMaterial
            color='black' //@PROPS  El color esta muy corelacionado con la luz que se le ponga al componente, sino se le asigna luz, la figura no tendrá color.
            roughness={0}
            metalness={0}
            envMapIntensity={1}
          />  
        </mesh>
      </group>


      {/* Estrellas de Background. */}
      <Stars radius={50} depth={50} count={1000} factor={20} saturation={0} fade speed={1} />

    </Canvas>
  );
}
 
export default Home;