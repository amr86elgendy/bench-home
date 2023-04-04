import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './layout/Navbar';
import CardScroll from './sections/CardScroll';
import Footer from './sections/Footer';
import GridCards from './sections/gridCards';
import Hero from './sections/Hero';
import Image from './sections/Image';
import Logos from './sections/Logos';
import HeaderSection from './pages/Header';
function App() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  const containerScale = useTransform(smoothScroll, [0.1, 0.2], [1, 0.92]);

  return (
    <div>
      <motion.main
        className='relative z-20 pointer-events-none'
        style={{ scale: containerScale }}
      >
        <Navbar />
        {/* <Hero />
        <Image /> */}
        <HeaderSection />
        <Logos baseVelocity={1} />
        <Logos baseVelocity={-1} />
        <GridCards />
        {/* <motion.div style={{ scale: containerScale }} ref={ref} className='relative z-10 w-full'>
        <CardScroll/> 
        <div className='h-screen'></div>
      </motion.div> */}
        <motion.section
          ref={ref}
          className='flex items-center justify-center h-screen bg-[#f8f8f8] rounded-br-3xl rounded-bl-3xl'
        >
          <h1 className='text-3xl uppercase'>section faq</h1>
        </motion.section>
        <div className='relative h-[60vh] pointer-events-none'></div>
        {/* ---------- footer ----------- */}
      </motion.main>
      <Footer smoothScroll={smoothScroll} />
    </div>
  );
}

export default App;
