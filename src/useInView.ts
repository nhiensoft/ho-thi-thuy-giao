import { useEffect, useCallback } from 'react'

const ANIM_SELECTORS =
  '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-fade-scale, .anim-stagger'

let observer: IntersectionObserver | null = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
  )
  return observer
}

/**
 * Call once at App root. Returns `rescan()` to re-observe new elements
 * (e.g. after a tab switch adds new DOM nodes).
 */
export function useScrollAnimations() {
  const rescan = useCallback(() => {
    const obs = getObserver()
    const targets = document.querySelectorAll(ANIM_SELECTORS)
    targets.forEach((el) => {
      if (!el.classList.contains('in-view')) {
        obs.observe(el)
      }
    })
  }, [])

  useEffect(() => {
    rescan()
    return () => {
      observer?.disconnect()
      observer = null
    }
  }, [rescan])

  return rescan
}
