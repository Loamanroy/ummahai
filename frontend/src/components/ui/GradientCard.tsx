import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientCardProps {
  children: ReactNode
  className?: string
  variant?: 'teal' | 'dark' | 'subtle' | 'hero' | 'card-hover' | 'teal-subtle' | 'dark-teal'
  padding?: 'sm' | 'md' | 'lg' | 'responsive-sm' | 'responsive-md' | 'responsive-lg'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  shadow?: 'none' | 'primary' | 'accent' | 'glow-teal' | 'glow-teal-strong' | 'card-elevated' | 'card-elevated-hover'
  interactive?: boolean
  glowEffect?: boolean
}

export function GradientCard({ 
  children, 
  className,
  variant = 'dark',
  padding = 'md',
  rounded = 'lg',
  shadow = 'primary',
  interactive = false,
  glowEffect = false
}: GradientCardProps) {
  const variantClasses = {
    teal: 'bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30',
    dark: 'bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600',
    subtle: 'bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm',
    hero: 'bg-gradient-hero border border-accent',
    'card-hover': 'bg-gradient-card-hover border border-secondary',
    'teal-subtle': 'bg-gradient-teal-subtle border border-accent',
    'dark-teal': 'bg-gradient-dark-teal border border-primary'
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    'responsive-sm': 'spacing-responsive-sm',
    'responsive-md': 'spacing-responsive-md',
    'responsive-lg': 'spacing-responsive-lg'
  }

  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl'
  }

  const shadowClasses = {
    none: '',
    primary: 'shadow-primary',
    accent: 'shadow-accent',
    'glow-teal': 'shadow-glow-teal',
    'glow-teal-strong': 'shadow-glow-teal-strong',
    'card-elevated': 'shadow-card-elevated',
    'card-elevated-hover': 'shadow-card-elevated-hover'
  }

  return (
    <div 
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        roundedClasses[rounded],
        shadowClasses[shadow],
        'transition-all duration-300',
        interactive && 'interactive-card cursor-pointer hover:shadow-card-elevated-hover',
        glowEffect && 'hover:shadow-glow-teal',
        !interactive && 'hover:shadow-lg hover:shadow-teal-500/10',
        className
      )}
    >
      {children}
    </div>
  )
}
