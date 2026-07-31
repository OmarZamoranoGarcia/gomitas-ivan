import Nav from './components/Nav';
import Hero from './components/Hero';
import FlavorCard from './components/FlavorCard';
import Ubication from './components/Ubication';
import Footer from './components/Footer';

export default function App() {
  const FLAVORS = [
    {
      id: "berry",
      icon: "fluent-emoji:watermelon",
      glow: "bg-red-500/20",
      tagLabel: "Spicy 🔥",
      tagColor: "text-[#FF3B30]",
      price: "$14.99",
      name: "BLAZIN' BERRY",
      desc: "Wild mountain strawberries with a slow-burning ghost pepper finish.",
      hoverBorder: "hover:border-red-500/50",
      hoverBtn: "hover:bg-[#FF3B30]",
      hoverBtnText: "",
    },
    {
      id: "pineapple",
      icon: "fluent-emoji:pineapple",
      glow: "bg-yellow-400/20",
      tagLabel: "Zesty ⚡️",
      tagColor: "text-[#FFCC00]",
      price: "$14.99",
      name: "PINEAPPLE PUNCH",
      desc: "Tropical pineapple blend with a tangy habanero zing that wakes you up.",
      hoverBorder: "hover:border-yellow-400/50",
      hoverBtn: "hover:bg-[#FFCC00]",
      hoverBtnText: "hover:text-black",
    },
    {
      id: "grape",
      icon: "fluent-emoji:grapes",
      glow: "bg-purple-500/20",
      tagLabel: "Atomic ☢️",
      tagColor: "text-[#AF52DE]",
      price: "$14.99",
      name: "GRAVITY GRAPE",
      desc: "Deep purple grape flavor paired with our most intense spice profile yet.",
      hoverBorder: "hover:border-purple-500/50",
      hoverBtn: "hover:bg-[#AF52DE]",
      hoverBtnText: "",
    },
  ];

  return (
  <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
    <main>
      <section className="min-h-screen snap-start">
        <Nav />
        <Hero />
      </section>

      <section
        id="catalogo"
        className="min-h-screen snap-start relative pt-24 sm:pt-28 px-4 sm:px-6 bg-gradient-to-r from-[var(--color-gradient)] to-[var(--color-gradient2)]"
      >
        <h2 className="text-secondary text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Sabores
        </h2>
        <div className="flex flex-wrap items-center justify-center pb-12 gap-6 sm:gap-10 max-w-[100rem] mx-auto">
          {FLAVORS.map((flavor) => (
            <FlavorCard key={flavor.id} flavor={flavor} />
          ))}
        </div>
      </section>

      <section className="min-h-screen snap-start">
        <Ubication />
      </section>
    </main>

    <footer className="snap-end">
      <Footer />
    </footer>
  </div>
);
}