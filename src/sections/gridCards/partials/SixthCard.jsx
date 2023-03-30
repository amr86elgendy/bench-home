import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

const SixthCard = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <article className='flex overflow-hidden h-[43rem] bg-[#20202008] border border-[rgba(32, 32, 32, 0.05)] rounded-xl'>
      <div className='grid grid-cols-1 auto-cols-fr gap-8 items-start justify-between relative overflow-hidden flex-1'>
        <div className='grid grid-cols-1 grid-rows-[repeat(3,auto)] auto-cols-fr absolute overflow-hidden mt-10 px-10 pointer-events-none gap-8 max-w-[75%] w-full'>
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
            className='pointer-events-none'
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Save time
            </h3>
            <p className='opacity-60 font-medium'>
              By centralising collaboration between operations, marketing and
              finance teams and shortening decision time.
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
                      delay: 0.3,
                      duration: 0.35,
                    },
                  }
            }
            className='pointer-events-none'
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Manage teams
            </h3>
            <p className='opacity-60 font-medium'>
              Delegate operational tasks, approval processes and deadlines.
              <br />
              <br />
              Edit, draft and comment on current projects to facilitate
              workflows.
            </p>
          </motion.div>
        </div>
        <div className='flex flex-col h-full py-10 pr-8 pl-10 justify-between items-start'>
          <div className='overflow-hidden'>
            <motion.div
              animate={
                isAnimated
                  ? {
                      y: '-100%',
                      opacity: 0,
                      transition: { ease: 'easeIn' },
                    }
                  : {
                      y: '0',
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
                Collaboration
              </h3>
              <p className='opacity-60 font-medium'>
                Work together with your team and your suppliers effectively and
                productively.
              </p>
            </motion.div>
          </div>
          <div className='absolute flex justify-center items-center w-full h-full pointer-events-none'>
            <motion.img
              src='/sixth-card-img.png'
              alt=''
              animate={
                !isAnimated
                  ? {
                      x: 0,
                      transition: {
                        ease: 'easeIn',

                        duration: 0.4,
                      },
                      opacity: 1,
                    }
                  : {
                      x: '65%',
                      transition: {
                        ease: 'linear',

                        duration: 0.3,
                      },
                      opacity: 0.8,
                    }
              }
              className='align-middle inline-block max-w-full rounded-tl-lg rounded-bl-lg overflow-hidden w-[90%]'
            />
          </div>
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

export default SixthCard;
