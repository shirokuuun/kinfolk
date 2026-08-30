import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/img1.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Kinfolk Specialty Coffee shop interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-ash-light" />
          <span className="label text-ash-light">Third Wave Coffee Club</span>
          <div className="w-6 h-px bg-ash-light" />
        </div>

        <h1 className="font-main font-bold text-paper leading-none text-6xl md:text-8xl mb-2 tracking-tight">
          Kinfolk
        </h1>

        <span className="label text-primary text-[10px] md:text-xs mb-8">
          Specialty Coffee
        </span>

        <p className="text-paper/85 font-medium text-sm leading-relaxed max-w-sm mb-9">
          Third wave specialty coffee where every cup tells a story. Come for
          the coffee, stay for the community.
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            to="/menu"
            className="bg-paper text-ink px-7 py-3 label text-[10px] flex items-center gap-2 hover:bg-primary transition-colors"
          >
            View menu <ArrowRight size={14} />
          </Link>
          <Link
            to="/location"
            className="border border-paper/40 text-paper px-7 py-3 label text-[10px] hover:border-paper hover:bg-white/10 transition-colors"
          >
            Find us
          </Link>
        </div>
      </div>
    </section>
  );
}
