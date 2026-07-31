export default function FlavorCard({ flavor }) {
  return (
    <div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 p-[clamp(1.25rem,2vw+0.75rem,2rem)] rounded-[clamp(20px,2vw+16px,32px)] group transition-all hover:-translate-y-2 ${flavor.hoverBorder}`}
    >
      <div className="mb-6 sm:mb-8 w-full aspect-square xl:aspect-[5/6] max-h-48 xl:max-h-72 flex justify-center items-center relative">
        <div
          className={`w-[clamp(5rem,10vw+2rem,8rem)] aspect-square rounded-full ${flavor.glow} blur-2xl absolute`}
        />
        <iconify-icon
          icon={flavor.icon}
          className="text-[clamp(3rem,6vw+1rem,6rem)] relative z-10 transition-transform group-hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase ${flavor.tagColor}`}
        >
          {flavor.tagLabel}
        </span>
        <span className="text-gray-400 text-sm">{flavor.price}</span>
      </div>
      <h3 className="text-secondary font-bold text-[clamp(1.25rem,1.5vw+0.9rem,1.5rem)] mb-3 sm:mb-4">
        {flavor.name}
      </h3>
      <p className="text-gray-400 text-sm mb-6">{flavor.desc}</p>
    </div>
  );
}