import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AWS from '../assets/images/Certificate/AWS.jpg';
import CPP from '../assets/images/Certificate/C++.png';
import CODESOFT from '../assets/images/Certificate/CODESOFT.jpg';
import HTMLCSSJAVA from '../assets/images/Certificate/html_css_java.png';
import JAVA from '../assets/images/Certificate/JAVA.png';
import JAVA_UDEMY from '../assets/images/Certificate/java_udemy.png';
import TRISKADIKA from '../assets/images/Certificate/TRISKADIKA_COLLEGE.png';
import UDEMY from '../assets/images/Certificate/UDEMY.png';
import INOVASTRA from '../assets/images/Certificate/inovastra.jpg';
import INTERNSHIP from '../assets/images/Certificate/Internship_Training.jpg';
import WEBDEV from '../assets/images/Certificate/Web_Development.jpg';

const certificates = [
  { title: "AWS", image: AWS },
  { title: "C++", image: CPP },
  { title: "Web Development", image: CODESOFT },
  { title: "Front-end", image: HTMLCSSJAVA },
  { title: "Java", image: JAVA },
  { title: "Java (Udemy)", image: JAVA_UDEMY },
  { title: "TRISKADIKA", image: TRISKADIKA },
  { title: "C++ (Udemy)", image: UDEMY },
  { title: "Inovastra", image: INOVASTRA },
  { title: "Internship Training", image: INTERNSHIP },
  { title: "Web Dev", image: WEBDEV },
];

const projects = [
  {
    title: "Project 1",
    image: "/path/to/project1.jpg",
    demo: "#",
    source: "#",
    tech: ["React", "Tailwind", "GSAP"]
  },
  {
    title: "Project 2",
    image: "/path/to/project2.jpg",
    demo: "#",
    source: "#",
    tech: ["Node.js", "MongoDB", "Express"]
  },
  // Add more projects here
];

function Projects() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">

      {/* Certificates Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(showAllCertificates ? certificates : certificates.slice(0, 6)).map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setEnlargedImage(cert.image)}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover rounded-md" />
              <p className="text-center mt-2">{cert.title}</p>
            </motion.div>
          ))}
        </div>
        <button
          className="mt-4 bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400"
          onClick={() => setShowAllCertificates(!showAllCertificates)}
        >
          {showAllCertificates ? "Show Less" : "See All"}
        </button>
      </div>

      {/* My Projects Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(showAllProjects ? projects : projects.slice(0, 4)).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">Tech Used: {project.tech.join(", ")}</p>
              <div className="mt-3 flex gap-3">
                <a href={project.demo} className="bg-blue-500 px-3 py-2 rounded-md text-black hover:bg-blue-400">Live Demo</a>
                <a href={project.source} className="bg-gray-600 px-3 py-2 rounded-md text-black hover:bg-gray-500">Source Code</a>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          className="mt-4 bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-400"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "Show Less" : "See All"}
        </button>
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} className="max-w-lg rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}

export default Projects;
