import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "./layout/Navbar";
import CardScroll from "./sections/CardScroll";
import Footer from "./sections/Footer";
import GridCards from "./sections/gridCards";
import Hero from "./sections/Hero";
import Image from "./sections/Image";
import Logos from "./sections/Logos";
function App() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  const containerScale = useTransform(smoothScroll, [0.05, 0.2], [1, 0.92]);

  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Image />
      
      <Logos baseVelocity={1} />
      <Logos baseVelocity={-1} />
      <GridCards />
      {/* <motion.div style={{ scale: containerScale }} ref={ref} className='relative z-10 w-full'>
        <CardScroll/> 
        <div className='h-screen'></div>
      </motion.div> */}

      {/* ---------- footer ----------- */}
      {/* <Footer smoothScroll={smoothScroll} /> */}
    </div>
  );
}

export default App;
