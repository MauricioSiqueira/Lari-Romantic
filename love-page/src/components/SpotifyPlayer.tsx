export default function SpotifyPlayer() {
  return (
    <div className="w-full">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/2o2xhyri4aJUtgMGkf5P0J?utm_source=generator&autoplay=1"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}