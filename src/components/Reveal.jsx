import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fades content up as it scrolls into view. Collapses to a plain wrapper
 * when the visitor has asked for reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 16, className = '', as = 'div' }) => {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  if (reduce) return <div className={className}>{children}</div>

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
