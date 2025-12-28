import { useState } from "react";

type ModalType = "letter" | "playlist" | null;

export default function Letter() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <>
      {/* Botões */}
      <div className="flex items-center justify-center gap-6">
        {/* Botão da carta */}
        <button
          onClick={() => setActiveModal("letter")}
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
          onClick={() => setActiveModal("playlist")}
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
          {activeModal === "letter" && (
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
                Oie, bê! Tudo bem?
                <br />
                <br />
                Eu não sou muito bom com textos fofos ou algo assim, então vou
                apenas falando o que vier do coração. Larissa, o que falar sobre
                você? Para você e sobre como a gente construiu o “nós”. Não
                conheço palavras suficientes para lhe agradecer por tudo o que
                nos tornamos e pelo homem que você está me ajudando a me tornar.
                Talvez eu deva começar pelo começo. Comecei o ano um tanto
                quanto desacreditado de muita coisa, com muitas dúvidas sobre
                quem eu era e o que eu iria fazer com a minha vida. Os últimos
                anos não foram lá os melhores anos da minha vida. Mas do que eu
                tenho a reclamar? A maioria da minha família está bem. Perdi
                minha tia-avó no caminho; esse foi o meu primeiro Natal sem ela
                e, honestamente, durante o Natal eu nem lembrei dela. Me sinto
                um lixo por isso. Em seu funeral, não chorei. Parte de mim diz
                que foi pelo fato de eu ter conseguido me despedir dela antes de
                ela partir, e outra parte é porque eu sempre fugi, tentei fugir
                dos meus sentimentos. Afinal, é mais fácil se esconder deles do
                que enfrentá-los. E agora você deve estar se perguntando onde
                você entra nisso. Depois que eu te conheci, comecei a ser mais
                honesto comigo, a expressar o que sinto de verdade e a falar sem
                medo o que está no meu coração. Com você, me sinto seguro para
                dizer o que se passa aqui, mesmo que às vezes você diga que pesa
                o clima. Conversas “pesadas” são necessárias para
                relacionamentos duradouros e, bom, nós estamos fechando 2025 já
                nos preparando para o nosso futuro relacionamento. Já me deparei
                muitas vezes com pessoas dizendo que deveriam ter se conhecido
                antes, mas eu acho que não. Nós nos conhecemos no tempo certo.
                Em meio a tantas coisas da vida, te conheci justamente no ano em
                que você fez o seu melhor ENEM e que, se Deus quiser, você vai
                entrar. Se fosse no ano passado, nosso futuro relacionamento
                provavelmente não iria acontecer, pois você teria que focar
                muito mais nos estudos, e eu era muito mais imaturo e burro do
                que fui no ano passado — e ainda sou bem burro e imaturo, mas
                com você é diferente. Eu sinto vontade de mudar, sinto vontade
                de simplesmente ser melhor. Você me inspira a ser melhor. Eu
                jamais imaginaria que estaria às 4:55 da manhã escrevendo uma
                carta para você e, ainda mais, fazendo um mini site só para você
                visualizar a carta. E, véi, eu odeio design, e mesmo assim
                pensei: “Véi, tenho que aprender hoje para fazer algo legal para
                ela”. Pô, Maurício, ela te deu um presente de Natal e você não
                deu nada para ela. Faça alguma coisa enquanto você não compra um
                presente para ela, pelo amor de Jesus. Minha psicóloga brincava
                dizendo: “Maurício, você estava vindo de uma baixa para uma
                crescente sem precedentes. Você, em pouco tempo, está começando
                a amadurecer. O efeito da garota certa na vida do garoto certo é
                real mesmo”. E eu sempre relutava e dizia: “Não, tia, ela já me
                falou que relacionamento é off para ela”. E quem diria… hoje eu
                estou louco para poder te chamar de minha namorada, poder ter um
                churrasco em família, ir para os aniversários dos seus primos
                pequenos, conhecer seu tio (kkkkkkkkk). E eu cada vez mais sinto
                que isso também está virando a sua vontade — e, meu Senhor, como
                eu sou feliz por isso. Agradeço todos os dias ao Senhor por ter
                me dado você como presente. Você todos os dias me ensina como
                ser um filho melhor, um homem melhor, um “namorado” melhor e o
                cara que eu julgo ser o certo para você. Não acredito em alma
                gêmea; acredito que eu e você, com o passar do tempo, fomos nos
                moldando e encaixando um no outro para que o encaixe ficasse
                perfeito. Grande parte disso se dá, primeiramente, a Jesus e,
                segundamente, a nós e às nossas conversas (que nunca falte
                diálogo entre nós). Não quero admitir, mas neste momento estou
                chorando — de felicidade, claro — só de lembrar de todos os
                momentos que passamos juntos, nossas risadas e suas caras e
                bocas sempre que eu fazia e faço uma brincadeira, sempre que
                você me olha e me pergunta o que eu estou pensando. E eu
                pensando em como vou lhe dizer que eu simplesmente amo-te de
                todo o coração. No começo de tudo, eu entrei somente com o pé
                direito, mas agora eu já me joguei de corpo e alma, porque eu
                desejo muito fazer da minha vida ímpar tendo você como meu par.
                Dizer que você fez do meu 2025 melhor é muito simplório, tendo
                em vista tudo o que passamos juntos. Você não só tornou meu 2025
                melhor como mudou a minha vida. Minha vida agora se divide em
                antes da Larissa e depois da Larissa (kkkkkkkkkkkk). Eu não
                espero dividir com você apenas esse 2025, quero dividir todos os
                próximos anos que vierem pela frente. Isso está até parecendo
                uma declaração de amor, né? De certa forma é sim, mas também é
                uma cartinha de agradecimento pelo presente de Natal e pelo
                presente que Jesus me deu. Então, muito obrigado, Larissa, por
                fazer da minha vida e dos meus dias algo tão leve, colorido e
                bonito. Sem você, nada disso estaria acontecendo. Bem que dizem
                que o que Deus planejou é perfeito.
                <br />
                <br />
                Tenho que colocar um assinado? Hmmmm… acho que sim, né?
                Assinado: Mauricio Siqueira Cavalcante Bernardo, vulgo seu bê,
                amorzinho e boiolinha. Brincadeiras à parte, Larissa, amo-te de
                todo o coração. Estou absurdamente orgulhoso de você e da mulher
                que você está se tornando. Espero ser digno de presenciar isso
                de perto e dividir os seus dias comigo. Você é assustadoramente
                incrível. Sou completamente apaixonado por cada detalhe que
                forma você. Com amor, Maumau ❤️.
              </p>
            </div>
          )}

          {/* Playlist Spotify (slide de baixo) */}
          {activeModal === "playlist" && (
            <div
              onClick={(e) => e.stopPropagation()}
              className=" bg-white p-4 rounded-xl shadow-2xl w-full max-w-md animate-[letter_0.4s_ease-out] "
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/4rt0LotXg0ff8F5ZL9pyUh?utm_source=generator"
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
  );
}
