export default function FlavorCard({ flavor }) {
  return (
    <div
      className={`lg:max-w-lg xl:max-w-xl w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 p-[clamp(1.25rem,2vw+0.75rem,2rem)] rounded-[clamp(20px,2vw+16px,32px)] group transition-all hover:-translate-y-2 ${flavor.hoverBorder}`}
    >
      <div className="mb-6 sm:mb-8 w-full aspect-square xl:aspect-[5/6] max-h-48 xl:max-h-72 flex justify-center items-center relative">
        <div
          className={`w-[clamp(5rem,10vw+2rem,8rem)] aspect-square rounded-full ${flavor.glow} blur-2xl absolute`}
        />

        {/* Glow del icono, SEPARADO del contenedor que anima */}
        <div
          className={`absolute -top-5 -left-7 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full ${flavor.glow} blur-xl`}
        />

        {/* Icono / iconImg en la esquina superior izquierda, con animación */}
        <div className="absolute top-0 -left-3 z-20 flex items-center justify-center animate-bounce">
          {flavor.iconImg ? (
            <img
              src={flavor.iconImg}
              alt={flavor.name}
              className="relative w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg drop-shadow-2xl"
            />
          ) : (
            <iconify-icon
              icon={flavor.icon}
              className="inline-block relative text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] drop-shadow-2xl transition-transform group-hover:scale-110"
            />
          )}
        </div>

        {/* Imagen principal centrada */}
        <img
          src={flavor.image}
          alt={flavor.name}
          className="relative z-10 w-4/5 h-full mt-8 object-cover rounded-lg mb-4 sm:mb-5"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase ${flavor.tagColor}`}
        >
          {flavor.tagLabel}
        </span>
        {flavor.price && <span className="text-gray-400 text-sm">{flavor.price}</span>}    
      </div>
      <h3 className="text-secondary font-bold text-[clamp(1.25rem,1.5vw+0.9rem,1.5rem)] mt-4 mb-2">
        {flavor.name}
      </h3>
      <p className="text-gray-400 text-sm mb-6">{flavor.desc}</p>
    </div>
  );
}