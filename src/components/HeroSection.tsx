import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="relative container mx-auto px-4 py-28 md:py-40">
      <div className="max-w-2xl animate-fade-in-up">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
          Transform Your Career with <span className="text-secondary">AI & Industry Training</span>
        </h1>
        <p className="text-background/80 text-lg md:text-xl mb-8 leading-relaxed">
          Industry-ready programs in Artificial Intelligence, Data Analytics, Cloud Computing and more — taught by experts, backed by real-world projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/courses"
            className="px-7 py-3 rounded-lg font-semibold gradient-brand text-background transition-opacity hover:opacity-90"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-lg font-semibold border-2 border-background/40 text-background hover:bg-background/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
