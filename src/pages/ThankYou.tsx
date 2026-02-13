import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";

const ThankYou = () => (
  <Layout>
    <section className="py-20 bg-muted min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="animate-scale-in">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary/10 mb-6">
              <CheckCircle className="h-10 w-10 text-secondary animate-fade-in" />
            </div>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Thank You!
          </h1>
          <p className="text-muted-foreground text-lg mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We've received your message successfully.
          </p>
          <p className="text-muted-foreground text-sm mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Our team will review your inquiry and get back to you within <strong className="text-foreground">24–48 business hours</strong>. You'll receive a confirmation email shortly.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Mail className="h-4 w-4 text-primary" />
            <span>For urgent queries, email us at <strong className="text-foreground">info@arialabs.tech</strong></span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
