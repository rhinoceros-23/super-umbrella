import { GraduationCap, Users, Building2, Briefcase } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "15,000+", label: "Students Trained" },
  { icon: Users, value: "200+", label: "Industry Mentors" },
  { icon: Building2, value: "120+", label: "Corporate Partners" },
  { icon: Briefcase, value: "80+", label: "Hiring Partners" },
];

const StatsSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Making an <span className="text-gradient-brand">Impact</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Since 2018, AriaLabsTech has been bridging the gap between academia and industry, empowering thousands of professionals with future-ready skills.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-xl bg-background shadow-card animate-count-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
