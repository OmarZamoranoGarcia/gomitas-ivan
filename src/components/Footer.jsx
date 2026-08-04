import { WhatsAppButton, InstargramButton } from './Buttons';

export default function Footer() {
    const cellNumber = import.meta.env.VITE_CELL_NUMBER;
    const message = import.meta.env.VITE_MESSAGE;
    return (
        <footer id="contacto" className="text-primary bg-[var(--color-background)] p-4 pt-4 flex flex-col items-center justify-center gap-4">
            <ul className="flex flex-col items-center justify-center sm:flex-row gap-4 md:gap-14">
                <li><a
                        href={`https://wa.me/${cellNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <WhatsAppButton                     
                        rounded="lg" px="4" py="2"/>
                    </a>
                </li>
                <li><a
                        href="https://www.instagram.com/tj_gomiland/?utm_source=ig_web_button_share_sheet"  
                        target="_blank"
                        rel="noopener noreferrer">
                        <InstargramButton rounded="lg" px="4" py="2"/>
                    </a>
                </li>          
            </ul>
            <div className="text-center">
                &copy; 2026 TJ Gomiland. Todos los derechos reservados.
            </div>
        </footer>
    );
}