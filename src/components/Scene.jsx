import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, Html, useProgress } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

/* ─────────────────────────────────────────────
   DESK SCENE — Built with Three.js primitives
   No external .glb needed — 100% code-generated
   ───────────────────────────────────────────── */

function Box({ args, position, rotation, color, roughness = 0.6, metalness = 0 }) {
  return (
    <mesh position={position} rotation={rotation || [0,0,0]} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  )
}

function RoundedBox({ args, position, rotation, color, roughness = 0.5, metalness = 0 }) {
  return (
    <mesh position={position} rotation={rotation || [0,0,0]} castShadow receiveShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  )
}

// ── Desk ──────────────────────────────────────────────────────────────
function Desk() {
  const wood = '#6b4226'
  const woodDark = '#5a3820'
  const metal = '#888'
  return (
    <group>
      {/* Table top */}
      <Box args={[6.5, 0.12, 2.5]} position={[0, 0, 0]} color={wood} roughness={0.45} />
      {/* Table legs */}
      <Box args={[0.08, 1.1, 0.08]} position={[-3.1,  -0.6, -1.1]} color={woodDark} />
      <Box args={[0.08, 1.1, 0.08]} position={[ 3.1,  -0.6, -1.1]} color={woodDark} />
      <Box args={[0.08, 1.1, 0.08]} position={[-3.1,  -0.6,  1.1]} color={woodDark} />
      <Box args={[0.08, 1.1, 0.08]} position={[ 3.1,  -0.6,  1.1]} color={woodDark} />
      {/* Shelf underneath */}
      <Box args={[6.3, 0.05, 0.6]} position={[0, -0.9, -0.9]} color={wood} roughness={0.5} />
    </group>
  )
}

// ── Monitor Left (code) ───────────────────────────────────────────────
function MonitorLeft() {
  const clr = { frame: '#1a1a1a', screen: '#0d1117', stand: '#222', base: '#333' }
  return (
    <group position={[-1.7, 0.88, -0.7]} rotation={[0, 0.22, 0]}>
      {/* Frame */}
      <Box args={[1.55, 0.92, 0.06]} position={[0, 0, 0]} color={clr.frame} roughness={0.3} metalness={0.5}/>
      {/* Screen */}
      <mesh position={[0, 0, 0.035]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshStandardMaterial color={clr.screen} roughness={1} emissive="#0d1117" emissiveIntensity={0.5} />
      </mesh>
      {/* Code lines on screen */}
      <Html position={[0, 0, 0.04]} transform occlude distanceFactor={1.4} style={{ width: '280px', pointerEvents: 'none' }}>
        <div style={{
          background: '#0d1117',
          fontFamily: 'monospace',
          fontSize: '7px',
          lineHeight: '1.6',
          padding: '10px',
          color: '#c9d1d9',
          overflow: 'hidden',
          height: '160px',
          borderRadius: '2px',
          userSelect: 'none',
        }}>
          {[
            '<span style="color:#ff7b72">import</span> <span style="color:#d2a8ff">React</span> <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">\'react\'</span>',
            '<span style="color:#ff7b72">import</span> <span style="color:#d2a8ff">{ Canvas }</span> <span style="color:#ff7b72">from</span> <span style="color:#a5d6ff">\'@react-three/fiber\'</span>',
            '',
            '<span style="color:#ff7b72">export</span> <span style="color:#ff7b72">default</span> <span style="color:#d2a8ff">function</span> <span style="color:#79c0ff">App</span>() {',
            '  <span style="color:#ff7b72">return</span> (',
            '    &lt;<span style="color:#7ee787">Canvas</span> <span style="color:#79c0ff">camera</span>={{',
            '      <span style="color:#79c0ff">position</span>: [0, 2, 5]',
            '    }}&gt;',
            '      &lt;<span style="color:#7ee787">ambientLight</span> /&gt;',
            '      &lt;<span style="color:#7ee787">DeskScene</span> /&gt;',
            '    &lt;/<span style="color:#7ee787">Canvas</span>&gt;',
            '  )',
            '}',
          ].map((line, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }} />
          ))}
        </div>
      </Html>
      {/* Stand neck */}
      <Box args={[0.07, 0.3, 0.07]} position={[0, -0.6, 0.05]} color={clr.stand} roughness={0.3} metalness={0.5}/>
      {/* Stand base */}
      <Box args={[0.45, 0.05, 0.2]} position={[0, -0.76, 0.08]} color={clr.base} roughness={0.3} metalness={0.5}/>
    </group>
  )
}

