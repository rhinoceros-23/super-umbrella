import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Courses", to: "/courses" },
  { label: "Internships", to: "/internships" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-[72px] px-4">  
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AriaLabsTech" className="h-12 w-12" />
          <span className="font-display font-bold text-2xl tracking-tight">
            <span className="text-foreground">AriaLabs</span>
            <span className="text-secondary">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-2 p-3 rounded-md gradient-brand text-primary-foreground transition-opacity hover:opacity-90"
            aria-label="Login / Portal"
            title="Login / Portal"
          >
            <LogIn className="h-5 w-5" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-md text-sm font-semibold gradient-brand text-primary-foreground text-center"
          >
            <LogIn className="h-4 w-4" />
            Login / Portal
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
