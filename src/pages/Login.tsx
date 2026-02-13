import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <Layout>
      <section className="py-20 bg-muted min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto p-8 rounded-xl bg-card shadow-card border border-border">
            <h1 className="font-display text-2xl font-bold text-center mb-6">Login to Portal</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
