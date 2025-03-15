"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
    { name: "الثلاجات", icon: "/image/dev/blender-svgrepo-com.svg" },
    { name: "مكيفات الهواء", icon: "/image/dev/cheese-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
    { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
    { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
  ]

export function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">تسوق حسب الفئات</h2>
          <div className="flex gap-2">
          <button
              onClick={() => scroll("right")}
              className="border border-gray-200 rounded w-8 h-8 flex items-center justify-center text-[#1B468F] hover:text-[#F15A29] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("left")}
              className="border border-gray-200 rounded w-8 h-8 flex items-center justify-center text-[#1B468F] hover:text-[#F15A29] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth" style={{
            scrollbarWidth: 'none',
        }}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={'#'}
              className="flex flex-col items-center gap-2 text-center hover:text-[#F15A29] transition-colors"
            >
              <div className="w-20 h-20 border border-gray-100 bg-white rounded flex items-center justify-center">
                <Image src={category.icon || "/placeholder.svg"} alt={category.name} width={40} height={40} />
              </div>
              <span className="text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

