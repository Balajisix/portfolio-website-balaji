import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-gray-950 pb-8">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            "text-5xl font-bold px-4 md:px-0 text-center text-gray-100"
          }
        >
          About Me
        </h2>
        <div>
          <p className={"mt-16 text-xl text-justify text-gray-200"}>
          Good day, I am Balaji V, a programmer driven by curiosity and creativity. I dedicate myself to coding on a daily basis, skillfully crafting digital concepts with a sophisticated design. <br /> <br />

          I am currently doing my Master of Computer Applications <span className="text-blue-500 font-bold">(MCA)</span> at <span className="text-blue-500 font-bold">PSG College of Technology</span>. I have finished my B. Sc Computer Technology at KG College of Arts and Science. <br /> <br />

          Growing up, I was always drawn to the digital realm. My passion for computers ignited during my computer science studies, where I discovered the thrill of problem-solving and the satisfaction of building something from scratch. I delve deeper into developing interactive websites, and mastering fundamentals of web development. I'm on a mssion to develop a good product which it'll be more useful for the people
          </p>
          <h2
            className={
              "text-5xl mt-16 font-bold px-4 md:px-0 text-center text-gray-100"
            }
          >
            Skills
          </h2>
          <p className={"mt-4 text-xl text-justify text-gray-100"}>
            Combining a user-centric approach with cutting-edge technologies and
            dependable open-source software, I specialize in crafting
            high-performance websites that seamlessly adapt to smartphones,
            tablets, and desktops, delivering exceptional digital experiences.
          </p>
          <motion.div className="flex flex-wrap flex-col mt-8 flex-wrap justify-between ">
            {skills.map((skill, index) => (
              <div key={index}>
                <h4 className="mt-12 text-3xl font-semibold text-blue-500">
                  {skill.name}
                </h4>
                <div className="flex flex-wrap flex-row justify-between md:justify-start">
                  {skill.data.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView={"visible"}
                      variants={{
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: "spring",
                          },
                        },
                        hidden: { opacity: 1, y: 80 },
                      }}
                      className="py-2 px-4 bg-gray-100 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                    >
                      <img alt="" src={item.logo} className="w-12" />
                      <h4 className="text-md ml-4">{item.skill}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
