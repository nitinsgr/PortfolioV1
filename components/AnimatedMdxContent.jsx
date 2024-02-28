// components/AnimatedMdxContent.js
import { motion } from 'framer-motion';

const AnimatedMdxContent = ({ children, ...rest }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} {...rest}>
      {children}
    </motion.div>
  );
};

export default AnimatedMdxContent;
