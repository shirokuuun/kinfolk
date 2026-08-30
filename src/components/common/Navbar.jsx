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
    <header className="fixed top-0 inset-x-0 z-50 bg-ink border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-main font-bold text-2xl text-paper tracking-tight">
            Kinfolk
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`label text-[9px] transition-colors ${
                location.pathname === link.to
                  ? "text-paper"
                  : "text-ash hover:text-paper"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kinfolk on Instagram"
          >
            <InstagramIcon
              size={16}
              className="text-ash hover:text-paper transition-colors"
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
              className="text-ash hover:text-paper transition-colors"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-paper"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-ink z-50 flex flex-col md:hidden">
          <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
            <span className="font-main font-bold text-2xl text-paper">
              Kinfolk
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-paper"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center items-start px-8 gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-main text-4xl ${
                  location.pathname === link.to
                    ? "text-paper"
                    : "text-ash-light"
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
