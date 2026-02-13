import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 gradient-brand">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Ready to Start Your Journey?
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
        Join thousands of professionals who have transformed their careers with AriaLabsTech.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/courses"
          className="px-8 py-3 rounded-lg font-semibold bg-card text-foreground hover:bg-card/90 transition-colors"
        >
          Enroll Now
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 rounded-lg font-semibold border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
