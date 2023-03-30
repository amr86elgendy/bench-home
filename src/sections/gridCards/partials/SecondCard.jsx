import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

const SecondCards = () => {
  const [isAnimated, setIsAnimated] = useState(true);
  return (
    <article className='flex overflow-hidden h-[45rem] bg-[#f4efff] border border-[rgba(32, 32, 32, 0.05)] rounded-xl'>
      <div className='grid grid-cols-1 gap-8 items-start justify-between relative overflow-hidden flex-1'>
        <div className='grid grid-cols-1 absolute overflow-hidden mt-10 px-10 pointer-events-none gap-8 max-w-[75%]'>
          <motion.div
            animate={
              !isAnimated
                ? {
                    x: '-100%',
                    opacity: 0,
                    transition: { ease: 'easeIn' },
                  }
                : {
                    x: '0',
                    opacity: 1,
                    transition: {
                      ease: 'easeIn',
                      delay: 0.2,
                      duration: 0.35,
                    },
                  }
            }
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Scale faster
            </h3>
            <p className='opacity-60 font-medium'>
              Easily launch new products and categories. Have them synced
              directly to all your online sales channels and 3PLs.
            </p>
          </motion.div>
          <motion.div
            animate={
              !isAnimated
                ? {
                    x: '-100%',
                    opacity: 0,
                    transition: { ease: 'linear' },
                  }
                : {
                    x: '0',
                    opacity: 1,
                    transition: {
                      ease: 'linear',
                      delay: 0.4,
                      duration: 0.35,
                    },
                  }
            }
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Scale faster
            </h3>
            <p className='opacity-60 font-medium'>
              Easily launch new products and categories. Have them synced
              directly to all your online sales channels and 3PLs.
            </p>
          </motion.div>
          <motion.div
            animate={
              !isAnimated
                ? {
                    x: '-100%',
                    opacity: 0,
                    transition: { ease: 'linear' },
                  }
                : {
                    x: '0',
                    opacity: 1,
                    transition: {
                      ease: 'easeIn',
                      delay: 0.6,
                      duration: 0.35,
                    },
                  }
            }
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Scale faster
            </h3>
            <p className='opacity-60 font-medium'>
              Easily launch new products and categories. Have them synced
              directly to all your online sales channels and 3PLs.
            </p>
          </motion.div>
        </div>
        <div className='flex h-full py-10 pr-8 pl-10 flex-col justify-between items-start'>
          <div></div>
          <div></div>
          <button
            className=' transition-all h-14 w-14 rounded-full mt-auto flex justify-center items-center font-extralight text-white text-4xl bg-black hover:shadow-plus-btn hover:-translate-y-1 duration-300'
            onClick={() => setIsAnimated((prev) => !prev)}
          >
            <motion.span
              animate={
                !isAnimated
                  ? {
                      rotate: 0,
                      transition: { ease: 'linear', duration: 0.15 },
                    }
                  : {
                      rotate: '45deg',
                      transition: { ease: 'linear', duration: 0.15 },
                    }
              }
            >
              <AiOutlinePlus size={24} />
            </motion.span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SecondCards;
