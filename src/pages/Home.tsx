'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { Github, Linkedin, Instagram } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';


const Home = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    // Background Particles Effect
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 2 + 1;
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          color: `rgba(100, 255, 200, ${Math.random() * 0.6 + 0.2})`,
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white p-6 overflow-hidden">
      {/* Background Animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image with GSAP Animation */}
        <motion.img
          ref={imgRef}
          src={profileImg}
          alt="Kuldeep"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-green-400 shadow-lg"
        />

        {/* Text Section */}
        <div ref={textRef} className="text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-green-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-green-500">Kuldeep</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'Problem Solver', 2000,
                'UI/UX Designer', 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div className="mt-6 flex gap-4 justify-center md:justify-start">
            <motion.a
              href="/contact"
              className="px-6 py-3 bg-green-400 rounded-lg font-semibold text-gray-900 hover:bg-green-500 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/projects"
              className="px-6 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6 justify-center md:justify-start">
            <a href="https://github.com/Kuldeep-soni-23/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Github size={32} />
            </a>
            <a href="http://www.linkedin.com/in/kuldeep-soni-0746422bb" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Linkedin size={32} />
            </a>
            <a href="https://www.instagram.com/hey_.kuldeep_?igsh=MTA1anZmNG80ZGkzdw==" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
