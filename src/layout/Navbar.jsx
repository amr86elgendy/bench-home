import { motion } from 'framer-motion';

const links = [
  { label: 'home', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'contact us', to: '/contact-us' },
];

function Navbar() {
  return (
    <header className='fixed top-0 left-0 right-0 border-b border-[rgba(32, 32, 32, 0.1)] py-4 z-50 bg-white'>
      <div className='container flex justify-between items-center'>
        <img src='/genie.svg' />
        <ul className='flex justify-center items-center gap-x-8'>
          {links.map((link) => (
            <li className='text-lg capitalize duration-200 rounded-lg cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-gray-800 px-4 py-1.5'>
              {link.label}
            </li>
          ))}
        </ul>
        <motion.button
          className='text-lg text-[#783fd9] uppercase py-1.5 px-3 border border-[rgba(120, 63, 217, 0.15)] rounded-lg hover:bg-red-500 '
          whileHover={{ y: -3 }}
          style={{ backgroundColor: 'rgba(120, 63, 217, 0.05)' }}
        >
          login
        </motion.button>
      </div>
    </header>
  );
}

export default Navbar;
