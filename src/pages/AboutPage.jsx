import { Image, Space, Stack, Text, Title } from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParallaxText from '../components/Footer';

const AboutPage = () => {
  const imgRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  // const titleScale = useTransform(scrollYProgress, [0, 300], [1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [16, 0]);

  return (
    <motion.section
      initial={{ opacity: 0, y: '20' }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Stack py={60} spacing={60} h='200vh'>
        <motion.div style={{ opacity: titleOpacity }}>
          <Text
            weight={700}
            size={90}
            lh={0.75}
            align='center'
            pos='fixed'
            sx={{ top: '15vh', right: '50%', transform: 'translateX(50%)' }}
          >
            <Text component='span' color='red'>
              Grow
            </Text>{' '}
            your inventory & catalog ops.{' '}
            <Text component='span' color='red'>
              Effortlessly.
            </Text>
          </Text>
        </motion.div>
        <Space h='30vh' />
        {/* <motion.div
          initial={{ rotateX: 16 }}
          style={{ transformStyle: 'preserve-3d', rotateX: '16deg' }}
        > */}
        {/* </motion.div> */}
        <section ref={imgRef}>
          <motion.div className='parent'>
            <motion.img
              className='img'
              style={{ rotateX }}
              src='/img.png'
              alt=''
            />
          </motion.div>
        </section>

        <ParallaxText baseVelocity={-5}></ParallaxText>
        <ParallaxText baseVelocity={5}>Framer Motion</ParallaxText>
      </Stack>
    </motion.section>
  );
};

export default AboutPage;
