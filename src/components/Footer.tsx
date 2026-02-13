import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="AriaLabsTech" className="h-9 w-9" />
            <span className="font-display font-bold text-lg">AriaLabsTech</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            Empowering careers through cutting-edge AI training, data analytics, and IT services since 2018.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-background transition-colors">Services</Link></li>
            <li><Link to="/courses" className="hover:text-background transition-colors">Courses</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-display font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/courses" className="hover:text-background transition-colors">AI Program</Link></li>
            <li><Link to="/courses" className="hover:text-background transition-colors">Data Analyst Program</Link></li>
            <li><Link to="/courses" className="hover:text-background transition-colors">Cloud Computing</Link></li>
            <li><Link to="/courses" className="hover:text-background transition-colors">Programming Courses</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="text-background/90 font-medium">Saurab Arya</li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>#3-984/2, Ayyappa Society Main Rd, Sri Sai Nagar, Madhapur, Hyderbad, Telangana, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>info@arialabs.tech</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
        <p>&copy; {new Date().getFullYear()} AriaLabsTech. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-background transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