// ── Monitor Center (profile card) ─────────────────────────────────────
function MonitorCenter({ activeSection, onSectionClick }) {
  const clr = { frame: '#1a1a1a', stand: '#222', base: '#333' }
  return (
    <group position={[0.45, 0.88, -0.85]}>
      {/* Frame */}
      <Box args={[1.7, 1.0, 0.06]} position={[0,0,0]} color={clr.frame} roughness={0.3} metalness={0.5}/>
      {/* Screen content via Html */}
      <Html position={[0, 0, 0.04]} transform occlude distanceFactor={1.4} style={{ width: '310px', pointerEvents: 'all' }}>
        <div style={{
          background: '#f8f5f0',
          borderRadius: '4px',
          padding: '18px 20px',
          height: '180px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'Inter, sans-serif',
          userSelect: 'none',
          overflow: 'hidden',
        }}>
          {/* Avatar */}
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#e85d04,#f4a261)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', color: '#fff', fontWeight: '700', flexShrink: 0,
          }}>A</div>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: '700', color: '#1a1a2e', fontStyle: 'italic' }}>
            Ahmad Syaiful
          </div>
          <div style={{ fontSize: '10px', color: '#555', marginBottom: '2px' }}>Full Stack Developer</div>
          <div style={{ display: 'flex', gap: '10px', fontSize: '10px' }}>
            {['GitHub', 'Resume', 'LinkedIn'].map(link => (
              <a key={link} href="#" style={{ color: '#e85d04', textDecoration: 'none', fontWeight: '600' }}>{link}</a>
            ))}
          </div>
          {/* Controls hint inside screen */}
          <div style={{ marginTop: '6px', fontSize: '10px', color: '#999', textAlign: 'center', lineHeight: '1.8' }}>
            Controls
          </div>
          <div style={{ display: 'flex', gap: '14px', fontSize: '9px', color: '#777' }}>
            <span>🖱 Pan</span>
            <span>🔍 Zoom</span>
            <span>🔄 Rotate</span>
          </div>
        </div>
      </Html>
      {/* Stand */}
      <Box args={[0.07, 0.3, 0.07]} position={[0, -0.65, 0.05]} color={clr.stand} roughness={0.3} metalness={0.5}/>
      <Box args={[0.5, 0.05, 0.22]} position={[0, -0.82, 0.08]} color={clr.base} roughness={0.3} metalness={0.5}/>
    </group>
  )
}

// ── Keyboard ──────────────────────────────────────────────────────────
function Keyboard() {
  const rows = [
    { keys: 14, y: 0.18 },
    { keys: 13, y: 0.06 },
    { keys: 12, y: -0.06 },
    { keys: 11, y: -0.18 },
  ]
  const colors = ['#f0f0f0','#f8d5e0','#d5e8f8','#f5f0d5','#d5f5e8']

  return (
    <group position={[0.1, 0.075, 0.62]} rotation={[-0.06, 0, 0]}>
      {/* Base plate */}
      <Box args={[2.0, 0.04, 0.6]} position={[0,0,0]} color="#e0ddd8" roughness={0.4} />
      {/* Keys */}
      {rows.map((row, ri) =>
        Array.from({ length: row.keys }).map((_, ki) => {
          const x = -0.9 + ki * (1.8 / (row.keys - 1))
          const clr = colors[Math.floor(Math.random() * colors.length)]
          return (
            <Box
              key={`${ri}-${ki}`}
              args={[0.1, 0.035, 0.09]}
              position={[x, 0.038, row.y]}
              color={clr}
              roughness={0.5}
            />
          )
        })
      )}
    </group>
  )
}

