import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo=(props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  
  return (
    <Float floatIntensity={2} dispose={null}>
      <group position={[8,8,0]} scale={0.03} {...props} >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0.1,10, 0.18102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.9166, 1.9166, 1.2734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/model/react.glb')

export default ReactLogo
