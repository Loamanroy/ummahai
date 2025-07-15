import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon?: ReactNode
  isActive?: boolean
  isCompleted?: boolean
  className?: string
}

export function ProcessStep({ 
  step, 
  title, 
  description, 
  icon,
  isActive = false,
  isCompleted = false,
  className 
}: ProcessStepProps) {
  return (
    <motion.div
      className={cn(
        'relative flex flex-col items-center text-center p-6',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: step * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Step Number/Icon */}
      <div className={cn(
        'relative w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300',
        isCompleted 
          ? 'bg-teal-500 text-white' 
          : isActive 
            ? 'bg-teal-500/20 border-2 border-teal-500 text-teal-400'
            : 'bg-gray-800 border-2 border-gray-600 text-gray-400'
      )}>
        {icon || (
          <span className="text-lg font-bold">
            {step}
          </span>
        )}
        
        {/* Pulse animation for active step */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-teal-500"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Content */}
      <h3 className={cn(
        'text-xl font-semibold mb-2 transition-colors duration-300',
        isActive ? 'text-teal-400' : 'text-white'
      )}>
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
        {description}
      </p>

      {/* Connection line to next step */}
      <div className="absolute top-8 left-full w-full h-0.5 bg-gray-700 hidden lg:block">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-500 to-transparent"
          initial={{ width: '0%' }}
          whileInView={{ width: isCompleted ? '100%' : '0%' }}
          transition={{ duration: 1, delay: step * 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
