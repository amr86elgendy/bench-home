import { motion, useTransform } from "framer-motion";
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = ({ smoothScroll }) => {
  const opacity = useTransform(smoothScroll, [0.1, 0.2], [0, 1]);
  return (
    <>
      <motion.footer
        style={{ opacity }}
        className='fixed left-0 right-0 bottom-0 z-[1] text-white'
      >
        <div className='px-[10%] pb-10'>
          <section className='relative px-[5%]'>
            <div className='py-32 text-center'>
              <h1 className='text-7xl font-bold mb-6 tracking-tighter'>
                Experience the magic. <br />
                <span className='text-neutral-600'>
                  Take Genie for a test drive.
                </span>
              </h1>
              <p className='w-4/6 mb-12 mx-auto text-3xl text-center leading-normal text-neutral-400'>
                Book a demo and let us show you how you can change the way you
                manage your e-commerce business, forever.
              </p>
              <button className='px-8 py-5 bg-[#f50] text-white font-semibold rounded-md text-lg'>
                Get early access &rarr;
              </button>
            </div>
          </section>
          <div className='pb-8'>
            <div className='grid auto-cols-fr lg:grid-cols-[0.25fr,1fr,0.25fr] justify-between items-center gap-8'>
              <h1 className='font-bold text-2xl text-white'>Logo</h1>
              <ul className='flex gap-4 text-neutral-500 font-semibold text-lg list-none lg:justify-self-center'>
                <li>Benefits</li>
                <li>Features</li>
                <li>Integrations</li>
                <li>FAQs</li>
              </ul>
              <ul className='flex gap-4 text-neutral-500 lg:justify-self-end'>
                <li>
                  <FaTwitter size={25} />
                </li>
                <li>
                  <FaLinkedin size={25} />
                </li>
              </ul>
            </div>
          </div>
          <div className='h-[1px] w-full bg-gray-700'></div>
          <p className='text-neutral-500 text-center pt-8'>
            Genie Internet Technologies LTD 2023 —Made in Webflow by
            studioessence.design
          </p>
        </div>
        <div className="absolute top-0 left-0 right-0 mt-24">
          <img src="footer-star.svg" alt="" className="absolute top-0 left-0 right-0 z-[-1] inline-block w-full max-w-full align-middle" />
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
