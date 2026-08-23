import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { business } from "../../data/business";
import { InstagramIcon, FacebookIcon } from "../ui/SocialIcons";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none gap-0.5">
          <span className="font-custom italic font-bold text-2xl text-gold tracking-tight">
            kinfolk
          </span>
          <span className="label text-ash text-[8px]">Specialty Coffee</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`label text-[9px] transition-colors ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-white hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinfolk on Instagram"
          >
            <InstagramIcon
              size={16}
              className="text-ash hover:text-gold transition-colors"
            />
          </a>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinfolk on Facebook"
          >
            <FacebookIcon
              size={16}
              className="text-ash hover:text-gold transition-colors"
            />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-ink z-50 flex flex-col md:hidden">
          <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
            <span className="font-serif italic font-bold text-2xl text-gold">
              kinfolk
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-start px-8 gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-serif italic text-4xl ${
                  location.pathname === link.to ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 px-8 pb-10">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} className="text-ash" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} className="text-ash" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
