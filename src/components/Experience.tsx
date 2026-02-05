import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

const experiences = [
   {
    title: "2025 - Present",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          iOS Developer | Sept 2025 - Present
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold mb-4"
        >
          @ Department of CSE | Mississippi State
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base mb-4"
        >
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Building a hybrid 3D scene reconstruction system in Swift using ARKit’s Scene Reconstruction API and Metal-backed ModelIO pipelines, enabling real-time OBJ/MTL mesh exports with full LiDAR-RGB metadata to improve reconstruction accuracy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Optimizing frame-capture and metadata policy by implementing adaptive thresholds for motion, rotation, and time intervals, resulting in cleaner datasets and higher-quality depth-RGB alignment for downstream 3D processing.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    ),
  },
  {
    // title: "2025 - Present",
    content: (
      
      <div>
        
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          Software Developer Intern | May 2025 - Aug 2025
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold mb-4"
        >
          @ Bentley Systems | Huntsville, AL
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base mb-4"
        >
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Developed a production-grade chat-driven UI extension in TypeScript that translated natural language
                prompts into ECSQL queries using LangChain and Bentley’s LLM Proxy, enabling engineers to easily
                extract schemas and classes from 3D infrastructure iModels.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Built secure, token-authenticated API workflows using Axios and Redux, enabling seamless
                communication between the CoPilot widget and the ECSQL backend.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Improved CI/CD pipeline performance by 500%, reducing job runtime by 20+ minutes by optimizing JUnit
                test publishing, streamlining testResultsFiles patterns, and eliminating redundant stages.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    ),
  },
  {
    title: "2024 - 2025",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          Machine Learning Intern | Nov 2024 - May 2025
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold mb-4"
        >
          @ Department of Physics & Astronomy | Mississippi State University
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base mb-4"
        >
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Built a deep learning model to classify microscopic images of various types of cancer,
                including ovarian cancer,
                pancreatic cancer, Alzheimer's, breast cancer, and prostate cancer.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Utilized Python, TensorFlow, and Keras, along with MATLAB for image processing & implemented ResNet-50 as the base architecture in Python</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>First author of the research paper “Automated Grading and Staging of Ovarian Cancer Using Deep Learning”,
                showcasing my work, available on arXiv (arXiv:2505.09993).</span>
            </li>
          </ul>
        </motion.div>
      </div>
    ),
  },
  {
    title: "2023-2024",
    content: (
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-2"
        >
          Undergrad Research Assistant | Nov 2023 - Sept 2024
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold mb-4"
        >
          @ Department of ECE | Mississippi State University
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base mb-4"
        >
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Developed and tested a secure & end-to-end data transmission system by configuring 9 USRPs
                synchronized with Octoclock
                and integrating srsRAN and Open5GS, making the data transmission resilient to DoS attacks &
                increasing the message
                confidentiality by 100%.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Worked on developing a convolutional neural network (CNN) model for multi-image classification,
                implemented data
                preprocessing & model building, and achieved accuracy up to 95% in recognizing given images.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">▹</span>
              <span>Leverage Python/C++ and open-source software libraries to develop software tested with networked
                software-defined
                radio hardware. Work on OSS such as srsRAN using ZeroMQ & gNodeB for 5G network simulations.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    ),
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Timeline data={experiences} />
    </section>
  );
}
