import { motion, useScroll, useTransform } from 'framer-motion';

const Image = () => {
  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [18, 0]);
  return (
    <>
      <motion.section className='header-img-parent'>
        <motion.img
          className='header-img'
          style={{ rotateX }}
          src='/img.png'
          alt=''
        />
      </motion.section>
      <p className='text-center text-gray-400 font-medium mb-20'>
        Backed by leading e-commerce investors and founders
      </p>
    </>
  );
};

export default Image;
