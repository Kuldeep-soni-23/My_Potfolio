'use client'
import { motion } from 'framer-motion'
import aboutimg from '../assets/images/giphy.gif';



const skills = [
  {
    category: "Problem Solving",
    items: [
      { name: "C", level: 80 },
      { name: "C++", level: 70 },
      { name: "JAVA", level: 90 },
      { name: "R", level: 10 },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 70 },
      { name: "Next.js", level: 50 },
      { name: "TypeScript", level: 45 },
      { name: "Tailwind CSS", level: 50 },
      { name: "Three.js", level: 55 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 55 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 50 },
      { name: "PostgreSQL", level: 40 },
      { name: "GraphQL", level: 30 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 60 },
      { name: "Docker", level: 20 },
      { name: "AWS", level: 35 },
      { name: "CI/CD", level: 20 },
      { name: "Agile", level: 25 }
    ]
  }
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-green-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hi! I'm <span className="text-green-400 font-semibold">Kuldeep</span>, a passionate developer and aspiring data scientist.
            I love building intuitive, dynamic, and impactful web apps that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid  md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.img
              src={aboutimg}
              alt="Profile"
              className="rounded-lg shadow-md w-150 h-150"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl text-white font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Bachelor of Technology in Computer Science</li>
              <li>Arya College of Engineering , 2023–2027</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div>
                  {category.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating badges */}
        <div className="mt-16 relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  {["C++" ,"C", "JAVA", "R", "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
