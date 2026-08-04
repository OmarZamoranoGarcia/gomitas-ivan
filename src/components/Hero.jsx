import 'iconify-icon';
import { WhatsAppButton, InstargramButton } from "./Buttons";

export default function Hero() {
  const cellNumber = import.meta.env.VITE_CELL_NUMBER;
  const message = import.meta.env.VITE_MESSAGE;
  return (
    <section className="relative min-h-screen pt-32 sm:pt-38 pb-16 sm:pb-20 px-4 sm:px-6 overflow-x-hidden bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-gradient2)]">
      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-16 place-items-center">

        {/* Columna Izquierda */}
        <div className="w-full z-10 px-4 xl:pl-50">
          <h1 className="text-primary text-center font-bold leading-tight text-4xl sm:text-6xl xl:text-start lg:text-7xl xl:text-8xl leading-[0.9] mb-6 sm:mb-8">
            El reino de gomitas más delicioso de
            <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-[#FF3B30] to-[#AF52DE]"> todo Tijuana
            </span>
          </h1>     

          <div className="w-full flex items-center justify-center xl:justify-start gap-4 sm:gap-8">
            <a
              href="https://www.instagram.com/tj_gomiland/?utm_source=ig_web_button_share_sheet"  
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold duration-200 shadow-md hover:shadow-lg transition-all transform hover:scale-110 hover:translate-x-2"
            >
              <InstargramButton rounded="full" px="6" py="4" />
            </a>

            <a
              href={`https://wa.me/${cellNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all transform hover:scale-110 hover:translate-x-2"
            >
              <WhatsAppButton rounded="full" px='6' py="4"/>
            </a>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="relative flex justify-center mt-8 lg:mt-0 px-4 sm:px-0">
          <div className="absolute inset-0 blur-[120px] opacity-20 bg-gradient-to-tr from-[#FF3B30] via-[#FFCC00] to-[#007AFF] animate-pulse" />

          <div className="relative z-10 animate-float">
            <div className="w-[clamp(260px,26vw,460px)] aspect-[10/13] rounded-[40px] bg-neutral-900 border-2 border-white/10 shadow-2xl overflow-hidden relative group transition-transform duration-700 hover:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B30]/20 to-transparent" />
              <div className="p-5 sm:p-7 flex flex-col items-center h-full">

                <div className="w-[clamp(3.5rem,6vw,5rem)] h-[clamp(3.5rem,6vw,5rem)] rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 sm:mb-3 flex-shrink-0">
                  <iconify-icon icon="fluent-emoji:hot-pepper" className="text-[clamp(1.75rem,3vw,3rem)]" />
                </div>

                <h3 className="text-secondary text-[clamp(1.1rem,2vw,1.75rem)] text-center mb-1 sm:mb-2 leading-tight">
                  Gomitas de durazno
                </h3>

                <img
                  src="/PeachGummy.jpeg"
                  alt="Gomita"
                  className="w-4/5 h-[45%] object-cover rounded-lg mb-4 sm:mb-5"
                />

                <div className="mt-auto w-full">
                  <div className="flex justify-between items-end mb-2 sm:mb-3">
                    <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                      Nivel de picante
                    </span>
                    <span className="text-[#FF3B30] text-xs sm:text-sm font-bold">EXTREMO</span>
                  </div>
                  <div className="h-1.5 sm:h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 w-[85%]" />
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 animate-bounce">
              <iconify-icon icon="fluent-emoji-flat:peach" className="text-4xl sm:text-6xl drop-shadow-2xl" />
            </div>
            <div className="absolute bottom-14 -right-4 sm:bottom-20 sm:-right-12 w-16 h-16 sm:w-24 sm:h-24 rotate-12">
              <iconify-icon icon="fluent-emoji-flat:peach" className="text-5xl sm:text-7xl drop-shadow-2xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}