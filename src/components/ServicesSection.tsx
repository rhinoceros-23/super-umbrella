import { Monitor, Globe, Cloud, Brain, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Monitor, title: "IT Consulting", desc: "Strategic technology consulting to modernize and optimize your business operations." },
  { icon: Globe, title: "Web & App Development", desc: "Full-stack web and mobile application development with modern frameworks." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Cloud migration, deployment, and management across AWS, Azure, and GCP." },
  { icon: Brain, title: "AI Solutions", desc: "Custom AI/ML model development, NLP, and intelligent automation solutions." },
  { icon: Users, title: "Corporate Training", desc: "Tailored training programs to upskill your workforce in emerging technologies." },
  { icon: Briefcase, title: "Internship Programs", desc: "Hands-on internship programs with real-world project experience." },
];

const ServicesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-gradient-brand">Services</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          End-to-end IT solutions and training programs designed to accelerate your digital transformation.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
          >
            <div className="h-12 w-12 rounded-lg gradient-brand flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <Link to="/services" className="text-sm font-medium text-primary hover:underline">
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
