import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  "Programming Languages": ["Python", "C", "C++", "HTML", "CSS", "JavaScript"],
  "ML & AI Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "SpaCy", "NLTK", "LangChain", "Llama", "Ollama"],
  "Models": ["Mistral", "DeepSeek", "OpenAI", "Gemini", "Claude", "Falcon", "Meta AI", "Stable Diffusion"],
  "Web Frameworks": ["Django", "Flask", "FastAPI"],
  "Cloud & DevOps": ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins"],
  "Databases": ["Microsoft SQL Server", "MySQL", "DB2", "Vector Databases", "Pinecone", "Weaviate", "FAISS", "ChromaDB"],
  "Big Data & Distributed Computing": ["Hadoop", "Spark", "Kafka", "Ray", "Dask", "Flink"],
  "Tools & Technologies": ["OpenCV", "Git", "Power-BI", "SSIS", "Selenium", "MLflow", "Weights & Biases"],
  "Areas of Expertise": [
    "Computer Vision", 
    "NLP", 
    "Voice Recognition", 
    "Machine Learning", 
    "Deep Learning", 
    "Embeddings", 
    "Federated Learning", 
    "Reinforcement Learning", 
    "Graph Neural Networks", 
    "AutoML", 
    "MLOps"
  ]
};




export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">Skills</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}