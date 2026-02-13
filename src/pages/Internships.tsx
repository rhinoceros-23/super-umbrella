import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Clock, MapPin, Briefcase, Award, CheckCircle, Upload, X, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const internships = [
  {
    id: "ai-engineer",
    title: "AI Engineer Intern",
    course: "Artificial Intelligence",
    duration: "3–6 Months",
    mode: "Remote / Hybrid",
    description: "Work on real-world AI/ML projects including model development, training pipelines, and deployment under the guidance of senior AI engineers.",
    responsibilities: [
      "Develop and fine-tune machine learning models for client projects",
      "Assist in building data preprocessing and feature engineering pipelines",
      "Collaborate with the AI team on NLP and computer vision solutions",
      "Document model performance metrics and present findings to stakeholders",
      "Participate in code reviews and follow ML engineering best practices",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    certification: "Certificate of Completion — AI Engineering Internship",
  },
  {
    id: "data-analyst",
    title: "Data Analyst Intern",
    course: "Data Analyst Program",
    duration: "2–4 Months",
    mode: "Remote",
    description: "Analyze real business datasets, build dashboards, and deliver actionable insights that drive decision-making for our partner organizations.",
    responsibilities: [
      "Clean, transform, and analyze large datasets using SQL and Python",
      "Build interactive dashboards and reports in Tableau / Power BI",
      "Identify trends, patterns, and anomalies in business data",
      "Present data-driven recommendations to project leads",
      "Maintain documentation of analysis methodologies and findings",
    ],
    skills: ["SQL", "Python", "Tableau", "Power BI", "Excel"],
    certification: "Certificate of Completion — Data Analytics Internship",
  },
  {
    id: "cloud-engineer",
    title: "Cloud Engineer Intern",
    course: "Cloud Computing",
    duration: "3–5 Months",
    mode: "Remote / Hybrid",
    description: "Gain hands-on experience designing, deploying, and managing cloud infrastructure on AWS, Azure, and GCP for live client environments.",
    responsibilities: [
      "Assist in provisioning and managing cloud resources (EC2, S3, Lambda)",
      "Support CI/CD pipeline setup and maintenance using Jenkins and Docker",
      "Monitor cloud infrastructure performance and optimize costs",
      "Implement security best practices and IAM policies",
      "Document infrastructure architecture and deployment procedures",
    ],
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    certification: "Certificate of Completion — Cloud Engineering Internship",
  },
  {
    id: "systems-programmer",
    title: "Systems Programmer Intern",
    course: "C Programming",
    duration: "2–3 Months",
    mode: "Remote",
    description: "Work on embedded systems and low-level programming projects, building efficient system utilities and contributing to performance-critical codebases.",
    responsibilities: [
      "Write efficient C code for system-level applications and utilities",
      "Debug and optimize memory management in existing codebases",
      "Develop data structure implementations for internal tools",
      "Assist with testing and quality assurance for embedded software",
      "Collaborate with senior engineers on performance profiling tasks",
    ],
    skills: ["C Language", "Data Structures", "Memory Management", "Linux"],
    certification: "Certificate of Completion — Systems Programming Internship",
  },
  {
    id: "java-developer",
    title: "Java Developer Intern",
    course: "Java Programming",
    duration: "3–4 Months",
    mode: "Remote",
    description: "Build enterprise-grade backend services and REST APIs using Java and Spring Boot, contributing to production applications used by real clients.",
    responsibilities: [
      "Develop RESTful APIs and microservices using Spring Boot",
      "Write unit and integration tests for backend services",
      "Collaborate with frontend teams to integrate API endpoints",
      "Participate in Agile sprints and daily stand-ups",
      "Maintain code quality through reviews and documentation",
    ],
    skills: ["Core Java", "Spring Boot", "REST APIs", "Microservices", "Git"],
    certification: "Certificate of Completion — Java Development Internship",
  },
  {
    id: "python-developer",
    title: "Python Developer Intern",
    course: "Python Programming",
    duration: "2–3 Months",
    mode: "Remote",
    description: "Develop web applications, automation scripts, and backend services using Python and modern frameworks for real-world client projects.",
    responsibilities: [
      "Build and maintain web applications using Django or Flask",
      "Write automation scripts to streamline internal processes",
      "Develop and document REST APIs for client integrations",
      "Assist with data processing pipelines using Pandas and NumPy",
      "Follow best practices for version control and code documentation",
    ],
    skills: ["Python 3", "Django", "Flask", "REST APIs", "Git"],
    certification: "Certificate of Completion — Python Development Internship",
  },
];

const Internships = () => {
  const [applyRole, setApplyRole] = useState<typeof internships[0] | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!file) {
      toast({ title: "Please upload your resume", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setApplyRole(null);
    setFile(null);
    setSubmitted(false);
  };

  return (
    <Layout>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Internship <span className="text-gradient-brand">Programs</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Gain real-world experience working on live projects with industry mentors. All internships include a <strong className="text-foreground">verified certificate of completion</strong> recognized by our 120+ hiring partners.
          </p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h2 className="font-display text-xl font-semibold mb-2">Why Intern at AriaLabsTech?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Our internship programs are designed as immersive, mentorship-driven experiences — not busywork. You'll work on live client projects alongside seasoned professionals, building a portfolio that sets you apart in the job market. Most roles are <strong className="text-foreground">flexible and remote-friendly</strong>, so you can contribute from anywhere while gaining industry-grade experience.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-foreground"><CheckCircle className="h-4 w-4 text-secondary" /> Live project experience</span>
              <span className="flex items-center gap-1.5 text-foreground"><CheckCircle className="h-4 w-4 text-secondary" /> Dedicated mentor assigned</span>
              <span className="flex items-center gap-1.5 text-foreground"><CheckCircle className="h-4 w-4 text-secondary" /> Certificate upon completion</span>
              <span className="flex items-center gap-1.5 text-foreground"><CheckCircle className="h-4 w-4 text-secondary" /> Letter of recommendation</span>
              <span className="flex items-center gap-1.5 text-foreground"><CheckCircle className="h-4 w-4 text-secondary" /> Flexible remote options</span>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {internships.map((role) => (
              <div key={role.id} className="p-6 md:p-8 rounded-xl bg-background shadow-card border border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">{role.title}</h3>
                    <p className="text-sm text-primary font-medium">Mapped from: {role.course}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {role.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {role.mode}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4 text-primary" /> Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {role.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary mt-0.5">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {role.skills.map((s) => (
                    <span key={s} className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">{s}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Award className="h-4 w-4 text-secondary" /> {role.certification}
                  </span>
                  <button
                    onClick={() => setApplyRole(role)}
                    className="px-5 py-2 rounded-md text-sm font-semibold gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Dialog */}
      <Dialog open={!!applyRole} onOpenChange={(open) => { if (!open) handleClose(); }}>
        <DialogContent className="sm:max-w-md">
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-lg">
                  Apply — {applyRole?.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-5 pt-2">
                {/* Upload area */}
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/40 transition-colors"
                >
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  {file ? (
                    <div className="flex items-center justify-center gap-2 text-foreground">
                      <FileText className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                        className="ml-1 p-1 rounded-full hover:bg-muted"
                      >
                        <X className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                      <p className="text-sm font-medium text-foreground mb-1">Upload Resume</p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (max 5 MB)</p>
                    </>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed bg-muted p-3 rounded-lg">
                  Your resume will be parsed automatically to extract relevant information. Our system matches your skills, experience, and qualifications against the role requirements to ensure the best fit. No additional form filling required.
                </p>

                <Button onClick={handleSubmit} className="w-full gradient-brand text-primary-foreground font-semibold">
                  Submit Application
                </Button>
              </div>
            </>
          ) : (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="h-16 w-16 mx-auto rounded-full bg-secondary/15 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold">Thank You for Applying!</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                We've received your resume for the <strong className="text-foreground">{applyRole?.title}</strong> position. Our team will review your application and get back to you shortly.
              </p>
              <Button variant="outline" onClick={handleClose} className="mt-2">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Internships;
