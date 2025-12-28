
export default function SpotifyPlayer() {
  return (
    <div className="w-full">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/23DMhYv6WjRmIRck1Uwjev?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
