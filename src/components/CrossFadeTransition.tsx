import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

type CrossFadeTransition = {
  children: ReactNode;
};

const variants = {
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

export default function CrossFadeTransition({
  children,
}: CrossFadeTransition) {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={asPath}
        style={{ overflow: "hidden" }}
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
