import { Link } from 'react-router-dom'
import { coffeeMenu } from '../../data/coffee'

const featured = coffeeMenu.filter((c) =>
  ['latte', 'spanish-latte', 'caramel-macchiato', 'seasalt-latte'].includes(c.id)
)

export default function CoffeePreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="label text-gold text-[10px]">Our coffee</span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink mt-3">
            Every cup, brewed with intent
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((item) => (
            <div
              key={item.id}
              className="border border-ink/10 bg-white/40 p-6 flex flex-col items-center text-center hover:border-gold/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-ink/5 flex items-center justify-center mb-5">
                <span className="font-serif italic text-gold text-2xl">k</span>
              </div>
              <h3 className="font-serif font-semibold text-lg text-ink mb-1">
                {item.name}
              </h3>
              <span className="label text-ash text-[9px] mb-3">Hot / Iced</span>
              <span className="text-gold font-semibold text-sm">
                ₱{item.size12}{item.size16 ? ` — ₱${item.size16}` : ''}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="label text-[10px] text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            View full menu
          </Link>
        </div>
      </div>
    </section>
  )
}
