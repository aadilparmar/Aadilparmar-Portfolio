import React, { useRef } from 'react'
import { useGLTF, useVideoTexture} from '@react-three/drei'

const DemoComputer = (props) => {
  const group=useRef()
    const { nodes, materials } = useGLTF('/models/personal_computer.glb')
    const txt=useVideoTexture(props.texture?props.texture:'/textures/project/project1.mp4')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={150}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_PC_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_LightMat_0.geometry}
              material={materials.LightMat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Screen_0.geometry}
              material={materials.Screen}
            >
                <meshBasicMaterial map={txt}/>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Keyboard_0.geometry}
              material={materials.Keyboard}
            />
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models/personal_computer.glb');
export default DemoComputer
