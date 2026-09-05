import { Link } from "react-router-dom";
import ThirdWaveImg from "../../assets/thirdwaveimg.jpg";

export default function ThirdWaveStory() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      <img
        src={ThirdWaveImg}
        alt="Third Wave Coffee"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-start px-6 py-14 md:px-12 md:py-20">
        <div className="max-w-[520px] text-paper">
          <span className="label text-primary">03 - Third wave coffee</span>
          <h2 className="mt-4 font-main text-6xl font-bold uppercase leading-none md:text-8xl">
            Know your coffee
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/85 md:text-base">
            Third wave coffee is about knowing where your coffee comes from and
            why it tastes the way it does, cup after cup.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-block bg-ink px-7 py-3 label text-[10px] text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}
