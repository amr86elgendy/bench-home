import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai';

const SeventhCard = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <article className='flex overflow-hidden col-span-2 bg-[#fffdcd] h-[28rem] border border-[rgba(32, 32, 32, 0.05)] rounded-xl'>
      <div className='grid relative overflow-hidden items-start justify-between grid-cols-[minmax(20rem,25rem),1fr] flex-1'>
        {/* first div */}
        <div className='absolute top-0 right-0 left-0 w-full grid grid-cols-3 gap-10 overflow-hidden mt-10 px-10'>
          <motion.div
            animate={
              !isAnimated
                ? {
                    y: '-100%',
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.5 },
                  }
                : {
                    y: '0',
                    opacity: 1,
                    transition: {
                      ease: 'easeIn',
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
                    y: '-100%',
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.5 },
                  }
                : {
                    y: '0',
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
              Quit manual work
            </h3>
            <p className='opacity-60 font-medium'>
              By bulk uploading new products and variants, group and create
              custom templates.
            </p>
          </motion.div>
          <motion.div
            animate={
              !isAnimated
                ? {
                    y: '-100%',
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.5 },
                  }
                : {
                    y: '0',
                    opacity: 1,
                    transition: {
                      ease: 'easeIn',
                      delay: 0.8,
                      duration: 0.35,
                    },
                  }
            }
          >
            <h3 className='font-semibold text-xl tracking-tighter mb-2'>
              Know what performs
            </h3>
            <p className='opacity-60 font-medium'>
              Make improved buying decisions by analysing performance data per
              product and bundle.
            </p>
          </motion.div>
        </div>
        {/* left div */}
        <div className='flex flex-col h-full p-10 justify-between items-start'>
          <div className='overflow-hidden'>
            <motion.div
              animate={
                !isAnimated
                  ? {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: 'easeIn',
                        delay: 0.3,
                        duration: 0.4,
                      },
                    }
                  : {
                      y: '100%',
                      opacity: 0,
                      transition: {
                        ease: 'easeIn',
                        delay: 0.2,
                        duration: 0.4,
                      },
                    }
              }
            >
              <h3 className='font-semibold text-xl tracking-tighter mb-2'>
                Unified product catalog
              </h3>
              <p className='opacity-60 font-medium'>
                Manage, edit, and sync product information across all your sales
                channels—lightning fast.
              </p>
            </motion.div>
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
        {/* right div */}
        <div className='flex justify-center items-center w-full h-full px-6 pt-6'>
          <motion.img
            src='fifth-card-img.svg'
            alt=''
            animate={
              !isAnimated
                ? {
                    y: 0,
                    transition: {
                      ease: 'easeInOut',
                      delay: 0.4,
                      duration: 0.4,
                    },
                    opacity: 1,
                  }
                : {
                    y: '55%',
                    transition: {
                      ease: 'linear',
                      delay: 0.5,
                      duration: 0.4,
                    },
                    opacity: 0.8,
                  }
            }
            className='absolute right-0 bottom-0 z-10 inline-block rounded-tl-lg w-[600px]'
          />
        </div>
      </div>
    </article>
  );
};

export default SeventhCard;
