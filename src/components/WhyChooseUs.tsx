import { CheckCircle } from "lucide-react";

const features = [
  "Real-time industry projects",
  "Mentorship from 200+ industry experts",
  "Guaranteed internship opportunities with certificate",
  "Dedicated placement assistance",
  "Industry-recognized certification upon completion",
  "Flexible remote internship options",
];

const WhyChooseUs = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-gradient-brand">AriaLabsTech?</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We go beyond traditional education by combining expert mentorship, live projects, and industry connections to ensure your success.
          </p>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-foreground font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { num: "95%", label: "Placement Rate" },
            { num: "4.8/5", label: "Student Rating" },
            { num: "50+", label: "Live Projects" },
            { num: "24/7", label: "Support" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-xl bg-background shadow-card text-center">
              <div className="font-display text-2xl font-bold text-primary mb-1">{item.num}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