// ── Mouse ──────────────────────────────────────────────────────────────
function Mouse() {
  return (
    <group position={[1.65, 0.07, 0.5]}>
      {/* Pad */}
      <Box args={[0.5, 0.01, 0.4]} position={[0, 0, 0]} color="#2a2a2a" roughness={0.8}/>
      {/* Mouse body */}
      <mesh position={[0, 0.035, 0]} castShadow>
        <capsuleGeometry args={[0.04, 0.11, 4, 12]} />
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.2}/>
      </mesh>
    </group>
  )
}

// ── Lamp ──────────────────────────────────────────────────────────────
function Lamp() {
  return (
    <group position={[2.6, 0.06, -0.5]}>
      {/* Base */}
      <Box args={[0.24, 0.04, 0.16]} position={[0, 0, 0]} color="#1a1a1a" roughness={0.4} metalness={0.6}/>
      {/* Arm 1 */}
      <Box args={[0.04, 0.55, 0.04]} position={[0, 0.3, 0]} color="#1a1a1a" roughness={0.4} metalness={0.6}/>
      {/* Arm 2 */}
      <Box args={[0.04, 0.38, 0.04]} position={[-0.19, 0.73, 0]} rotation={[0, 0, -0.7]} color="#1a1a1a" roughness={0.4} metalness={0.6}/>
      {/* Shade */}
      <mesh position={[-0.36, 0.82, 0]} rotation={[0, 0, 0.6]} castShadow>
        <coneGeometry args={[0.14, 0.2, 12]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.6} side={THREE.DoubleSide}/>
      </mesh>
      {/* Light */}
      <pointLight position={[-0.36, 0.72, 0]} intensity={0.8} color="#ffcc77" distance={3} />
    </group>
  )
}

// ── Pencil Cup ────────────────────────────────────────────────────────
function PencilCup() {
  const pencilColors = ['#e85d04','#f4a261','#2ec4b6','#e71d36','#8338ec','#06d6a0']
  return (
    <group position={[2.0, 0.07, -0.7]}>
      {/* Cup */}
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.09, 0.2, 12]} />
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.3}/>
      </mesh>
      {/* Pencils */}
      {pencilColors.map((c, i) => (
        <mesh key={i} position={[0.02 * Math.cos(i * 1.1), 0.18, 0.02 * Math.sin(i * 1.1)]} rotation={[0.05 * (i % 3 - 1), i * 0.5, 0.05 * (i % 2 - 0.5)]}>
          <cylinderGeometry args={[0.012, 0.012, 0.22, 6]} />
          <meshStandardMaterial color={c}/>
        </mesh>
      ))}
    </group>
  )
}

// ── Mug ───────────────────────────────────────────────────────────────
function Mug() {
  return (
    <group position={[-2.6, 0.07, 0.55]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.09, 0.22, 16]} />
        <meshStandardMaterial color="#f0f0ec" roughness={0.6}/>
      </mesh>
      {/* Handle */}
      <mesh position={[0.12, 0, 0]} castShadow>
        <torusGeometry args={[0.05, 0.018, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#f0f0ec" roughness={0.6}/>
      </mesh>
      {/* Coffee inside */}
      <mesh position={[0, 0.09, 0]}>
        <cylinderGeometry args={[0.085, 0.085, 0.02, 16]} />
        <meshStandardMaterial color="#3d1a00" roughness={0.8}/>
      </mesh>
      {/* Text on mug */}
      <Html position={[0, 0, 0.105]} transform occlude distanceFactor={3} style={{ pointerEvents: 'none', userSelect: 'none' }}>
        <div style={{ fontFamily: 'Impact, sans-serif', fontSize: '13px', color: '#c0392b', lineHeight: '1.1', textAlign: 'center' }}>
          H🔴ME
        </div>
      </Html>
    </group>
  )
}

// ── Small plant ───────────────────────────────────────────────────────
function Plant() {
  return (
    <group position={[-2.9, 0.07, -0.8]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.07, 0.06, 0.14, 12]} />
        <meshStandardMaterial color="#be8c63" roughness={0.8}/>
      </mesh>
      <mesh position={[0, 0.12, 0]} castShadow>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial color="#2d6a4f" roughness={0.9}/>
      </mesh>
      <mesh position={[0.07, 0.18, 0.04]} rotation={[0.3, 0.5, 0.4]} castShadow>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#40916c" roughness={0.9}/>
      </mesh>
    </group>
  )
}

