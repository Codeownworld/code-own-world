import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import servicesBg from '../bg1.jpg';

// Lottie imports
import webDevAnimation from '../lotties/webAnimation.json';
import mobileDevAnimation from '../lotties/mobileAnimation.json';
import backendAnimation from '../lotties/apiAnimation.json';
import writingAnimation from '../lotties/writeAnimation.json';
import studentAnimation from '../lotties/studentAnimation.json';
import cloudAnimation from '../lotties/cloudAnimation.json';

const services1 = [
  {
    animationData: webDevAnimation,
    title: "Web Development",
    description:
      "High-performance, SEO-optimized websites using React, Next.js, Flask, and Django. Fast, scalable, and pixel-perfect.",
  },
  {
    animationData: mobileDevAnimation,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native or Flutter that delight users and meet business goals.",
  },
  {
    animationData: backendAnimation,
    title: "Backend & API Services",
    description:
      "Secure, RESTful or GraphQL APIs, built with Node.js, Python, or Go. Designed to support modern applications.",
  },
  {
    animationData: writingAnimation,
    title: "Technical Writing",
    description:
      "Clear, concise documentation and blogs. From API guides to user manuals, we help your users understand fast.",
  },
  {
    animationData: studentAnimation,
    title: "Student Academic Projects",
    description:
      "Tailored solutions for academic projects, including prototypes, research tools, and full-stack applications to boost learning.",
  },
  {
    animationData: cloudAnimation,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure with AWS, Azure, or Google Cloud. Optimize performance and reduce costs.",
  },
];

const cardVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
  hover: {
    scale: 1.07,
    rotateX: 5,
    rotateY: 10,
    boxShadow:
      "0 15px 40px rgba(59, 130, 246, 0.8), 0 0 30px 8px rgba(147, 197, 253, 0.6)",
    transition: { duration: 0.4, type: "spring", stiffness: 200 },
  },
};

const ServiceCard = ({ animationData, title, description }) => {
  return (
    <motion.div
      className="relative bg-neutral-900 rounded-3xl p-8 shadow-xl cursor-pointer max-w-lg mx-auto text-white"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ perspective: 1000 }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(147, 197, 253, 0.2), transparent 70%), " +
            "radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.3), transparent 70%)",
          zIndex: 0,
          filter: "blur(15px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />

      {/* Larger Lottie icon */}
      <motion.div
        className="mb-6 mx-auto w-36 h-36 drop-shadow-lg z-10"
        whileHover={{ scale: 1.25, rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Lottie
          animationData={animationData}
          play
          loop
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>

      <h3 className="text-3xl font-bold mb-3 drop-shadow-md z-10">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed z-10">
        {description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: `url(${servicesBg}) center center/cover no-repeat fixed`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85 backdrop-blur-sm -z-10"></div>

      {/* Header */}
      <motion.header
        className="text-center py-16 px-4 relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg mb-4 select-none">
          What We Offer
        </h1>
        <p className="text-blue-300 text-lg max-w-2xl mx-auto drop-shadow-md">
          At Code Own World, we empower startups and businesses with end-to-end
          software solutions designed to scale, impress, and perform.
        </p>
      </motion.header>

      {/* Services Grid */}
      <section className="container mx-auto px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 relative z-10">
        {services1.map(({ animationData, title, description }, i) => (
          <ServiceCard
            key={i}
            animationData={animationData}
            title={title}
            description={description}
          />
        ))}
      </section>
    </div>
  );
};

export default Services;
