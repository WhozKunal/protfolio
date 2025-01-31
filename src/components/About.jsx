import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="prose prose-lg text-gray-500">
              <p>
                Python Developer with expertise in AI/ML, specializing in developing intelligent applications
                and solutions. Graduate in Computer Science Engineering from Veer Narmad South Gujarat University
                with a strong foundation in mathematics and computer science principles.
              </p>
              <p>
                Experienced in developing and deploying machine learning models using PyTorch and TensorFlow,
                with a focus on natural language processing, computer vision, and supervised learning applications.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-700">Contact Information:</p>
                <ul className="list-none p-0">
                  <li>📍Noida 201303</li>
                  <li>📞 9616714403</li>
                  <li>✉️ Ks286823@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="AI/ML Development"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}