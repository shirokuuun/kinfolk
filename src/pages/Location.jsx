import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { business } from "../data/business";
import DisplayImg from "../assets/display1.jpg";

export default function Location() {
  const directionsUrl = business.location.mapUrl;

  return (
    <main className="bg-paper text-ink">
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-[1600px] px-6 pb-16 md:px-10">
          <span className="label text-stone-700">Coffeehouse</span>
          <h1 className="mt-4 font-main text-5xl font-bold leading-none text-ink md:text-7xl">
            Find Kinfolk
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ash">
            {business.location.description}
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(520px,1.05fr)_minmax(360px,0.95fr)]">
            <article className="min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                <img
                  src={DisplayImg}
                  alt="Kinfolk Specialty Coffee storefront"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="mt-8 border-b border-ink/15 pb-8">
                <h2 className="font-main text-4xl font-semibold text-ink md:text-5xl">
                  {business.location.branch}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ash">
                  A single Kinfolk branch for specialty drinks, warm plates, and
                  late coffee runs.
                </p>
              </div>

              <div className="grid gap-6 border-b border-ink/15 py-6 md:grid-cols-[1fr_auto]">
                <div className="flex gap-3">
                  <MapPin className="mt-1 shrink-0 text-stone-700" size={18} />
                  <p className="text-sm leading-relaxed text-ash">
                    {business.location.address}
                  </p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 label text-[10px] text-paper transition-colors hover:bg-stone-700"
                >
                  Directions <Navigation size={14} />
                </a>
              </div>

              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                {business.hours.map((item) => (
                  <div key={item.day} className="border-t border-ink/10 pt-4">
                    <p className="text-sm font-semibold text-ink">{item.day}</p>
                    <p className="mt-1 text-sm text-ash">{item.time}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="relative min-h-[520px] overflow-hidden bg-primary">
              <iframe
                title="Kinfolk Specialty Coffee on Google Maps"
                src={business.location.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-paper px-5 py-3 label text-[10px] text-ink shadow-sm transition-colors hover:bg-primary"
              >
                Open map <ExternalLink size={14} />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
