import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: '20' }}
      animate={{ opacity: 1, y: 0 }}
      eyit={{ opacity: 0, x: '-20' }}
    >
      ContactPage
    </motion.h1>
  );
}

export default ContactPage
