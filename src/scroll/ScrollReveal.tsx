import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useScrollMotion } from './ScrollProvider'

type ScrollRevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  distance?: number
} & Pick<HTMLAttributes<HTMLElement>, 'role' | 'aria-hidden'>

type ScrollParallaxProps = {
  as?: ElementType
  children?: ReactNode
  className?: string
  speed?: number
} & Pick<HTMLAttributes<HTMLElement>, 'role' | 'aria-hidden'>

export function ScrollReveal({
  as: Tag = 'div',
  children,
  className,
  style,
  delay = 0,
  distance,
  role,
  'aria-hidden': ariaHidden,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerReveal } = useScrollMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return registerReveal(el, { delay, distance })
  }, [delay, distance, registerReveal])

  return (
    <Tag
      ref={ref}
      className={['scroll-reveal', className].filter(Boolean).join(' ')}
      style={style}
      role={role}
      aria-hidden={ariaHidden}
    >
      {children}
    </Tag>
  )
}

export function ScrollParallax({
  as: Tag = 'div',
  children,
  className,
  speed = 0.08,
  role,
  'aria-hidden': ariaHidden,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLElement>(null)
  const { registerParallax } = useScrollMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    return registerParallax(el, { speed })
  }, [speed, registerParallax])

  return (
    <Tag ref={ref} className={className} role={role} aria-hidden={ariaHidden}>
      {children}
    </Tag>
  )
}
