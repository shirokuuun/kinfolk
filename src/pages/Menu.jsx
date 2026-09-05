import { Coffee, Plus } from "lucide-react";
import { coffeeMenu, coffeeAddon } from "../data/coffee";
import {
  addons,
  pasta,
  riceBowls,
  sandwiches,
  snacks,
  wraps,
} from "../data/food";
import Americano from "../assets/coffee/americano.png";
import MatchaOat from "../assets/coffee/matcha_oat.png";
import ChickenPesto from "../assets/snacks/chicken_pesto.png";

const featuredImages = [
  { src: Americano, alt: "Iced americano" },
  { src: MatchaOat, alt: "Matcha oat latte" },
  { src: ChickenPesto, alt: "Chicken pesto pasta" },
];

const foodGroups = [
  { title: "Rice bowls", items: riceBowls },
  { title: "Pasta", items: pasta },
  { title: "Sandwiches and wraps", items: [...sandwiches, ...wraps] },
  { title: "Snacks", items: snacks },
];

function coffeePrice(item) {
  if (!item.size16) return `₱${item.size12}`;
  return `₱${item.size12} / ₱${item.size16}`;
}

function foodPrice(item) {
  if (item.price) return `₱${item.price}`;
  if (item.solo && item.family) return `₱${item.solo} / ₱${item.family}`;
  if (item.solo) return `₱${item.solo}`;
  return `₱${item.family}`;
}

function MenuRow({ item, price }) {
  return (
    <li className="grid grid-cols-[1fr_auto] gap-5 border-b border-ink/10 py-4">
      <div>
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-main text-xl leading-tight text-ink">
            {item.name}
          </h3>
          {item.note && (
            <span className="label text-[8px] text-ash">{item.note}</span>
          )}
        </div>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-ash">
          {item.description}
        </p>
      </div>
      <span className="pt-1 text-sm font-semibold text-ink">{price}</span>
    </li>
  );
}

export default function Menu() {
  return (
    <main className="bg-paper text-ink">
      <section className="pt-28 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div className="flex flex-col justify-end">
            <span className="label text-stone-700">Menu</span>
            <h1 className="mt-4 max-w-xl font-main text-5xl font-bold leading-none text-ink md:text-7xl">
              Coffee, plates, and something to stay for.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ash">
              Espresso classics, bright non-coffee drinks, rice bowls, pasta,
              and snacks made for slow afternoons.
            </p>
          </div>

          <div className="grid min-h-[320px] grid-cols-3 gap-3">
            {featuredImages.map((image, index) => (
              <div
                key={image.alt}
                className={`relative overflow-hidden bg-primary ${
                  index === 1 ? "mt-8" : index === 2 ? "mt-16" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-contain p-5"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[220px_1fr] md:px-10">
          <div>
            <span className="label text-stone-700">Coffee bar</span>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Sizes are listed as 12 oz / 16 oz where available. Add Oatside
              milk for ₱{coffeeAddon.price}.
            </p>
          </div>
          <ul className="grid gap-x-10 md:grid-cols-2">
            {coffeeMenu.map((item) => (
              <MenuRow key={item.id} item={item} price={coffeePrice(item)} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="label text-stone-700">Kitchen</span>
              <h2 className="mt-3 font-main text-4xl font-bold text-ink md:text-5xl">
                Comfort food, made compact.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ash">
              Choose a plate, share the snacks, stay for another round.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {foodGroups.map((group) => (
              <section key={group.title}>
                <h3 className="label mb-2 text-stone-700">{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <MenuRow key={item.id} item={item} price={foodPrice(item)} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-12 text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <span className="label text-ash-light">Add-ons</span>
            <div className="mt-4 flex flex-wrap gap-3">
              {addons.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-sm text-white/85"
                >
                  <Plus size={14} /> {item.name} ₱{item.price}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/80">
            <Coffee size={18} />
            <span>Prices are in Philippine peso.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
