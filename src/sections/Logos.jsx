import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
const Logos = ({ baseVelocity }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-0, -100, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, d) => {
    let moveBy = directionFactor.current * baseVelocity * (d / 200);

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className=' bg-white flex-col items-center justify-center mx-auto overflow-hidden p-2 relative z-30'>
      <div className='flex items-center'>
        <motion.p
          style={{ x }}
          className=' text-6xl flex text-center text-neutral-400 '
        >
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50   '>
            <img src='evertox.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='flashventers.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='merama.png' className='w-32' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='moss.png' className='w-32' alt='' />
          </div>
        </motion.p>
        <motion.p
          style={{ x }}
          className=' text-6xl flex text-center text-neutral-400 '
        >
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50   '>
            <img src='evertox.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='flashventers.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='merama.png' className='w-32' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='moss.png' className='w-32' alt='' />
          </div>
        </motion.p>
        <motion.p
          style={{ x }}
          className=' text-6xl flex text-center text-neutral-400 '
        >
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50   '>
            <img src='evertox.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='flashventers.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='merama.png' className='w-32' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='moss.png' className='w-32' alt='' />
          </div>
        </motion.p>
        <motion.p
          style={{ x }}
          className=' text-6xl flex text-center text-neutral-400 '
        >
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50   '>
            <img src='evertox.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='flashventers.png' className='w-36' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='merama.png' className='w-32' alt='' />
          </div>
          <div className='mr-4 w-56 h-20 rounded-md flex justify-center items-center  bg-gray-50 '>
            <img src='moss.png' className='w-32' alt='' />
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Logos;
