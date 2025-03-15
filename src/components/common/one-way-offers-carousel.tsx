"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

// Sample offers data
const offers = [
  {
    id: 1,
    image: "https://images.tamkeenstores.com.sa/assets/new-media/Banner-4-Main-28JAN.webp",
    alt: "عرض هدية مجانية",
    link: "/store/offers/free-gift",
  },
  {
    id: 2,
    image: "https://images.tamkeenstores.com.sa/assets/new-media/Banner-16-Main-28JAN.webp",
    alt: "مكيفات بارد حار",
    link: "/store/offers/ac-units",
  },
  {
    id: 3,
    image: "https://images.tamkeenstores.com.sa/assets/new-media/Banner-26-Main-28JAN.webp",
    alt: "أسعار تبدأ من 1,599 ريال",
    link: "/store/offers/special-prices",
  },
]

export default function OffersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % offers.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  // Navigation functions
  const previousSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? offers.length - 1 : prev - 1))
  }, [])

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % offers.length)
  }, [])

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") nextSlide()
      if (e.key === "ArrowRight") previousSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, previousSlide])

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      {/* Main carousel container */}
      <div className="relative h-52 w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Link href={offers[currentSlide].link}>
              <Image
                src={offers[currentSlide].image || "/placeholder.svg"}
                alt={offers[currentSlide].alt}
                fill
                priority
                className="object-cover"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all z-10 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
          </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all z-10 group"
          aria-label="Next slide"
        >
                      <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setDirection(index > currentSlide ? 1 : -1)
                setCurrentSlide(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-4" : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

