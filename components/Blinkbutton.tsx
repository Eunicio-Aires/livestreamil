
import { motion } from 'framer-motion';

const BlinkingButton = () => {
  return (
    <motion.button
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      Estou a usar Next.js daisy
    </motion.button>
  );
};

export default BlinkingButton;
