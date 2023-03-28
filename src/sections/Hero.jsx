import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <section
      className='h-[50vh] mt-40 flex items-center justify-center'
      ref={ref}
    >
      <motion.div
        style={{ opacity, scale, x: '-50%', position }}
        className='left-1/2 z-10 flex flex-col gap-4 items-center'
      >
        <h1 className='text-center text-[90px] font-bold leading-tight tracking-tighter mb-6'>
          <span className='text-[#f50]'>Grow</span> your inventory & catalog ops{' '}
          <span className='text-[#f50]'>Effortlessly.</span>
        </h1>
        <p className='text-[27px] text-center leading-normal text-neutral-500 mb-6'>
          Say goodbye to spreadsheets and clunky ERPs. Genie is a modern
          back-end built to help online merchants like you scale faster, and
          with fewer headaches.
        </p>
        <button className='px-8 py-5 bg-[#f50] text-white font-semibold rounded-md text-lg'>
          Get early access &rarr;
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
