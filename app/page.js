
"use client";



import { ContainerScroll } from "@/components/ui/ContainerScroll";


import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React from 'react';


import { FaRocket, FaBrain, FaChartLine, FaCheck, FaQuestionCircle } from 'react-icons/fa';



export default function Home() {
  const router = useRouter();
  return (
    <div className=" font-sans overflow-x-hidden">
       
      <header className="container mx-auto mt-4 px-8 flex justify-between items-center">
     
        <motion.div 
          className="text-3xl font-bold  select-none"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          QueryMentor.
        </motion.div>
        <motion.nav 
          className="space-x-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#features" className="font-bold hover:text-blue-400">Features</a>
          <a href="#how-it-works" className="font-bold hover:text-blue-400">How It Works</a>
          
          <a href="#register" className="font-bold text-green-600 hover:text-blue-400 " onClick={() => router.push('/dashboard')}>Register</a>
        </motion.nav>
      </header>

      <section className="container mx-auto px-8 mb-6 text-center">
        <ContainerScroll titleComponent={
          <>
           <motion.h2 
          className="text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ace Your Next Interview with <span className=" bg-gradient-to-r from-violet-600 to-green-500 text-transparent bg-clip-text  text-7xl">QueryMentor</span>
     
        </motion.h2>
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Personalized AI-driven feedback to elevate your interview performance. Identify strengths, address weaknesses, and grow with confidence.
        </motion.p>
      
          </>
        }>  <Image
        src={`/dashboard.png`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
     
       
        </ContainerScroll>
      
      </section>

      <section id="features" className="container mx-auto px-8 mb-5 text-center">
        <motion.h3 
          className="text-5xl font-bold my-24 underline font-sans"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Features
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-10">
         
       
          <motion.div className=" p-6 rounded-lg shadow-xl" whileHover={{ scale: 1.05 }}>
            <FaBrain className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">AI-Powered Feedback</h4>
            <p>Get detailed feedback on your interview responses, powered by advanced AI insights.</p>
          </motion.div>
          <motion.div className=" p-6 rounded-lg shadow-xl " whileHover={{ scale: 1.05 }}>
            <FaChartLine className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Skill Analysis</h4>
            <p>Understand where you excel and where you need improvement for targeted prep.</p>
          </motion.div>
          <motion.div className=" p-6 rounded-lg shadow-xl " whileHover={{ scale: 1.05 }}>
            <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Progress Tracking</h4>
            <p>Track your journey with interactive charts and keep improving over time.</p>
          </motion.div>
        </div>
      </section>

     
      <section id="how-it-works" className="container mx-auto px-8 py-16 text-center  rounded-lg">
      <motion.h3 
          className="text-5xl font-bold my-24 mb-32 underline font-sans"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          How It Works ?
        </motion.h3>
        <div className = "flex flex-row">
        <div className=" grid md:grid-rows-3 gap-10">
          <motion.div className="p-6 rounded-lg shadow-2xl h-48 " whileHover={{ scale: 1.05 }}>
            <FaCheck className="text-4xl text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4 ">Register and Login</h4>
            <p>Create your profile and start your personalized interview experience.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-2xl h-48" whileHover={{ scale: 1.05 }}>
            <FaBrain className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Take the Interview</h4>
            <p>Answer curated questions and let the AI analyze your performance.</p>
          </motion.div>
          <motion.div className="p-6 rounded-lg shadow-2xl h-48" whileHover={{ scale: 1.05 }}>
            <FaChartLine className="text-4xl text-red-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Get Feedback</h4>
            <p>Receive comprehensive feedback and improvement suggestions in real time.</p>
          </motion.div>
        </div>
        <div>
        <Image
        src={`/napkin-selection.png`}
        alt="hero"
        height={50}
        width={1000}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
        </div>

        </div>
        
        
      </section>

     
      

    
      <section id="faq" className="container mx-auto px-8 py-16 text-center">
      <motion.h3 
          className="text-5xl font-bold my-24 mb-36 underline font-sans"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h3>
      
        <div className="grid md:grid-cols-2 gap-10 text-left">
         
          <div className=" p-6 rounded-lg shadow-lg">
       
            <FaQuestionCircle className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold mb-2">What is QueryMentor?</h4>
            <p>QueryMentor is an AI-driven interview preparation platform providing feedback and insights to help you improve.</p>
            
          </div>
          
          <div className="p-6 rounded-lg shadow-lg">
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
          className="inline-block shadow-2xl bg-green-500 hover:bg-green-600 text-white font-extrabold py-3 px-6 rounded-lg shadow-black  transform transition-transform duration-200 hover:scale-105"
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
