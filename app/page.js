
"use client";

import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import React from 'react';

import { FaRocket, FaBrain, FaChartLine, FaCheck, FaQuestionCircle } from 'react-icons/fa';



export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-violet-700 via-blue-800 to- text-white font-sans overflow-x-hidden">
      
      <header className="container mx-auto py-6 px-8 flex justify-between items-center">
        <motion.div 
          className="text-3xl font-bold "
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          QueryMentor
        </motion.div>
        <motion.nav 
          className="space-x-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
          <a href="#register" className="hover:text-blue-400 " onClick={() => router.push('/dashboard')}>Register</a>
        </motion.nav>
      </header>

      <section className="container mx-auto px-8 py-20 text-center">
        <motion.h2 
          className="text-5xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ace Your Next Interview with <span className="text-blue-400  text-6xl">QueryMentor</span>
        </motion.h2>
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Personalized AI-driven feedback to elevate your interview performance. Identify strengths, address weaknesses, and grow with confidence.
        </motion.p>
        <motion.a 
          href="#register"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.a>
      </section>

      <section id="features" className="container mx-auto px-8 py-16 text-center">
        <motion.h3 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Features
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <FaBrain className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">AI-Powered Feedback</h4>
            <p>Get detailed feedback on your interview responses, powered by advanced AI insights.</p>
          </motion.div>
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <FaChartLine className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Skill Analysis</h4>
            <p>Understand where you excel and where you need improvement for targeted prep.</p>
          </motion.div>
          <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Progress Tracking</h4>
            <p>Track your journey with interactive charts and keep improving over time.</p>
          </motion.div>
        </div>
      </section>

     
      <section id="how-it-works" className="container mx-auto px-8 py-16 text-center bg-gray-800 rounded-lg">
        <h3 className="text-3xl font-bold mb-8">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div className="p-6 rounded-lg shadow-2xl" whileHover={{ scale: 1.05 }}>
            <FaCheck className="text-4xl text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Register and Login</h4>
            <p>Create your profile and start your personalized interview experience.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-2xl" whileHover={{ scale: 1.05 }}>
            <FaBrain className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Take the Interview</h4>
            <p>Answer curated questions and let the AI analyze your performance.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-2xl" whileHover={{ scale: 1.05 }}>
            <FaChartLine className="text-4xl text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Get Feedback</h4>
            <p>Receive comprehensive feedback and improvement suggestions in real time.</p>
          </motion.div>
        </div>
      </section>

     
      

    
      <section id="faq" className="container mx-auto px-8 py-16 text-center">
        <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaQuestionCircle className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">What is QueryMentor?</h4>
            <p>QueryMentor is an AI-driven interview preparation platform providing feedback and insights to help you improve.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <FaQuestionCircle className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Is it free to use?</h4>
            <p>Yes, you can register and get started for free.</p>
          </div>
        </div>
      </section>

      
      <section id="register" className="container mx-auto px-8 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Start Your Journey with QueryMentor</h3>
        <p className="text-lg mb-8">Sign up today and take the first step toward acing your interviews with confidence.</p>
        <motion.a 
          href="#register" 
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          onClick={() => router.push('/dashboard')}
        >
          Register Now
        </motion.a>
      </section>

  
      <footer className="container mx-auto px-8 py-8 text-center text-black">
        <p>&copy; 2024 QueryMentor. All rights reserved.</p>
      </footer>
    </div>
  );
}
