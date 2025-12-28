import { useState } from 'react'

export default function Letter() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botão da carta */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir carta"
        className="
          mx-auto
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

      {/* Modal da carta */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white
              p-8
              rounded-xl
              max-w-lg
              text-center
              shadow-2xl
              transform
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
        </div>
      )}

      {/* Animação custom */}
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
        `}
      </style>
    </>
  )
}
