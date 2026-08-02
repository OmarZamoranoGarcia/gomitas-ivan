import { LuMapPin } from 'react-icons/lu';
import { WhatsAppButton, InstargramButton, FacebookButton } from "./Buttons";

export default function Ubication() {
  return (
    <section
      id="ubicacion"
      className="flex flex-col items-center justify-center relative px-4 sm:px-6 py-16 overflow-x-hidden bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-gradient2)]"
    >
      {/* Encabezado */}
      <h1 className="text-secondary text-4xl font-bold text-center mb-8 md:mb-12">
        Punto de venta
      </h1>

      {/* Contenedor centrador */}
      <div className="w-full flex justify-center">
        {/* Tarjeta principal */}
        <div className="w-full sm:w-4/5 max-h-[85dvh] bg-[var(--color-background-card)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[var(--color-purple)]/10 transition-shadow duration-500 flex flex-col">
          {/* Información de la ubicación */}
          <div className="p-4 md:p-8 border-b border-[var(--color-border)] flex-shrink-0">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-primary text-xl md:text-3xl font-semibold flex items-center gap-3">
                <LuMapPin className="text-[var(--color-red)] text-2xl md:text-3xl animate-pulse-slow" />
                <span className="text-sm md:text-base">Angely Showroom & Coffee</span>
              </h2>

              {/* Botones de redes sociales */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/angelyshowroom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <InstargramButton rounded="lg" px="4" py="2" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100046370574479#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <FacebookButton px="4" py="2" />
                </a>
              </div>
            </div>
          </div>

          {/* Mapa - alto propio con clamp en dvh, ya no compite con flex-1 ni aspect-ratio */}
          <div className="relative min-h-0 h-[clamp(220px,45dvh,480px)]">
            {/* Gradiente decorativo */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-red)] via-[var(--color-yellow)] to-[var(--color-purple)] z-10"></div>

            <div className="w-full h-full p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.32442120149!2d-116.9655678345708!3d32.50881353877993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9394505b0f55f%3A0xf6ba91748b550b3!2sANGELY%20SHOWROOM%20%26%20COFFEE!5e0!3m2!1ses!2smx!4v1775799512415!5m2!1ses!2smx"
                width="100%"
                height="100%"
                className="rounded-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Angely Showroom & Coffee"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}