import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a scroll-triggered fade-up.
 * `delay` staggers items within a group (ms).
 * `as` lets you pick the rendered element (default div).
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }
    // threshold:0 (not 0.12) so elements taller than the viewport — e.g. the
    // bookshelf grid — still trigger; a ratio-based threshold can never be
    // reached when the element is much taller than the screen. The negative
    // bottom rootMargin keeps the fade firing slightly after it enters view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
