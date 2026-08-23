import { Link } from 'react-router-dom'
import { riceBowls, sandwiches } from '../../data/food'

const featured = [...riceBowls.slice(0, 2), ...sandwiches.slice(0, 2)]

export default function SnacksPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="label text-gold text-[10px]">Snacks and mains</span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink mt-3">
            Something to go with your cup
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((item) => (
            <div key={item.id} className="group">
              <div className="aspect-square bg-ink/[0.04] border border-ink/10 mb-4 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                <span className="label text-ash/40 text-[8px]">photo</span>
              </div>
              <h3 className="font-serif font-semibold text-base text-ink mb-1">
                {item.name}
              </h3>
              <span className="text-gold text-sm font-semibold">₱{item.price}</span>
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
