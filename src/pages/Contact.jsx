import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { business } from "../data/business";
import { InstagramIcon, FacebookIcon } from "../components/ui/SocialIcons";
import DisplayImg2 from "../assets/display2.jpg";

const contactLinks = [
  {
    label: "Email",
    value: business.email,
    href: `mailto:${business.email}`,
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@kinfolkspecialtycoffee",
    href: business.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    value: "Kinfolk Specialty Coffee",
    href: business.social.facebook,
    icon: FacebookIcon,
  },
];

export default function Contact() {
  return (
    <main className="bg-paper text-ink">
      <section className="grid min-h-[720px] pt-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex items-end px-6 py-14 md:px-10 lg:py-20">
          <div className="max-w-xl">
            <span className="label text-stone-700">Contact</span>
            <h1 className="mt-4 font-main text-5xl font-bold leading-none text-ink md:text-7xl">
              Say hello before your next cup.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ash">
              Reach Kinfolk directly for questions, visit details, and the
              latest shop updates.
            </p>

            <div className="mt-10 grid gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-t border-ink/10 py-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center bg-primary text-ink">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="label block text-[9px] text-stone-700">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm text-ash">
                        {item.value}
                      </span>
                    </span>
                    <ArrowRight
                      size={17}
                      className="text-ash transition-transform group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-ink">
          <img
            src={DisplayImg2}
            alt="Kinfolk Specialty Coffee table"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
          <div className="relative flex h-full items-end p-6 md:p-10">
            <div className="max-w-md text-paper">
              <span className="label text-primary">Visit us</span>
              <h2 className="mt-3 font-main text-4xl font-semibold leading-tight md:text-5xl">
                One branch, open late.
              </h2>
              <Link
                to="/location"
                className="mt-6 inline-flex items-center gap-2 border border-white/35 px-6 py-3 label text-[10px] text-paper transition-colors hover:border-paper"
              >
                See location <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3 md:px-10">
          <article className="border-t border-ink/15 pt-6">
            <MessageCircle size={20} className="text-stone-700" />
            <h3 className="mt-4 font-main text-3xl font-semibold text-ink">
              Shop updates
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              Follow us for menu drops, drink features, and service updates.
            </p>
          </article>
          <article className="border-t border-ink/15 pt-6">
            <MapPin size={20} className="text-stone-700" />
            <h3 className="mt-4 font-main text-3xl font-semibold text-ink">
              Address
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ash">
              {business.location.address}
            </p>
          </article>
          <article className="border-t border-ink/15 pt-6">
            <Clock size={20} className="text-stone-700" />
            <h3 className="mt-4 font-main text-3xl font-semibold text-ink">
              Hours
            </h3>
            <div className="mt-3 space-y-2 text-sm text-ash">
              {business.hours.map((item) => (
                <p key={item.day}>
                  <span className="text-ink">{item.day}</span> {item.time}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
