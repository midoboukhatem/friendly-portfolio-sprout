import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FileCode } from 'lucide-react';

const Projects = () => {
  const [currentParticle, setCurrentParticle] = useState(0);

  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      delay: Math.random() * 5,
    }));
    
    setParticles(newParticles);

    const particleInterval = setInterval(() => {
      setCurrentParticle(prev => (prev + 1) % 20);
    }, 500);
    
    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
<section className="h-screen w-full bg-white dark:bg-black relative flex flex-col items-center justify-center gap-8">
  {/* ✅ Background Particles */}
  <div className="absolute inset-0 overflow-hidden">
    {particles.map((particle, i) => (
      <motion.div 
        key={i}
        className="absolute rounded-full bg-portfolio-teal/30"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: currentParticle === i ? [0.2, 0.7, 0.2] : 0.2,
          scale: currentParticle === i ? [1, 1.5, 1] : 1,
          boxShadow: "0 0 5px rgba(79,209,197,0.3)"
        }}
        transition={{ 
          delay: particle.delay,
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ))}
  </div>

  {/* ✅ Main Content (Logo + Text) */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    {/* ✅ Animated Logo */}
    <motion.div 
      className="mb-6 relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        delay: 0.2,
        duration: 0.8
      }}
    >
      <div className="relative flex items-center justify-center">
        <div className="relative p-10 rounded-full bg-portfolio-blue dark:bg-portfolio-blue border border-white/10 dark:border-black/10">
          <motion.div 
            className="relative z-10 flex items-center justify-center"
            animate={{
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FileCode className="h-24 w-24 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* ✅ "Coming soon" Text */}
    <motion.h1 
      className="text-5xl md:text-7xl font-bold font-heading text-portfolio-blue mb-4 tracking-tight dark:text-portfolio-blue"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <span className="text-portfolio-blue dark:text-portfolio-blue">Coming soon</span>
    </motion.h1>

    {/* ✅ Centered Subtitle */}
    <motion.div 
      className="glass-card p-6 md:p-8 max-w-2xl backdrop-blur-xl bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <motion.p 
        className="text-black/80 dark:text-white/80 text-lg md:text-xl text-center leading-relaxed" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        I'm currently working on some exciting Salesforce projects. Check back soon to see my latest work!
      </motion.p>
    </motion.div>
  </div>

  {/* ✅ Animated Social Icons */}
  <motion.div 
    className="social-container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7, duration: 0.6 }}
  >
    <ul className="social-icons">
      <li>
        <a href="https://www.linkedin.com/in/mohamedboukhatem/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://www.salesforce.com/trailblazer/medboukhatem" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-cloud"></i>
        </a>
      </li>
      <li>
        <a href="mailto:midoboukhatem@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
      </li>
    </ul>
  </motion.div>
</section>

  );
};
export default Projects;
