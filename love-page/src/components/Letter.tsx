import { useState } from 'react'

type ModalType = 'letter' | 'playlist' | null

export default function Letter() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  return (
    <>
      {/* Botões */}
      <div className="flex items-center justify-center gap-6">
        {/* Botão da carta */}
        <button
          onClick={() => setActiveModal('letter')}
          aria-label="Abrir carta"
          className="
            flex items-center justify-center
            w-24 h-24 rounded-full
            bg-white/30 backdrop-blur-md
            shadow-lg
            animate-pulse
            hover:scale-110
            transition-transform
          "
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/266/470/original/love-letter-icon-free-png.png"
            alt="Carta de amor"
            className="w-14 h-14"
          />
        </button>

        {/* Botão Spotify */}
        <button
          onClick={() => setActiveModal('playlist')}
          aria-label="Abrir playlist"
          className="
            flex items-center justify-center
            w-24 h-24 rounded-full
            bg-white/30 backdrop-blur-md
            shadow-lg
            hover:scale-110
            transition-transform
          "
        >
          {/* Spotify SVG */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 168 168"
            className="fill-[#1DB954]"
            aria-hidden="true"
          >
            <path d="M84 0a84 84 0 1 0 0 168A84 84 0 0 0 84 0Zm38.6 121.3a5.2 5.2 0 0 1-7.1 1.7c-19.5-11.9-44-14.6-72.9-8a5.2 5.2 0 1 1-2.3-10.1c31.7-7.2 58.9-4.1 81.4 9.4a5.2 5.2 0 0 1 1.7 7.1Zm10.1-22.6a6.5 6.5 0 0 1-8.9 2.1c-22.3-13.7-56.3-17.7-82.6-9.7a6.5 6.5 0 1 1-3.8-12.5c30.1-9.1 67.5-4.7 93.4 11.2a6.5 6.5 0 0 1 2.1 8.9Zm.9-23.5C106.8 58.9 62.2 57.4 39.7 64.2a7.8 7.8 0 1 1-4.5-14.9c26-7.9 74-6.4 104.5 12.3a7.8 7.8 0 1 1-8.1 13.6Z" />
          </svg>
        </button>
      </div>

      {/* Overlay (usado por ambas modais) */}
      {activeModal && (
        <div
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
        >
          {/* Carta */}
          {activeModal === 'letter' && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                p-8
                rounded-xl
                max-w-lg
                text-center
                shadow-2xl
                animate-[letter_0.4s_ease-out]
              "
            >
              <p className="text-lg leading-relaxed">
                Oi meu amor,
                <br /><br />
                Fiz essa pequena página só para te lembrar do quanto você é especial para mim.
                Cada detalhe aqui carrega um pedacinho do meu carinho por você.
                <br /><br />
                Com amor ❤️
              </p>
            </div>
          )}

          {/* Playlist Spotify (slide de baixo) */}
          {activeModal === 'playlist' && (
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-white p-4 rounded-xl shadow-2xl w-full max-w-md animate-[letter_0.4s_ease-out] ">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/6bt5NGYjGe7HQ85h5AbIDl?utm_source=generator"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          )}
        </div>
      )}

      {/* Animações */}
      <style>
        {`
          @keyframes letter {
            0% {
              opacity: 0;
              transform: scale(0.6) translateY(40px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes slideUp {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}
