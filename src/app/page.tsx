import * as motion from "motion/react-client";

export default function Home() {
  return (
    <motion.h1
      className="text-4xl font-bold text-green-900"
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
    >
      Nature Guardians
    </motion.h1>
  );
}