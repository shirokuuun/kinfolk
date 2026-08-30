import { useState } from "react";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { coffeeMenu } from "../../data/coffee";

const featured = coffeeMenu.filter((c) =>
  ["americano", "latte", "caramel-macchiato", "dark-choco-mocha"].includes(
    c.id,
  ),
);

export default function CoffeePreview() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="label text-ink">Our coffee</span>
          <h2 className="font-main font-bold text-4xl md:text-5xl text-ink mt-3">
            Every cup, brewed with intent
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className="cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        isActive ? "scale-130" : "scale-100"
                      }`}
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-ink-soft transition-transform duration-500 ease-out ${
                        isActive ? "scale-130" : "scale-100"
                      }`}
                    >
                      <Coffee
                        className="text-ash-light"
                        size={40}
                        strokeWidth={1.2}
                      />
                    </div>
                  )}
                </div>

                {/* Details, below the image, fades in on hover */}
                <div
                  className={`pt-4 text-center transition-opacity duration-500 ease-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="font-serif font-semibold text-lg text-ink mb-1">
                    {item.name}
                  </h3>
                  <p className="text-ash text-xs leading-relaxed mb-2 max-w-[220px] mx-auto">
                    {item.description ||
                      "Hot or iced, made to order with our house blend."}
                  </p>
                  <span className="label text-ink text-[9px]">
                    ₱{item.size12}
                    {item.size16 ? ` — ₱${item.size16}` : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="label text-[10px] text-ink border-b border-ink pb-1 hover:text-ash transition-colors"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
