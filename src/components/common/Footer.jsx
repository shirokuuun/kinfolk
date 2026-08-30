import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { business } from "../../data/business";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand block */}
        <div>
          <span className="font-main font-bold text-2xl text-paper">
            Kinfolk
          </span>
          <p className="text-ash text-sm mt-3 max-w-[220px]">
            {business.slogan}
          </p>

          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-2 text-sm text-white/80 hover:text-paper transition-colors mt-5 mb-4"
          >
            <Mail size={15} /> {business.email}
          </a>

          <div className="flex gap-4">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon
                size={18}
                className="text-ash hover:text-paper transition-colors"
              />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon
                size={18}
                className="text-ash hover:text-paper transition-colors"
              />
            </a>
          </div>
        </div>

        {/* Site links */}
        <div>
          <span className="font-semibold text-sm text-paper block mb-4">
            Explore
          </span>
          <div className="space-y-2">
            {siteLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-white/80 hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <span className="font-semibold text-sm text-paper block mb-4">
            Hours
          </span>
          <div className="space-y-2">
            {business.hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between gap-6 text-sm text-white/80"
              >
                <span>{h.day}</span>
                <span className="text-ash">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-6 border-t border-white/10 text-center">
        <span className="text-ash text-xs">
          © 2026 Kinfolk Specialty Coffee
        </span>
      </div>
    </footer>
  );
}
