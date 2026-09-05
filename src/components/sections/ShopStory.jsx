import { Link } from "react-router-dom";
import DisplayImg from "../../assets/display1.jpg";
import DisplayImg2 from "../../assets/display2.jpg";

export default function ShopStory() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] bg-ink/[0.04] border border-ink/10 overflow-hidden">
          <img
            src={DisplayImg}
            alt="Coffee Shop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent flex flex-col justify-end p-6">
            <p className="font-main font-semibold text-xl text-white mb-1">
              Check out our coffee shop
            </p>
            <Link
              to="/location"
              className="label text-[9px] text-white border-b border-primary pb-0.5 w-fit"
            >
              Find us
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={DisplayImg2}
            alt="Coffee Shop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative h-full flex flex-col justify-center p-8 md:p-10">
            <span className="label text-primary text-[9px] mb-3">
              Try new flavors first
            </span>
            <p className="font-main text-2xl leading-snug mb-6 text-white">
              New drops start with our regulars, before anyone else hears about
              them.
            </p>
            <Link
              to="/contact"
              className="label text-[9px] text-white border-b border-white/40 pb-0.5 w-fit hover:border-primary hover:text-primary transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
