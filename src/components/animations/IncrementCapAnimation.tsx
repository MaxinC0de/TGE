import { motion } from "framer-motion"

const SCALE = 50

export default function IncrementCapAnimation({
  isAnimating
}: {
  isAnimating: boolean
}) {
  // change eases
  return (
    isAnimating && (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed z-10 top-0 left-0 w-[100%] h-[100%] flex justify-center overflow-hidden pointer-events-none"
      >
        <motion.div
          className="absolute bottom-6 size-12 bg-white rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: SCALE }}
          transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 size-12 bg-black rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: SCALE }}
          transition={{ duration: 5, delay: 1, ease: [0.2, 0, 0.1, 1] }}
        ></motion.div>
      </motion.div>
    )
  )
}
