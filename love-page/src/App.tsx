
import Carousel from './components/Carousel'
import Letter from './components/Letter'
import SpotifyPlayer from './components/SpotifyPlayer'

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')" }}
    >
      <div className="backdrop-blur-md bg-black/30 w-full h-full absolute inset-0" />

      <div className="relative z-10 w-full max-w-4xl p-4 space-y-8">
        <Carousel />
        <Letter />
        <SpotifyPlayer />
      </div>
    </div>
  )
}
