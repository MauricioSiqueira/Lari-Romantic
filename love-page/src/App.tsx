
import Carousel from './components/Carousel'
import Letter from './components/Letter'
import SpotifyPlayer from './components/SpotifyPlayer'
import backgroundImage from './components/assets/background.jpg'

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
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
