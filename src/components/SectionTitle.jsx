// Titre de section : petit surtitre orange, titre, texte d'introduction facultatif
export default function SectionTitle({ eyebrow, titre, texte, centre = true, clair = false }) {
    return (
        <div className={`mb-12 md:mb-16 ${centre ? 'text-center mx-auto' : ''} max-w-3xl`}>
            {eyebrow && (
                <p className="text-motora-orange font-bold tracking-widest uppercase text-xs md:text-sm mb-3">{eyebrow}</p>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${clair ? 'text-white' : 'text-motora-navy'}`}>
                {titre}
            </h2>
            {texte && (
                <p className={`mt-5 text-lg leading-relaxed ${clair ? 'text-slate-300' : 'text-slate-600'}`}>{texte}</p>
            )}
        </div>
    );
}
