import { delay, motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Card = () => {
  const [isAni, setIsAni] = useState(true);
  return (
    <div className='bg-white w-full flex justify-center mt-32 pb-16  relative'>
      <div className='relative overflow-hidden bg-white shadow-2xl w-1/2 h-[500px] shadow-neutral-300 border rounded-xl  border-gray-200'>
        <motion.div className=' flex justify-center items-center gap-8 px-12 mt-12 absolute'>
          <div className='overflow-hidden '>
            <motion.div
              animate={
                isAni
                  ? {
                      y: '-100%',
                      opacity: 0,
                      transition: { ease: 'easeOut' },
                    }
                  : {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: 'easeOut',
                        delay: 0.3,
                      },
                    }
              }
            >
              <h2 className='text-xl font-bold mb-2'>Scale Faster</h2>
              <p className='text-neutral-500'>
                Easily launch new products and categories. Have them synced
                directly to all your online sales channels and 3PLs.
              </p>
            </motion.div>
          </div>

          <div className='overflow-hidden '>
            <motion.div
              animate={
                isAni
                  ? {
                      y: '-100%',

                      opacity: 0,
                      transition: { ease: 'easeOut' },
                    }
                  : {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: 'easeOut',
                        delay: 0.4,
                      },
                    }
              }
            >
              <h2 className='text-xl font-bold mb-2'>Quit manual work</h2>
              <p className='text-neutral-500'>
                By bulk uploading new products and variants, group and create
                custom templates.
              </p>
            </motion.div>
          </div>

          <div className='overflow-hidden'>
            <motion.div
              animate={
                isAni
                  ? {
                      y: '-100%',

                      opacity: 0,
                      transition: { ease: 'easeOut' },
                    }
                  : {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: 'easeOut',
                        delay: 0.5,
                      },
                    }
              }
            >
              <h2 className='text-xl font-bold mb-2'>Know what performs</h2>
              <p className='text-neutral-500'>
                Make improved buying decisions by analysing performance data per
                product and bundle.
              </p>
            </motion.div>
          </div>
        </motion.div>
        <div className=' h-full grid grid-cols-2 gap-6'>
          <div className=' flex flex-col p-12 overflow-hidden'>
            {/* This div for overflow-hidden only */}
            <div className='overflow-hidden'>
              <div className=' overflow-hidden'>
                <motion.div
                  animate={
                    isAni
                      ? {
                          y: 0,
                          opacity: 1,
                          transition: { ease: 'easeOut', delay: 0.3 },
                        }
                      : {
                          y: '100%',
                          opacity: 0,
                          transition: { ease: 'easeIn' },
                        }
                  }
                >
                  <h1 className='text-3xl mb-4 font-bold'>
                    Unified product catalog
                  </h1>
                  <p className='text-xl text-neutral-500'>
                    Manage, edit, and sync product information across all your
                    sales channels—lightning fast.
                  </p>
                </motion.div>
              </div>
            </div>
            <button
              onClick={() => setIsAni((prev) => !prev)}
              className=' transition-all h-14 w-14 rounded-full mt-auto flex justify-center items-center font-extralight text-white text-4xl bg-black hover:shadow-plus-btn hover:-translate-y-1 duration-300'
            >
              <motion.span
                animate={
                  isAni
                    ? {
                        rotate: 0,
                        transition: { ease: 'easeOut' },
                      }
                    : {
                        rotate: '45deg',
                        transition: { ease: 'easeOut' },
                      }
                }
              >
                <AiOutlinePlus size={24} />
              </motion.span>
            </button>
          </div>
          <div className=' self-end justify-self-end overflow-hidden w-9/12'>
            <motion.img
              animate={
                isAni
                  ? {
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: 0.2,
                      },
                    }
                  : {
                      y: '30%',
                      transition: { duration: 0.4, ease: 'easeOut' },
                    }
              }
              src='img2.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
