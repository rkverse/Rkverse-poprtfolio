import { useEffect, useRef, useCallback } from 'react'

const LERP             = 0.10
const PARTICLE_INTERVAL = 28
const PARTICLE_LIFE     = 480

const ID_DOT  = 'ac-cursor-dot'
const ID_RING = 'ac-cursor-ring'

export default function AnimatedCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const trailRef = useRef(null)
  const rafRef   = useRef(null)

  const mouse     = useRef({ x: -300, y: -300 })
  const ringPos   = useRef({ x: -300, y: -300 })
  const prevMouse = useRef({ x: -300, y: -300 })
  const lastPart  = useRef(0)
  const angle     = useRef(0)
  const isDark    = useRef(document.documentElement.classList.contains('dark'))

  const getColors = () =>
    isDark.current
      ? { dot: '#00FF41', ring: '#00FF41', particle: '#00FF41' }  /* --c-accent      */
      : { dot: '#39FF14', ring: '#39FF14', particle: '#39FF14' }  /* --c-accent-deep */

  // â”€â”€ Comet-tail particles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const spawnParticle = useCallback((x, y, vx, vy) => {
    const container = trailRef.current
    if (!container) return
    const c    = getColors()
    const size = 2.5 + Math.random() * 3.5
    const el   = document.createElement('div')
    el.style.cssText = `
      position:fixed;
      width:${size}px;height:${size}px;
      border-radius:50%;
      background:${c.particle};
      left:${x}px;top:${y}px;
      transform:translate(-50%,-50%);
      pointer-events:none;
      opacity:0.85;
    `
    container.appendChild(el)
    const born        = performance.now()
    const spreadAngle = Math.atan2(vy, vx) + (Math.random() - 0.5) * 1.4
    const speed       = 0.8 + Math.random() * 1.8
    let ox = 0, oy = 0

    const run = (now) => {
      const t = Math.min((now - born) / PARTICLE_LIFE, 1)
      if (t >= 1) { el.remove(); return }
      const ease = 1 - t * t
      ox += Math.cos(spreadAngle) * speed * (1 - t)
      oy += Math.sin(spreadAngle) * speed * (1 - t)
      el.style.opacity   = String(ease * 0.85)
      el.style.transform = `translate(calc(-50% + ${ox}px), calc(-50% + ${oy}px)) scale(${ease})`
      requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [])

  // â”€â”€ Shockwave ripple on click â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const spawnRipple = useCallback((x, y) => {
    const container = trailRef.current
    if (!container) return
    const c = getColors()
    for (let i = 0; i < 3; i++) {
      const el = document.createElement('div')
      el.style.cssText = `
        position:fixed;
        left:${x}px;top:${y}px;
        width:10px;height:10px;
        border-radius:50%;
        border:1.5px solid ${c.ring};
        transform:translate(-50%,-50%) scale(1);
        pointer-events:none;
        opacity:0.85;
      `
      container.appendChild(el)
      const start = performance.now() + i * 70
      const dur   = 520

      const run = (now) => {
        if (now < start) { requestAnimationFrame(run); return }
        const t = Math.min((now - start) / dur, 1)
        if (t >= 1) { el.remove(); return }
        el.style.transform = `translate(-50%,-50%) scale(${1 + t * 5.5})`
        el.style.opacity   = String((1 - t) * 0.8)
        requestAnimationFrame(run)
      }
      requestAnimationFrame(run)
    }
  }, [])

  // â”€â”€ RAF loop â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const tick = useCallback((now) => {
    const mx = mouse.current.x
    const my = mouse.current.y
    const vx = mx - prevMouse.current.x
    const vy = my - prevMouse.current.y
    prevMouse.current.x = mx
    prevMouse.current.y = my

    ringPos.current.x += (mx - ringPos.current.x) * LERP
    ringPos.current.y += (my - ringPos.current.y) * LERP
    const rx = ringPos.current.x
    const ry = ringPos.current.y

    angle.current = (angle.current + 1.2) % 360

    const dot  = dotRef.current
    const ring = ringRef.current
    if (dot && ring) {
      dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) rotate(${angle.current}deg)`
    }

    const speed = Math.hypot(vx, vy)
    if (speed > 2 && now - lastPart.current > PARTICLE_INTERVAL) {
      lastPart.current = now
      spawnParticle(mx, my, vx, vy)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [spawnParticle])

  // â”€â”€ Mount / unmount â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const themeObserver = new MutationObserver(() => {
      isDark.current = document.documentElement.classList.contains('dark')
      const c = getColors()
      if (dotRef.current)  dotRef.current.style.background   = c.dot
      if (ringRef.current) ringRef.current.style.borderColor  = c.ring
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'

    const onMove  = (e) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY }
    const onEnter = (e) => {
      if (!e.target.closest(INTERACTIVE)) return
      dotRef.current?.classList.add('ac--hover')
      ringRef.current?.classList.add('ac--hover')
    }
    const onLeave = (e) => {
      if (!e.target.closest(INTERACTIVE)) return
      dotRef.current?.classList.remove('ac--hover')
      ringRef.current?.classList.remove('ac--hover')
    }
    const onDown = (e) => {
      dotRef.current?.classList.add('ac--click')
      ringRef.current?.classList.add('ac--click')
      spawnRipple(e.clientX, e.clientY)
    }
    const onUp = () => {
      dotRef.current?.classList.remove('ac--click')
      ringRef.current?.classList.remove('ac--click')
    }

    document.addEventListener('mousemove', onMove,  { passive: true })
    document.addEventListener('mouseover', onEnter, { passive: true })
    document.addEventListener('mouseout',  onLeave, { passive: true })
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    document.documentElement.style.cursor = 'none'

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      document.documentElement.style.cursor = ''
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      themeObserver.disconnect()
    }
  }, [tick, spawnRipple])

  const C = getColors()

  return (
    <>
      {/* Particle / ripple layer */}
      <div
        ref={trailRef}
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9996 }}
      />

      {/* Rotating dashed ring (lerp-lagged) */}
      <div
        id={ID_RING}
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 42, height: 42,
          borderRadius: '50%',
          border: `2px dashed ${C.ring}`,
          pointerEvents: 'none',
          zIndex: 9997,
          willChange: 'transform',
          transition: 'width .22s, height .22s, border-radius .22s, border-color .25s, border-style .15s',
        }}
      />

      {/* Core dot */}
      <div
        id={ID_DOT}
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          background: C.dot,
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width .18s, height .18s, border-radius .18s, background .25s, opacity .2s',
        }}
      />

      <style>{`
        @media (pointer: coarse) {
          #${ID_DOT}, #${ID_RING} { display: none !important; }
        }

        /* Hover â€” ring morphs to rounded-rect */
        #${ID_RING}.ac--hover {
          width: 58px !important;
          height: 58px !important;
          border-radius: 14px !important;
          border-style: solid !important;
        }
        #${ID_DOT}.ac--hover {
          width: 5px !important;
          height: 5px !important;
          opacity: 0.5 !important;
        }

        /* Click â€” squish */
        #${ID_DOT}.ac--click {
          width: 13px !important;
          height: 13px !important;
          border-radius: 3px !important;
          opacity: 1 !important;
        }
        #${ID_RING}.ac--click {
          width: 26px !important;
          height: 26px !important;
          border-style: solid !important;
          border-radius: 6px !important;
        }

        @media (prefers-reduced-motion: reduce) {
          #${ID_DOT}, #${ID_RING} { display: none !important; }
        }
      `}</style>
    </>
  )
}

