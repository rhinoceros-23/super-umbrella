import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { Monitor, Globe, Cloud, Brain, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    desc: "Strategic technology consulting to modernize and optimize your business operations.",
    details: [
      "Technology stack assessment and modernization roadmaps",
      "Digital transformation strategy and execution planning",
      "IT infrastructure audits and optimization recommendations",
      "Vendor evaluation and technology procurement guidance",
      "Business process automation consulting",
    ],
    outcome: "Reduce operational costs by up to 40% with optimized technology infrastructure tailored to your business goals.",
  },
  {
    icon: Globe,
    title: "Web & App Development",
    desc: "Full-stack web and mobile application development with modern frameworks.",
    details: [
      "Custom web applications using React, Angular, and Vue.js",
      "Cross-platform mobile app development (React Native, Flutter)",
      "Progressive Web Apps (PWA) for offline-capable experiences",
      "E-commerce platforms and marketplace solutions",
      "API design, development, and third-party integrations",
    ],
    outcome: "Launch production-grade applications 2x faster with our agile development process and battle-tested tech stacks.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud migration, deployment, and management across AWS, Azure, and GCP.",
    details: [
      "Cloud migration planning and execution (lift-and-shift, re-architecture)",
      "Multi-cloud and hybrid cloud architecture design",
      "CI/CD pipeline setup with automated testing and deployment",
      "Infrastructure as Code (Terraform, CloudFormation) implementation",
      "24/7 cloud monitoring, cost optimization, and security hardening",
    ],
    outcome: "Achieve 99.9% uptime and reduce cloud spending by 30% with our managed cloud operations.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Custom AI/ML model development, NLP, and intelligent automation solutions.",
    details: [
      "Custom machine learning model development and deployment",
      "Natural Language Processing (NLP) for chatbots and text analytics",
      "Computer vision solutions for quality inspection and recognition",
      "Predictive analytics and recommendation engine development",
      "AI-powered workflow automation and intelligent document processing",
    ],
    outcome: "Unlock data-driven decision making and automate repetitive tasks, saving 100+ hours per month.",
  },
  {
    icon: Users,
    title: "Corporate Training",
    desc: "Tailored training programs to upskill your workforce in emerging technologies.",
    details: [
      "Customized curriculum aligned with your technology stack",
      "Hands-on workshops with real-world project assignments",
      "Certification preparation (AWS, Azure, Google Cloud, Scrum)",
      "On-site and remote training options for distributed teams",
      "Post-training assessment and skill gap analysis reports",
    ],
    outcome: "Upskill your entire engineering team in 4–8 weeks with measurable competency improvements and industry certifications.",
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    desc: "Hands-on internship programs with real-world project experience and certification.",
    details: [
      "Role-specific internships mapped to industry-demand skills",
      "Dedicated mentor assigned for guidance throughout the program",
      "Live client project experience building production-grade solutions",
      "Verified certificate of completion recognized by 120+ hiring partners",
      "Flexible remote and hybrid options for maximum accessibility",
    ],
    outcome: "85% of our interns receive job offers within 3 months of completing their program.",
    cta: { label: "View Open Roles", to: "/internships" },
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient-brand">Services</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          End-to-end IT solutions and training programs designed to accelerate your digital transformation.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-10 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 md:p-8 rounded-xl bg-card shadow-card border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">{s.title}</h2>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {s.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/15 mb-4">
                <p className="text-sm font-medium text-foreground">{s.outcome}</p>
              </div>

              <Link
                to={s.cta?.to || "/contact"}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {s.cta?.label || "Get a Quote"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Services;
