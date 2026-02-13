import Layout from "@/components/Layout";
import CoursesSection from "@/components/CoursesSection";
import CTASection from "@/components/CTASection";

const Courses = () => (
  <Layout>
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient-brand">Courses</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our industry-aligned programs with hands-on training, expert mentorship, and placement support.
        </p>
      </div>
    </section>
    <CoursesSection preview={false} />
    <CTASection />
  </Layout>
);

export default Courses;
