import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "HackFashion-AI: Hackathon Winner @ HackUTA7",
    description: "HackFashion-AI is an intelligent wardrobe management and styling platform that combines computer vision, natural language processing, and voice synthesis to revolutionize how you interact with your closet. Upload your clothes, chat with your AI stylist, and get personalized outfit recommendations—all powered by cutting-edge AI technology.",
    tech: ["Postman", "React", "Node.js", "Express", "Typescript"],
    github: "https://github.com/ashmitKmishra/HackFashion-AI",
    demo: "#",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Destinify: AI Trip Planner",
    description: "Destinify simplifies travel planning by creating customized itineraries for trips of any length—whether a weekend getaway or an extended vacation. Users can input their travel preferences and destinations, and Destinify generates a detailed plan with AI-driven suggestions. ",
    tech: ["TypeScript", "Vite", "Supabase", "TailwindCSS & ShadcnUI"],
    github: "https://github.com/ashmitKmishra/Destinify_US_Trip_Planner",
    demo: "#",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Real-Time ASL Recognition Engine",
    description: "An end-to-end solution for American Sign Language recognition using deep learning and web technologies with Real-time webcam gesture recognition.",
    tech: ["TensorFlow 2.10", "Flask REST API", "Python", "OpenCV DNN", "Transfer Learning"],
    github: "https://github.com/ashmitKmishra/Detection-Model",
    demo: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  // {
  //   title: "Full-Stack Spotify Clone",
  //   description: "Modern e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
  //   tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  //   github: "#",
  //   demo: "#",
  //   gradient: "from-orange-500 to-red-500"
  // },
  // {
  //   title: "DevOps CI/CD Pipeline",
  //   description: "Automated deployment pipeline with containerization, orchestration, and monitoring for microservices architecture.",
  //   tech: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
  //   github: "#",
  //   demo: "#",
  //   gradient: "from-yellow-500 to-orange-500"
  // },
  // {
  //   title: "Real-Time Chat Application",
  //   description: "Scalable real-time messaging platform with WebSocket support, authentication, and media sharing capabilities.",
  //   tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
  //   github: "#",
  //   demo: "#",
  //   gradient: "from-blue-500 to-indigo-500"
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in software engineering, AI, and full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-card border-border h-full flex flex-col card-glow-hover transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
