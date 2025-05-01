import React from "react";
import profilepic from "../assets/Profile-pic.jpg";
import { TypeAnimation } from "react-type-animation";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HELLO, I'M <br />
                    <span className="text-green-500">SACHMAN DHALIWAL</span>
                </motion.p>

                {/* Move the TypeAnimation below the name */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Software Developer",
                            1000,
                            "Student",
                            1000,
                            "Technology Enthusiast",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-300 text-xl md:text-3xl mb-4"
                    />
                </motion.div>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="font-bold text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a 3rd year Computer Science student at Toronto Metropolitan University, incoming at OPS!
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                                            <a
                        href="https://docs.google.com/document/d/1ASxbJF9aeTiCv2YKuv0sWnjEofTycHlr9tiMDsAdnBE/edit?usp=sharing" // Replace with your actual resume link
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-green-300 md:w-auto p-4 border border-green-400 rounded-xl"
                        >
                            Resume
                        </motion.button>
                        </a>


                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-green-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/SachmanSDhaliwal">
                            <AiOutlineGithub />
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sachman-dhaliwal-795691257/">
                            <AiOutlineLinkedin />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            <motion.img 
            src={profilepic}
            className="w-[300px] md:w-[450px] rounded-full border-4 border-green-500 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            />
        </div>
    </div>
  )
}

export default Hero;
