
import { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-64 overflow-hidden rounded-xl shadow-lg">
      <img src={images[index]} className="w-full h-full object-cover transition-all duration-700" />
    </div>
  )
}
