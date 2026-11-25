import '../../styles/Carousel.css'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent,
} from 'react'

interface CarouselProps {
  children: ReactNode[]
  autoplayInterval?: number
}

const Carousel = ({
  children,
  autoplayInterval = 5000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const dragDistance = useRef(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalSlides = children.length

  const goToSlide = useCallback(
    (index: number) => {
      if (totalSlides === 0) return

      const nextIndex = (index + totalSlides) % totalSlides
      setCurrentIndex(nextIndex)
    },
    [totalSlides],
  )

  const startAutoplay = useCallback(() => {
    if (totalSlides <= 1) return

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % totalSlides)
    }, autoplayInterval)
  }, [autoplayInterval, totalSlides])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  useEffect(() => {
    startAutoplay()

    return stopAutoplay
  }, [startAutoplay, stopAutoplay])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    startX.current = event.clientX
    dragDistance.current = 0

    setIsDragging(true)
    stopAutoplay()

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return

    dragDistance.current = event.clientX - startX.current
  }

  const handlePointerUp = () => {
    if (!isDragging) return

    const threshold = 50
    const distance = dragDistance.current

    if (distance < -threshold) {
      goToSlide(currentIndex + 1)
    } else if (distance > threshold) {
      goToSlide(currentIndex - 1)
    }

    setIsDragging(false)
    dragDistance.current = 0
    startAutoplay()
  }

  const handlePointerCancel = () => {
    setIsDragging(false)
    dragDistance.current = 0
    startAutoplay()
  }

  if (totalSlides === 0) return null

  return (
    <div className="carousel">
      <div
        ref={trackRef}
        className={`carousel-track ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {children.map((child, index) => (
          <div className="carousel-slide" key={index}>
            {child}
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {children.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-indicator ${
              currentIndex === index ? 'active' : ''
            }`}
            onClick={() => {
              stopAutoplay()
              goToSlide(index)
              startAutoplay()
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
