import Layout from "@/components/Layout";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

const About = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient-brand">AriaLabsTech</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Bridging the gap between academia and industry since 2018.
        </p>
      </div>
    </section>

    {/* Founder Section */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Meet the <span className="text-gradient-brand">Founder</span>
          </h2>
          <p className="text-muted-foreground">The visionary behind AriaLabsTech</p>
        </div>

        <div className="p-8 rounded-xl bg-background shadow-card border border-border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full gradient-brand text-primary-foreground font-display text-3xl font-bold mb-4">
              SA
            </div>
            <h3 className="font-display text-2xl font-bold">Saurab Arya</h3>
            <p className="text-primary font-medium">Founder & CEO, AriaLabsTech</p>
          </div>

          <div className="space-y-8">
            {/* Why */}
            <div className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-lg gradient-brand flex items-center justify-center mt-1">
                <Lightbulb className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">Why I Created AriaLabsTech</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I founded AriaLabsTech after witnessing a critical disconnect between what universities teach and what the industry demands. Having seen countless talented graduates struggle to find their footing in the rapidly evolving tech landscape, I set out to build a platform that bridges this gap — delivering real-world, project-based training in AI, data analytics, and cloud computing that employers actually value. My vision was clear: no student should graduate feeling unprepared for the industry they trained years to enter.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-lg gradient-brand flex items-center justify-center mt-1">
                <Target className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">My Goals & Vision</h4>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong className="text-foreground">Democratize tech education</strong> — I want to make world-class AI and data analytics training accessible to students regardless of their background or geography.</li>
                  <li>• <strong className="text-foreground">Build industry-ready professionals</strong> — I ensure every graduate leaves with a portfolio of real projects, not just theoretical knowledge.</li>
                  <li>• <strong className="text-foreground">Scale impact to 100,000+ students by 2028</strong> — I'm expanding AriaLabsTech's reach across India and internationally through partnerships and scalable learning models.</li>
                  <li>• <strong className="text-foreground">Achieve a 98% placement rate</strong> — I'm strengthening our hiring partner network and tailoring curricula to match evolving market demands.</li>
                </ul>
              </div>
            </div>

            {/* Internship Purpose */}
            <div className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-lg gradient-brand flex items-center justify-center mt-1">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">Why I Believe Internships Matter</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe internships are the most critical stepping stone between learning and earning. Our internship programs are designed not as busywork, but as immersive, mentorship-driven experiences where students work on live client projects alongside seasoned industry professionals. The goal is to produce professionals who can contribute from day one — reducing the "ramp-up time" that companies typically face with fresh hires and giving students the confidence, portfolio, and certified credentials they need to launch successful careers.
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-lg gradient-brand flex items-center justify-center mt-1">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg mb-2">My Leadership Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Under my leadership, AriaLabsTech operates with a "students-first" ethos. I personally oversee curriculum design, mentor top-performing interns, and maintain direct relationships with hiring partners. My hands-on approach has built a culture of accountability, innovation, and relentless focus on outcomes — resulting in 15,000+ successful alumni, 200+ active mentors, and a growing network of 120+ corporate partners who trust AriaLabsTech to deliver job-ready talent. Every student who completes our programs receives an industry-recognized certificate, and our top performers receive personalized letters of recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <StatsSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

export default About;
