import Nav from './components/Nav';
import Hero from './components/Hero';
import FlavorCard from './components/FlavorCard';
import Ubication from './components/Ubication';
import Footer from './components/Footer';

export default function App() {
  const FLAVORS = [
    {
      id: "watermelon",
      icon: "fluent-emoji:watermelon",
      image: "/WatermelonGummy.jpeg",
      glow: "bg-red-500/20",
      tagLabel: "Dulce | Picante",
      tagColor: "text-[#FF3B30]",
      price: "",
      name: "Gomitas de sandía",
      desc: "Ricas gomitas de sandía cubiertas con nuestro chamoy preparado. Para resaltar su sabor dulce con un toque picosito. 😋🍉",
      hoverBorder: "hover:border-red-500/50",
      hoverBtn: "hover:bg-[#FF3B30]",
      hoverBtnText: "",
    },
    {
      id: "peach",
      icon: "fluent-emoji:peach",
      image: "/PeachGummy.jpeg",
      glow: "bg-yellow-400/20",
      tagLabel: "Dulce | Picante",
      tagColor: "text-[#FFCC00]",
      price: "",
      name: "Gomitas de durazno",
      desc: "Suaves gomitas de durazno bañadas en nuestra receta de chamoy preparado, hecho para los amantes de lo frutal y picosito. 😉🍑",
      hoverBorder: "hover:border-yellow-400/50",
      hoverBtn: "hover:bg-[#FFCC00]",
      hoverBtnText: "hover:text-black",
    },
    {
      id: "shark",
      icon: "noto-v1:shark",
      image: "/SharkGummy.jpeg",
      glow: "bg-blue-500/20",
      tagLabel: "Dulce | Acidito",
      tagColor: "text-[#4A5D70]",
      price: "",
      name: "Gomitas de tiburón",
      desc: "Deliciosas gomitas de tiburón cubiertas con un preparado de dulce de mora azul. La combinación perfecta entre lo dulce y lo acidito. 🦈🫐",
      hoverBorder: "hover:border-blue-500/50",
      hoverBtn: "hover:bg-[#AF52DE]",
      hoverBtnText: "",
    },
    {
      id: "worm",
      iconImg: "worms.svg",
      image: "/WormGummy.jpeg",
      glow: "bg-red-500/20",
      tagLabel: "Picante",
      tagColor: "text-[#D8122A]",
      price: "",
      name: "Gomitas de gusanitos",
      desc: "Los clásicos gusanitos de gomita llevados a otro nivel con nuestro chamoy preparado. Perfectos para quienes son fieles a lo picoso. ❤️‍🔥🌶️",
      hoverBorder: "hover:border-red-700/50",
      hoverBtn: "hover:bg-[#AF52DE]",
      hoverBtnText: "",
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll">
      <main>
        <section className="min-h-screen">
          <Nav />
          <Hero />
        </section>

        <section
          id="catalogo"
          className="relative pt-16 px-4 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-gradient2)]"
        >
          <h2 className="text-secondary text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Sabores
          </h2>
          <div className="flex flex-wrap items-center justify-center pb-12 gap-6 lg:gap-20 max-w-[100rem] mx-auto">
            {FLAVORS.map((flavor) => (
              <FlavorCard key={flavor.id} flavor={flavor} />
            ))}
          </div>
        </section>       
          <Ubication />
      </main>
      <Footer />
    </div>
  );
}