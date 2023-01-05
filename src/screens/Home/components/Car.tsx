import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Car(props : any) {
  const group = useRef()
  const { nodes, materials }  : any = useGLTF('models/car.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.1} >
        <mesh geometry={nodes.Cylinder018_Cylinder007.geometry} material={materials.Car} />
        <mesh geometry={nodes.Cylinder018_Cylinder007_1.geometry} material={materials.Windshield} />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf')