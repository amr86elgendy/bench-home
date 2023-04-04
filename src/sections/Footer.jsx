import { motion, useTransform } from "framer-motion";

const Footer = ({ smoothScroll }) => {
  const opacity = useTransform(smoothScroll, [0.1, 0.2], [0, 1]);
  return (
    <>
      <motion.footer
        style={{ opacity }}
        className='fixed left-0 right-0 bottom-0 z-[1] text-white'
      >
        <div className='px-[5%] pb-10'>
          <section className='relative px-[5%]'>
            <div className='py-32 text-center'>
              <h1 className='text-8xl font-bold mb-6 tracking-tighter'>
                Experience the magic. <br />
                <span className='text-neutral-600'>
                  Take Genie for a test drive.
                </span>
              </h1>
              <p className='w-4/6 mb-12 mx-auto text-2xl text-center leading-normal text-neutral-400'>
                Book a demo and let us show you how you can change the way you
                manage your e-commerce business, forever.
              </p>
              <button className='px-8 py-5 bg-[#f50] text-white font-semibold rounded-md text-lg'>
                Get early access &rarr;
              </button>
            </div>
          </section>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>

        {/* <div className='mt-12 mb-6 pb-6 border-b border-neutral-800 w-4/6 mx-auto flex justify-between items-center'>
          <h1 className='font-bold text-2xl text-white'>Logo</h1>
          <ui className='flex gap-4 text-neutral-500 font-semibold text-lg list-none'>
            <li>Benefits</li>
            <li>Features</li>
            <li>Integrations</li>
            <li>FAQs</li>
          </ui>
        </div>
        <p className='text-neutral-500'>
          Genie Internet Technologies LTD 2023 —Made in Webflow by
          studioessence.design
        </p> */}
      </motion.footer>
    </>
  );
};

export default Footer;
