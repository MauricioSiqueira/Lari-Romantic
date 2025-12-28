import { useEffect, useRef,useState } from 'react'
import foto1 from '../assets/foto1.jpeg'
import foto2 from '../assets/foto2.jpeg'
import foto3 from '../assets/foto3.jpeg'
import foto4 from '../assets/foto4.jpeg'
import foto5 from '../assets/foto5.jpeg'
import foto6 from '../assets/foto6.jpeg'
import foto7 from '../assets/foto7.jpeg'
import foto8 from '../assets/foto8.jpeg'
import foto9 from '../assets/foto9.jpeg'
import foto10 from '../assets/foto10.jpeg'
import foto11 from '../assets/foto11.jpeg'
import foto12 from '../assets/foto12.jpeg'
import foto13 from '../assets/foto13.jpeg'
import foto14 from '../assets/foto14.jpeg'
import foto15 from '../assets/foto15.jpeg'
import foto16 from '../assets/foto16.jpeg'
import foto17 from '../assets/foto17.jpeg'
import foto18 from '../assets/foto18.jpeg'

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18]
const INTERVAL = 3000

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [paused, setPaused] = useState(false)

  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setFade(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length)
        setFade(true)
      }, 300)
    }, INTERVAL)

    return () => clearInterval(interval)
  }, [paused])

  /* ===== Swipe mobile ===== */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const diff = touchStartX.current - e.changedTouches[0].clientX

    if (Math.abs(diff) > 50) {
      setFade(false)

      setTimeout(() => {
        setIndex((prev) =>
          diff > 0
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length
        )
        setFade(true)
      }, 200)
    }

    touchStartX.current = null
  }

  return (
    <div
      className="w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-lg relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fundo borrado */}
      <img
        src={images[index]}
        alt=""
        className={`
          absolute inset-0 w-full h-full
          object-cover blur-xl scale-110
          transition-opacity duration-500
          ${fade ? 'opacity-100' : 'opacity-0'}
        `}
        draggable={false}
      />

      {/* Imagem principal */}
      <img
        src={images[index]}
        alt="Momento especial"
        className={`
          relative w-full h-full
          object-contain
          transition-opacity duration-500
          ${fade ? 'opacity-100' : 'opacity-0'}
        `}
        draggable={false}
      />
    </div>
  )
}
