import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'primary' | 'secondary' | 'tertiary' | 'gradient-hero' | 'gradient-dark' | 'gradient-teal'
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive-sm' | 'responsive-md' | 'responsive-lg'
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'responsive'
  centerContent?: boolean
}

export function Section({ 
  children, 
  className, 
  id, 
  background = 'primary',
  padding = 'lg',
  containerWidth = 'xl',
  centerContent = true
}: SectionProps) {
  const backgroundClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    'gradient-hero': 'bg-gradient-hero',
    'gradient-dark': 'bg-gradient-dark',
    'gradient-teal': 'bg-gradient-teal'
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
    xl: 'py-24',
    'responsive-sm': 'spacing-responsive-sm',
    'responsive-md': 'spacing-responsive-md',
    'responsive-lg': 'spacing-responsive-lg'
  }

  const containerWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
    responsive: 'container-responsive'
  }

  return (
    <section 
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        'relative',
        className
      )}
    >
      <div className={cn(
        containerWidthClasses[containerWidth],
        centerContent && 'mx-auto',
        containerWidth !== 'responsive' && 'px-4 sm:px-6 lg:px-8'
      )}>
        {children}
      </div>
    </section>
  )
}
