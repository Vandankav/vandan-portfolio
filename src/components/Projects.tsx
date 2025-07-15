import { motion } from "framer-motion";
import { useState } from "react";
import docklink from "./doclink.png";
import shopify from "./shopify.png";
import interviewprepai from "./interviewprepai.png";

type Project = {
  id: number;
  title: string;
  description: string;
  points: string[];
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  admin?: string;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "mern" | "express" | "react"
  >("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Interview Preparation App",
      description:
        "An AI-powered platform for personalized, role-specific technical interview preparation.",
      points: [
        "Generates tailored technical interview Q&A based on user inputs like experience and domain.",
        "Seamlessly integrates Gemini API for real-time, context-aware questions, detailed answers, and concept breakdowns.",
        "Implements JWT-based authentication and session handling for secure access and data persistence.",
        "Enables pinning and session-saving features using MongoDB for quick access and continued learning.",
      ],
      image: interviewprepai,
      tags: [
        "MERN",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Gemini API",
        "Tailwind CSS",
      ],
      github: "https://github.com/Vandankav/InterviewPrepAI",
      demo: "https://interviewpreparationai.netlify.app/",
    },
    {
      id: 2,
      title: "Doctor Appointment Booking System",
      description:
        "A comprehensive platform for booking doctor appointments with multi-level authentication",
      points: [
        "Multi-level authentication for Patients, Doctors, and Admins, enabling role-specific access to functionalities like appointment booking, profile management, and analytics.",
        "Intuitive patient interface to book, manage, and track doctor appointments seamlessly.",
        "Doctor Dashboard for appointments, earnings, and profile management, streamlining workflow.",
        "Admin Panel for overseeing appointments, managing doctor profiles, and maintaining system integrity.",
      ],
      image: docklink,
      tags: [
        "MERN",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Vandankav/DocLink",
      demo: "https://doclink-frontend.onrender.com/",
      admin: "https://doclink-admin.onrender.com/",
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "A fully-functional e-commerce platform for clothing",
      points: [
        "Built a fully-functional and responsive e-commerce platform for clothing, delivering a seamless and engaging shopping experience for users.",
        "Integrated secure JWT-based authentication to ensure safe user login and safeguard sensitive data.",
        "Designed and developed a dedicated admin dashboard for streamlined inventory control and efficient product management.",
        "Engineered a dynamic cart system allowing users to add, modify and delete items, enhancing the overall checkout flow.",
      ],
      image: shopify,
      tags: ["MERN", "MongoDB", "Express", "React", "Node.js", "JWT", "Redux"],
      github: "https://github.com/Vandankav/E-Commerce",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) =>
          project.tags.some(
            (tag) => tag.toLowerCase() === activeTab.toLowerCase()
          )
        );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on using the MERN stack
            and other technologies. Each project demonstrates my skills in
            creating robust and user-friendly web applications.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            {["all", "mern", "express", "react"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() =>
                  setActiveTab(tab as "all" | "mern" | "express" | "react")
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {project.points.slice(0, 2).map((point) => (
                      <li key={`${project.id}-${point.substring(0, 20)}`}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}

                  {project.admin && (
                    <a
                      href={project.admin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Admin
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Vandankav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            See More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
