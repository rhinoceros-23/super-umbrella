import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export const coursesData = [
  { id: "ai", title: "Artificial Intelligence", desc: "Master machine learning, deep learning, and neural networks with hands-on projects.", duration: "6 Months", skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"], tools: ["Jupyter", "Google Colab", "AWS SageMaker"], overview: "Comprehensive AI program covering supervised/unsupervised learning, deep learning architectures, NLP, and computer vision. Build production-ready AI models.", certification: "AriaLabsTech Certified AI Professional" },
  { id: "data", title: "Data Analyst Program", desc: "Learn data wrangling, visualization, and business intelligence to drive insights.", duration: "4 Months", skills: ["SQL", "Python", "Tableau", "Power BI", "Statistics"], tools: ["Excel", "Tableau", "Power BI", "MySQL"], overview: "End-to-end data analytics training from data collection to dashboard creation. Work with real datasets from industry partners.", certification: "AriaLabsTech Certified Data Analyst" },
  { id: "cloud", title: "Cloud Computing", desc: "Design, deploy, and manage cloud infrastructure on leading platforms.", duration: "5 Months", skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"], tools: ["AWS Console", "Terraform", "Docker", "Jenkins"], overview: "Multi-cloud program covering compute, storage, networking, security, and DevOps. Prepare for cloud certification exams.", certification: "AriaLabsTech Cloud Architect Certificate" },
  { id: "c", title: "C Programming", desc: "Build a strong foundation in systems programming with C.", duration: "3 Months", skills: ["C Language", "Data Structures", "Memory Management", "Algorithms"], tools: ["GCC", "VS Code", "Linux Terminal"], overview: "From basics to advanced C programming including pointers, dynamic memory, file I/O, and data structures.", certification: "AriaLabsTech C Programming Certificate" },
  { id: "java", title: "Java Programming", desc: "Enterprise-grade Java development from fundamentals to frameworks.", duration: "4 Months", skills: ["Core Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices"], tools: ["IntelliJ IDEA", "Maven", "Git", "Postman"], overview: "Complete Java ecosystem training covering OOP, collections, Spring Boot, REST APIs, and microservices architecture.", certification: "AriaLabsTech Java Developer Certificate" },
  { id: "python", title: "Python Programming", desc: "Versatile Python programming for web, data science, and automation.", duration: "3 Months", skills: ["Python 3", "Django", "Flask", "Pandas", "Automation"], tools: ["PyCharm", "Jupyter", "Git", "Docker"], overview: "Practical Python training covering web development, scripting, data handling, and API development.", certification: "AriaLabsTech Python Developer Certificate" },
];

interface Props {
  preview?: boolean;
}

const CoursesSection = ({ preview = true }: Props) => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      {preview && (
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="text-gradient-brand">Courses</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Industry-aligned programs designed to get you job-ready with real-world skills.
          </p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="p-6 rounded-xl bg-card shadow-card border border-border hover:shadow-card-hover transition-all duration-300"
          >
            <h3 className="font-display text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{course.desc}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            {!preview && (
              <div className="mb-4">
                <p className="text-sm text-foreground mb-2">{course.overview}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {course.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">🎓 {course.certification}</p>
                <p className="text-xs text-muted-foreground mt-1">📋 Includes internship eligibility upon completion</p>
              </div>
            )}
            <Link
              to={preview ? "/courses" : "/contact"}
              className="inline-block px-5 py-2 rounded-md text-sm font-semibold gradient-brand text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {preview ? "View Details" : "Enroll Now"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
