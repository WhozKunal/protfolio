import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "Python Developer AI/ML",
    company: "Upsala Defsol And It Services Private Limited",
    period: "Dec 2023 - Present",
    location: "Delhi",
    description: [
      "Develop AI-driven applications for natural language understanding, chatbots, and voice recognition systems",
      "Create NLP models using TensorFlow, PyTorch, and Hugging Face Transformers",
      "Collect and preprocess datasets for training NLP models",
      "Integrate NLP models into applications with focus on scalability and security",
      "Collaborate with frontend and backend teams for application integration",
    ],
  },
  {
    title: "Python Developer AI/ML",
    company: "Aditya Intellectual",
    period: "Aug 2021 - Sep 2023",
    location: "Surat",
    description: [
      "Designed and optimized ML models using PyTorch and TensorFlow",
      "Managed large-scale datasets and implemented data preprocessing pipelines",
      "Implemented supervised learning algorithms and custom loss functions",
      "Deployed models using TensorFlow Serving and TorchServe",
      "Monitored model performance and addressed optimization issues",
      "Collaborated with cross-functional teams and participated in research",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-indigo-600 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}