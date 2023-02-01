import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type SlideFadeTransitionProps = {
  children: ReactNode;
};

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
  },
  out: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
  },
};

export default function SlideFadeTransition({
  children,
}: SlideFadeTransitionProps) {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={asPath}
        variants={variants}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
