import { MessageCircle } from 'lucide-react';
import { lienWhatsApp } from '../data/contact';

export default function WhatsAppButton() {
    return (
        <a
            href={lienWhatsApp('Bonjour Motora Business, je souhaite avoir des informations.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nous écrire sur WhatsApp"
            className="fixed bottom-5 right-5 z-40 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
            <MessageCircle size={30} />
        </a>
    );
}
