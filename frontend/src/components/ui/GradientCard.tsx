import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientCardProps {
  children: ReactNode
  className?: string
  variant?: 'teal' | 'dark' | 'subtle'
  padding?: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'xl'
}

export function GradientCard({ 
  children, 
  className,
  variant = 'dark',
  padding = 'md',
  rounded = 'lg'
}: GradientCardProps) {
  const variantClasses = {
    teal: 'bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30',
    dark: 'bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600',
    subtle: 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm'
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  }

  return (
    <div 
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        roundedClasses[rounded],
        'transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10',
        className
      )}
    >
      {children}
    </div>
  )
}
