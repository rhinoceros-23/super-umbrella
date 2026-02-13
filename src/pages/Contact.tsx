import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <Layout>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-brand">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                  placeholder="Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                  placeholder="rahulsharma@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-foreground">Saurab Arya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>#3-984/2, Ayyappa Society Main Rd, Sri Sai Nagar, Madhapur, Hyderabad, Telangana, India</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <span>info@arialabs.tech</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-3">FAQ</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">What are the class timings?</p>
                    <p>We offer flexible batch timings — weekday, weekend, and self-paced options.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Do you provide placement support?</p>
                    <p>Yes, we have a dedicated placement cell with 80+ hiring partners.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Do I get a certificate?</p>
                    <p>Yes, all our courses and internships include an industry-recognized certificate of completion.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Can I do the internship remotely?</p>
                    <p>Most of our internship roles offer flexible remote options. Check the Internships page for details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
