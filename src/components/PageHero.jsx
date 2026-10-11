// En-tête commun aux pages intérieures : fond bleu nuit, photo facultative
export default function PageHero({ eyebrow, titre, sousTitre, image, children }) {
    return (
        <section className="relative overflow-hidden bg-motora-navy pt-32 pb-16 md:pt-40 md:pb-24">
            {image && (
                <>
                    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-motora-navy via-motora-navy/85 to-motora-navy/40"></div>
                </>
            )}
            {/* Halo décoratif aux couleurs de la marque */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-motora-orange/20 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
                {eyebrow && (
                    <p className="inline-flex items-center gap-2 text-motora-orange font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                        <span className="w-8 h-0.5 bg-motora-orange"></span> {eyebrow}
                    </p>
                )}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">{titre}</h1>
                {sousTitre && <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">{sousTitre}</p>}
            </div>
        </section>
    );
}
