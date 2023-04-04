import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeaderSection = () => {
  const titleRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    ref: titleRef,
  });
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const rotateX = useTransform(scrollY, [0, 300], [18, 0]);
  console.log({ scrollY, scrollYProgress });
  return (
    <header ref={titleRef} className='relative bg-white'>
      <div className='px-[5%]'>
        <div className='relative w-full max-w-none'>
          <div className='relative flex flex-col h-[144vh]'>
            <motion.div
              className='sticky top-16 z-0 flex items-center justify-center py-20'
              style={{ scale, opacity }}
            >
              <div className='text-center'>
                <div className='w-full max-w-[62rem]'>
                  <h1 className='font-bold text-8xl leading-tight tracking-tighter mb-8'>
                    <span className='text-[#f50] capitalize'>grow</span> your
                    inventory &
                    <br />
                    catalog ops.
                    <span className='text-[#f50]'>Effortlessly.</span>
                  </h1>
                  <p className='text-2xl text-gray-500'>
                    Say goodbye to spreadsheets and clunky ERPs. Genie is a
                    modern back-end built to help online merchants like you
                    scale faster, and with fewer headaches.
                  </p>
                  <button className='px-8 py-4 bg-[#f50] mt-8 text-white rounded-lg'>
                    get early access
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div className='flex flex-col justify-start z-[1] overflow-hidden h-[120vh] header-img-parent'>
              <motion.img
                src='/img.png'
                alt=''
                className='inline-block absolute inset-0 z-[2] align-middle object-contain w-full overflow-hidden'
                style={{ rotateX }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className=''></div>
      <div className='absolute left-0 right-0 bottom-0 z-30 pt-72 w-full max-w-full header-3'></div>
    </header>
  );
};

export default HeaderSection;
