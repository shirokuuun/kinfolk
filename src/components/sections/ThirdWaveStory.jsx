import { Link } from 'react-router-dom'

export default function ThirdWaveStory() {
  return (
    <section className="bg-paper-dim py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] bg-ink/[0.04] border border-ink/10 flex items-center justify-center">
          <span className="label text-ash/40 text-[8px]">barista photo</span>
        </div>

        <div>
          <span className="label text-gold text-[9px]">Third wave coffee club</span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-3 mb-5 leading-tight">
            Where your coffee comes from matters
          </h2>
          <p className="text-ash text-sm leading-relaxed mb-4 max-w-md">
            Third wave coffee is about knowing where your coffee comes from
            and why it tastes the way it does, cup after cup.
          </p>
          <p className="text-ash text-sm leading-relaxed mb-8 max-w-md">
            Specialty coffee means top-tier beans, no basic stuff. At Kinfolk,
            you get epic flavor and a brewed connection with every sip.
          </p>
          <Link
            to="/about"
            className="bg-gold text-ink px-7 py-3 label text-[10px] hover:bg-gold-soft transition-colors inline-block"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  )
}
