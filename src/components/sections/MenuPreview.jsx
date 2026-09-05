import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, ChevronLeft, ChevronRight } from "lucide-react";
import { coffeeMenu } from "../../data/coffee";

const featuredCoffee = coffeeMenu.filter((c) =>
  [
    "americano",
    "hojicha",
    "caramel-macchiato",
    "matcha-oat",
    "iced-choco-mocha",
    "pink-latte",
    "passionfruit",
  ].includes(c.id),
);

const SLIDE_FRACTION = 0.5;
const STEP_FRACTION = 0.24;
const ACTIVE_SCALE = 1.45;
const ACTIVE_SCALE_MOBILE = 1.8;

export default function MenuPreview() {
  const [index, setIndex] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);
  const dragRef = useRef({ startX: 0, dragging: false });

  const items = featuredCoffee;
  const active = items[index];

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    setIndex(clamped);
  };

  const handlePointerDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true };
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current.dragging) return;
    const delta = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    const threshold = 40;
    if (delta > threshold) goTo(index - 1);
    else if (delta < -threshold) goTo(index + 1);
  };

  const slideWidth = trackWidth * SLIDE_FRACTION;
  const step = trackWidth * STEP_FRACTION;
  const center = (trackWidth - slideWidth) / 2;
  const activeScale =
    trackWidth && trackWidth < 768 ? ACTIVE_SCALE_MOBILE : ACTIVE_SCALE;

  return (
    <section className="bg-primary py-14 md:py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="label text-stone-800!">Our menu</span>
          <h2 className="font-main font-bold text-4xl md:text-5xl text-stone-700 mt-3">
            Every cup, brewed with intent
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="relative z-0 w-full h-56 md:h-80 select-none touch-pan-y overflow-visible"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          {items.map((item, i) => {
            const offset = i - index;
            const abs = Math.abs(offset);
            const visible = abs <= 2;

            const left = center + offset * step;
            const scale = abs === 0 ? activeScale : abs === 1 ? 1.05 : 0.85;
            const opacity =
              abs === 0 ? 1 : abs === 1 ? 0.55 : abs === 2 ? 0.25 : 0;
            const zIndex = 10 - abs;

            return (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                style={{
                  left: `${left}px`,
                  width: `${slideWidth}px`,
                  transform: `scale(${scale})`,
                  zIndex,
                  opacity: visible ? opacity : 0,
                  pointerEvents: visible ? "auto" : "none",
                }}
                className="absolute top-0 h-full transition-all duration-500 ease-out cursor-pointer"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    draggable={false}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <Coffee
                      className="text-ash-light"
                      size={40}
                      strokeWidth={1.2}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Prev / Next controls */}
        <div className="relative z-30 flex items-center justify-center gap-5 mt-2 md:mt-0">
          <button
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous item"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/85 text-stone-800 shadow-sm ring-1 ring-stone-800/10 backdrop-blur transition-opacity hover:bg-paper/80 disabled:opacity-25"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-1.5">
            {items.map((item, i) => (
              <span
                key={item.id}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? "bg-ink" : "bg-ash-light"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Next item"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/85 text-stone-800 shadow-sm ring-1 ring-stone-800/10 backdrop-blur transition-opacity hover:bg-paper/80 disabled:opacity-25"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Focused item details */}
        <div key={active?.id} className="text-center mt-6 animate-fade-in-up">
          <h3 className="font-main font-semibold text-2xl text-stone-800 mb-1">
            {active?.name}
          </h3>
          <p className="text-ash text-xs leading-relaxed mb-2 max-w-[260px] mx-auto">
            {active?.description ||
              "Hot or iced, made to order with our house blend."}
          </p>
          <span className="label text-stone-800 text-[9px]">
            ₱{active?.size12}
            {active?.size16 ? ` — ₱${active.size16}` : ""}
          </span>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/menu"
            className="label text-[10px] text-ink border-b border-ink pb-1 hover:text-stone-800 transition-colors"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
