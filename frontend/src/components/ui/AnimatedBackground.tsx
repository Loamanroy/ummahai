import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedBackgroundProps {
  className?: string
  variant?: 'waves' | 'particles' | 'gradient'
  intensity?: 'low' | 'medium' | 'high'
}

export function AnimatedBackground({ 
  className,
  variant = 'waves',
  intensity = 'medium'
}: AnimatedBackgroundProps) {
  const intensityConfig = {
    low: { count: 3, speed: 8 },
    medium: { count: 5, speed: 6 },
    high: { count: 8, speed: 4 }
  }

  const config = intensityConfig[intensity]

  if (variant === 'waves') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden', className)}>
        {Array.from({ length: config.count }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: config.speed + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"
              style={{
                transform: `skewX(-15deg) translateY(${i * 20}px)`,
                height: `${20 + i * 10}px`
              }}
            />
          </motion.div>
        ))}
      </div>
    )
  }

  if (variant === 'particles') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden', className)}>
        {Array.from({ length: config.count * 2 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: [null, -20, 20, -10],
              opacity: [0, 1, 0.5, 0]
            }}
            transition={{
              duration: config.speed + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn('absolute inset-0', className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-teal-600/5"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(20,184,166,0.05) 0%, transparent 50%, rgba(13,148,136,0.05) 100%)',
            'linear-gradient(225deg, rgba(13,148,136,0.05) 0%, transparent 50%, rgba(20,184,166,0.05) 100%)',
            'linear-gradient(45deg, rgba(20,184,166,0.05) 0%, transparent 50%, rgba(13,148,136,0.05) 100%)'
          ]
        }}
        transition={{
          duration: config.speed,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
}
