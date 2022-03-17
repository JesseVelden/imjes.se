import { motion } from 'framer-motion';
const initial = { opacity: 0, y: -10 };
const whileInView = {
  opacity: 1,
  y: 0,
  transition: { ease: 'easeInOut', duration: 1 },
};
const viewport = { once: true };
export function FadeIn({ children }: { children: React.ReactFragment }) {
  return (
    <motion.div initial={initial} whileInView={whileInView} viewport={viewport}>
      {children}
    </motion.div>
  );
}
