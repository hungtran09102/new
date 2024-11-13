import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">John Doe</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">Full Stack Developer</h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Building beautiful, responsive, and user-friendly web applications with modern technologies.
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://github.com" icon={<FaGithub size={24} />} />
          <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={24} />} />
          <SocialLink href="https://twitter.com" icon={<FaTwitter size={24} />} />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {icon}
    </a>
  );
}