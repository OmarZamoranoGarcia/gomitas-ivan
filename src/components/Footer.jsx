import { WhatsAppButton, InstargramButton, FacebookButton } from './Buttons';

export default function Footer() {
    return (
        <footer className="text-primary bg-[var(--color-background)] p-4 pt-4 flex flex-col items-center justify-center gap-4">
            <ul className="flex flex-col items-center justify-center sm:flex-row gap-4 md:gap-14">
                <li className='flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg'><WhatsAppButton/></li>
                <li><InstargramButton/></li>
                <li><FacebookButton/></li>
            </ul>
            <div className="text-center">
                &copy; 2026 Gomitas Ivan. Todos los derechos reservados.
            </div>
        </footer>
    );
}