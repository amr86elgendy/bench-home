import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const CardScroll = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  const x = useTransform(smoothScroll, [0, 0.8], [0, -200]);

  return (
    <motion.div
      ref={ref}
        className=" rounded-bl-[48px] rounded-br-[48px] bg-gray-100  py-12"
    //   className="  bg-gray-100  py-12"
    >
      <div className="relative py-12  bg-white w-1/2 mx-auto rounded-lg text-center overflow-hidden">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Get e-com superpowers. <br />{" "}
          <span className="text-neutral-400">No magic lamp required.</span>
        </h1>
        <p className="w-5/6 mx-auto text-xl text-center leading-normal text-neutral-400">
          Manage your inventory and product catalog across channels, simplify
          orders, automate repetitive tasks, and make team collaboration a joy.
          All from one beautiful interface.
        </p>
        <img src="left.svg" className="absolute top-0 left-0 p-8" alt="" />
        <img src="right.svg" className="absolute top-0 right-0 p-8" alt="" />
        <div className=" relative  after:content-[''] after:bg-gradient-to-l from-white after:w-72 after:absolute after:top-0 after:bottom-0  after:z-30 after:right-0 before:content-[''] before:bg-gradient-to-r before:w-72 before:absolute before:top-0 before:bottom-0  before:z-30 before:left-0">
          <motion.div
            style={{ x }}
            className=" flex mt-12 justify-center items-center gap-4 w-[120%]"
          >
            <div className="flex flex-col gap-4">
              <img src="1.png" alt="" />
              <img src="2.svg" alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <img src="3.png" alt="" />
              <img src="4.svg" alt="" />
            </div>
            <div className="">
              <img src="5.svg" alt="" />
            </div>
            <div className="">
              <img src="6.svg" className="w-[700px]" alt="" />
              <img src="7.svg" alt="" />
              <img src="8.svg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardScroll;
