import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  className?: string
  animated?: boolean
}

export function MetricCard({ 
  title, 
  value, 
  subtitle,
  icon,
  trend = 'neutral',
  trendValue,
  className,
  animated = true
}: MetricCardProps) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-slate-400'
  }

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  }

  const cardContent = (
    <div className={cn(
      'bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-teal-500/50 transition-all duration-300',
      'hover:shadow-lg hover:shadow-teal-500/10',
      className
    )}>
      {/* Header with icon */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wide">
          {title}
        </h3>
        {icon && (
          <div className="text-teal-400">
            {icon}
          </div>
        )}
      </div>

      {/* Main value */}
      <div className="mb-2">
        <span className="text-3xl font-bold text-white">
          {value}
        </span>
        {subtitle && (
          <span className="text-sm text-slate-400 ml-2">
            {subtitle}
          </span>
        )}
      </div>

      {/* Trend indicator */}
      {trendValue && (
        <div className={cn(
          'flex items-center text-sm',
          trendColors[trend]
        )}>
          <span className="mr-1">
            {trendIcons[trend]}
          </span>
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return cardContent
}
