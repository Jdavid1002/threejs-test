import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Present(props : any) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('models/Present.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.013']} >
        <mesh geometry={nodes.NurbsPath.geometry} material={nodes.NurbsPath.material} />
        <mesh geometry={nodes.BezierCircle.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
      </mesh>
    </group>
  )
}

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/present/model.gltf')