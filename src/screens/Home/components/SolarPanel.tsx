
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export interface ISolarPanelProps {
  active : boolean
}

export default function SolarPanel(props : ISolarPanelProps | any) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('models/SolarPanel.gltf')

  const numberOfDivideRotation = props?.active ? 6 : 2

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[0, -0.29, 0,]} rotation={[0, Math.PI / 2, 0,]} />
      <group position={[0.18, -0.29, 0,]} rotation={[Math.PI / numberOfDivideRotation, 0, 0,]} >
        <mesh geometry={nodes.Cube.geometry} material={materials.SolarCell} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} />
      </group>
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/solar-panel/model.gltf')