// ── Wall & Window ─────────────────────────────────────────────────────
function Room() {
  return (
    <group>
      {/* Floor */}
      <Box args={[12, 0.1, 8]} position={[0, -1.12, 0]} color="#d4c5b2" roughness={0.8}/>
      {/* Back wall */}
      <Box args={[12, 5, 0.12]} position={[0, 1.5, -2.5]} color="#e8e4dc" roughness={0.8}/>
      {/* Window frame */}
      <Box args={[2.5, 1.6, 0.15]} position={[0, 2.5, -2.42]} color="#8b7355" roughness={0.6}/>
      {/* Window glass */}
      <mesh position={[0, 2.5, -2.35]}>
        <planeGeometry args={[2.3, 1.4]} />
        <meshStandardMaterial color="#87ceeb" transparent opacity={0.4} roughness={0} metalness={0}/>
      </mesh>
      {/* Window blinds strips */}
      {Array.from({length: 8}).map((_, i) => (
        <Box key={i} args={[2.5, 0.04, 0.02]} position={[0, 3.1 - i * 0.14, -2.3]} color="#f5f0e8" roughness={0.5}/>
      ))}
      {/* Sunlight from window */}
      <directionalLight position={[0, 3, -1]} intensity={1.5} color="#fff5e4" target-position={[0, 0, 0]} />
    </group>
  )
}

// ── Camera animation on explore ────────────────────────────────────────
function CameraRig({ explored }) {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0.5, 0))
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (explored && !hasAnimated.current) {
      hasAnimated.current = true
      gsap.to(camera.position, {
        x: 0, y: 1.6, z: 3.8,
        duration: 1.8,
        ease: 'power3.inOut',
      })
    }
  }, [explored, camera])

  useFrame(() => {
    camera.lookAt(target.current)
  })

  return null
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN SCENE EXPORT
// ═══════════════════════════════════════════════════════════════════════
export default function Scene({ activeSection, onSectionClick }) {
  const [explored, setExplored] = useState(false)

  return (
    <>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.2, 5.8], fov: 48 }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#f5f5f0']} />
        <fog attach="fog" args={['#f5f5f0', 10, 20]} />

        {/* Lighting */}
        <ambientLight intensity={0.6} color="#fff8ee" />
        <directionalLight
          castShadow
          position={[5, 8, 3]}
          intensity={1.2}
          color="#fffbe8"
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.1}
          shadow-camera-far={30}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
        />

        {/* Scene objects */}
        <Room />
        <Desk />
        <MonitorLeft />
        <MonitorCenter activeSection={activeSection} onSectionClick={onSectionClick} />
        <Keyboard />
        <Mouse />
        <Lamp />
        <PencilCup />
        <Mug />
        <Plant />
        <ContactShadows position={[0, -1.06, 0]} opacity={0.35} scale={10} blur={2} />

        {/* Environment */}
        <Environment preset="apartment" />

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2.5}
          maxDistance={9}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.1}
          target={[0, 0.3, 0]}
          makeDefault
        />

        <CameraRig explored={explored} />
      </Canvas>
    </>
  )
}
