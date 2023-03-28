import { SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HomePage = () => {
  // const titleRef = useRef(null);
  // const { scrollY, scrollYProgress } = useScroll({
  //   target: titleRef,
  //   offset: ['start start', 'end end'],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  // console.log({ scrollY, scrollYProgress });
  return (
    <motion.section
      initial={{ opacity: 0, y: '20' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: '-20' }}
    >
      <Stack py={60} spacing={60} h='200vh'>
        <motion.div>
          <Title order={1} mx='auto' w='50%' align='center'>
            Personalized HR & payroll for small & medium businesses
          </Title>
        </motion.div>

        
      </Stack>
    </motion.section>
  );
};

export default HomePage;
