import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="button w-full">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Connect With Me</h2>
          <p className="text-gray-300 mb-6">
            Feel free to reach out through social media or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Kuldeep-soni-23/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/kuldeep-soni-0746422bb" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/hey_.kuldeep_?igsh=MTA1anZmNG80ZGkzdw==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;