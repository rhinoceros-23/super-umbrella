import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  { name: "Priya Sharma", role: "AI Engineer at TCS", text: "AriaLabsTech's AI program gave me the practical skills I needed. The mentorship was incredible and I landed my dream job within 2 months of completing the course.", rating: 5, gender: "female" as const },
  { name: "Rahul Verma", role: "Data Analyst at Infosys", text: "The Data Analyst program was exactly what I needed to transition into analytics. The hands-on projects with real datasets made all the difference.", rating: 5, gender: "male" as const },
  { name: "Anita Desai", role: "Cloud Architect at Wipro", text: "Comprehensive cloud computing training with excellent lab access. The certification prep was thorough and I cleared my AWS exam on the first attempt.", rating: 4, gender: "female" as const },
  { name: "Vikram Patel", role: "HR Manager at Cognizant", text: "We partnered with AriaLabsTech for corporate training and the results were outstanding. Our team's productivity improved by 40% after the program.", rating: 5, gender: "male" as const },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-gradient-brand">Students Say</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Hear from our graduates and corporate partners about their experience.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-card shadow-card border border-border">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < t.rating ? "text-secondary fill-secondary" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src={t.gender === "male"
                    ? "https://api.dicebear.com/7.x/avataaars/svg?seed=male&accessories=blank&facialHair=blank&top=shortCurly&skinColor=light"
                    : "https://api.dicebear.com/7.x/avataaars/svg?seed=female&accessories=blank&facialHair=blank&top=longHairStraight&skinColor=light"
                  }
                  alt={t.name}
                />
                <AvatarFallback>{t.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
