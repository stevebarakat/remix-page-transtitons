import { gsap } from "gsap";
import { useState } from "react";
import { useLocation } from "@remix-run/react";
import { SwitchTransition, Transition } from "react-transition-group";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  const [completed, toggleCompleted] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={useLocation().pathname}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
