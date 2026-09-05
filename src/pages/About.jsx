import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { business } from "../data/business";
import DisplayImg from "../assets/display1.jpg";
import DisplayImg2 from "../assets/display2.jpg";
import HeroImg from "../assets/heroimg.jpg";

const values = [
  {
    label: "Coffee",
    title: "Brewed with intent",
    copy: "Every drink starts with a clear recipe, careful timing, and a bar that cares about the cup in front of you.",
  },
  {
    label: "Food",
    title: "Easy to linger over",
    copy: "Rice bowls, pasta, wraps, and snacks keep the table full without pulling focus from the conversation.",
  },
  {
    label: "Place",
    title: "Made for staying",
    copy: "Kinfolk is built around the small pauses: a quiet seat, another round, and people who remember what you like.",
  },
];

export default function About() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative flex min-h-[620px] items-end overflow-hidden pt-28">
        <img
          src={HeroImg}
          alt="Kinfolk Specialty Coffee interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-10 md:pb-20">
          <span className="label text-primary">About Kinfolk</span>
          <h1 className="mt-4 max-w-3xl font-main text-5xl font-bold leading-none text-paper md:text-7xl">
            Specialty coffee with a little more room to breathe.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/85">
            Kinfolk is a neighborhood coffee stop in Padre Garcia, Batangas for
            slow drinks, comforting plates, and everyday connection.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div>
            <span className="label text-stone-700">Third wave coffee club</span>
            <h2 className="mt-4 font-main text-4xl font-bold leading-tight text-ink md:text-5xl">
              We care where the coffee comes from, and how it lands with you.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ash">
            <p>
              Third wave coffee treats every cup as something traceable,
              intentional, and worth slowing down for. That means better beans,
              better recipes, and a bar team that keeps dialing in.
            </p>
            <p>
              At Kinfolk, the point is not to make coffee feel complicated. It
              is to make a good cup feel personal, whether you order a straight
              americano, a creamy hojicha, or something iced after dinner.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:px-10">
          {values.map((value) => (
            <article key={value.title} className="border-t border-ink/15 pt-6">
              <span className="label text-stone-700">{value.label}</span>
              <h3 className="mt-4 font-main text-3xl font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:px-10">
          <div className="relative min-h-[360px] overflow-hidden bg-primary">
            <img
              src={DisplayImg}
              alt="Kinfolk coffee shop seating"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-ink p-8 text-paper md:p-10">
            <img
              src={DisplayImg2}
              alt="Kinfolk coffee shop counter"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="relative flex h-full flex-col justify-end">
              <span className="label text-primary">{business.slogan}</span>
              <h2 className="mt-4 max-w-md font-main text-4xl font-bold leading-tight md:text-5xl">
                Come for the coffee, stay for the table.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 bg-paper px-6 py-3 label text-[10px] text-ink transition-colors hover:bg-primary"
                >
                  View menu <ArrowRight size={14} />
                </Link>
                <Link
                  to="/location"
                  className="border border-white/30 px-6 py-3 label text-[10px] text-paper transition-colors hover:border-paper"
                >
                  Find us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
