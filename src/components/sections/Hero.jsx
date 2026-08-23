import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-ink pt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-gold" />
            <span className="label text-gold text-[9px]">Third Wave Coffee Club</span>
          </div>

          <h1 className="font-serif font-bold text-white leading-[0.9] text-6xl md:text-7xl -tracking-wide mb-6">
            brewing<br />
            <em className="text-gold not-italic font-serif italic">connections</em>
          </h1>

          <p className="text-ash text-sm leading-relaxed max-w-xs mb-8">
            Third wave specialty coffee where every cup tells a story.
            Come for the coffee, stay for the community.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/menu"
              className="bg-gold text-ink px-7 py-3 label text-[10px] flex items-center gap-2 hover:bg-gold-soft transition-colors"
            >
              View menu <ArrowRight size={14} />
            </Link>
            <Link
              to="/location"
              className="border border-white/40 text-white px-7 py-3 label text-[10px] hover:border-gold hover:text-gold transition-colors"
            >
              Find us
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] border border-gold/20 flex items-center justify-center overflow-hidden bg-gold/[0.03]">
          <span className="font-serif italic font-bold text-white/[0.04] text-[220px] leading-none absolute select-none">
            k
          </span>
          <div className="text-center relative z-10">
            <div className="w-6 h-px bg-gold/30 mx-auto mb-3" />
            <span className="label text-ash/40 text-[8px]">shop photo</span>
            <div className="w-6 h-px bg-gold/30 mx-auto mt-3" />
          </div>
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/35" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/35" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/35" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/35" />
        </div>
      </div>
    </section>
  )
}
