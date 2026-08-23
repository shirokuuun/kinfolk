import { Link } from 'react-router-dom'

export default function ShopStory() {
  return (
    <section className="bg-paper-dim py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] bg-ink/[0.04] border border-ink/10 flex items-end p-6">
          <span className="label text-ash/50 text-[8px] absolute top-6 left-6">shop interior photo</span>
          <div>
            <p className="font-serif font-semibold text-xl text-ink mb-1">
              Check out our coffee shop
            </p>
            <Link to="/location" className="label text-[9px] text-ink border-b border-gold pb-0.5">
              Find us
            </Link>
          </div>
        </div>

        <div className="bg-ink text-white p-8 md:p-10 flex flex-col justify-center">
          <span className="label text-gold text-[9px] mb-3">Try new flavors first</span>
          <p className="font-serif text-2xl leading-snug mb-6">
            New drops start with our regulars, before anyone else hears about them.
          </p>
          <Link
            to="/contact"
            className="label text-[9px] text-white border-b border-white/40 pb-0.5 w-fit hover:border-gold hover:text-gold transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
