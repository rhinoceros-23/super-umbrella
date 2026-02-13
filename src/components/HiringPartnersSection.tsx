const partners = [
  "Infosys", "Wipro", "TCS", "HCL Technologies", "Cognizant",
  "Accenture", "Capgemini", "Tech Mahindra", "Deloitte", "IBM",
  "Microsoft", "Amazon", "Google", "Zoho", "Freshworks",
];

const HiringPartnersSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Our Hiring <span className="text-gradient-brand">Partners</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Our graduates are placed at leading technology companies across India and globally. We maintain strong relationships with 80+ hiring partners.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {partners.map((name) => (
          <div
            key={name}
            className="px-6 py-3 rounded-lg bg-card border border-border shadow-sm text-sm font-medium text-foreground hover:shadow-card hover:border-primary/30 transition-all duration-300"
          >
            {name}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        ...and 65+ more companies actively hiring AriaLabsTech graduates
      </p>
    </div>
  </section>
);

export default HiringPartnersSection;
