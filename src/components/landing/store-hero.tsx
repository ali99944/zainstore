"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Slider data
const slides = [
  {
    id: 1,
    title: "أفضل العروض على المكيفات",
    subtitle: "خصم يصل إلى 25% على جميع المكيفات",
    description: "استمتع بأفضل العروض على مكيفات من أشهر الماركات العالمية",
    buttonText: "تسوق الآن",
    buttonLink: "/store/air-conditioners",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    color: "bg-[#1B468F]",
  },
  {
    id: 2,
    title: "أجهزة منزلية بأسعار تنافسية",
    subtitle: "غسالات، ثلاجات، أفران وأكثر",
    description: "اكتشف مجموعة واسعة من الأجهزة المنزلية عالية الجودة",
    buttonText: "استكشف المنتجات",
    buttonLink: "/store/home-appliances",
    image: "https://img.freepik.com/free-vector/realistic-home-appliances-composition_1284-65307.jpg",
    color: "bg-[#1B468F]",
  },
  {
    id: 3,
    title: "قطع غيار أصلية",
    subtitle: "لجميع الأجهزة المنزلية",
    description: "قطع غيار أصلية 100% بضمان الوكيل لجميع الأجهزة المنزلية",
    buttonText: "اطلب الآن",
    buttonLink: "/store/spare-parts",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    color: "bg-[#1B468F]",
  },
]

export function ZainStoreHero() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden font-montserrat">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className={`absolute inset-0 ${slide.color} z-0`}></div>
                <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg')] bg-cover opacity-10 z-0"></div>

{/* 
                <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className=" flex items-center justify-center"
                      >
                        <div className="relative w-full max-w-lg mx-auto">
                          <div className="absolute inset-0 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm transform rotate-6"></div>
                          <div className="relative p-6 rounded-2xl bg-white shadow-xl overflow-hidden">
                            <Image
                              src={slide.image || "/placeholder.svg"}
                              alt={slide.title}
                              width={500}
                              height={400}
                              className="w-full h-auto object-contain max-h-[300px] md:max-h-[350px]"
                            />
                          </div>
                        </div>
                      </motion.div>                       */}
                <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center">
                  <div className="max-w-xl">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="inline-block bg-white text-[#1B468F] px-3 py-1 rounded text-sm font-medium mb-3"
                    >
                      {slide.subtitle}
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-white text-opacity-90 mb-6 text-lg"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Link
                        href={slide.buttonLink}
                        className="inline-flex items-center gap-2 bg-white hover:bg-opacity-90 text-[#1B468F] font-medium px-5 py-2.5 rounded transition-colors"
                      >
                        <span>{slide.buttonText}</span>
                        <ChevronLeft className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          setAutoplay(false)
          prevSlide()
          setTimeout(() => setAutoplay(true), 10000)
        }}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1B468F] transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => {
          setAutoplay(false)
          nextSlide()
          setTimeout(() => setAutoplay(true), 10000)
        }}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1B468F] transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
              setTimeout(() => setAutoplay(true), 10000)
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "w-8 bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

