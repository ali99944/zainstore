"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Featured categories data
const categories = [
  {
    id: "air-conditioners",
    name: "مكيفات",
    description: "مكيفات سبليت وشباك ومركزية من أشهر الماركات العالمية",
    image: "https://img.freepik.com/free-photo/air-conditioner-mounted-white-wall_53876-128235.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    color: "bg-[#1B468F]",
    count: 24,
  },
  {
    id: "home-appliances",
    name: "أجهزة منزلية",
    description: "غسالات، ثلاجات، أفران، وأجهزة منزلية متنوعة",
    image: "https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    color: "bg-[#F15A29]",
    count: 36,
  },
  {
    id: "spare-parts",
    name: "قطع غيار",
    description: "قطع غيار أصلية لجميع الأجهزة المنزلية",
    image:
      "https://img.freepik.com/premium-photo/car-accessories-elements-isolated-white_488220-4650.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    color: "bg-[#1B468F]",
    count: 48,
  },
  {
    id: "installation",
    name: "خدمات التركيب",
    description: "خدمات تركيب وصيانة احترافية لجميع الأجهزة",
    image:
      "https://img.freepik.com/free-photo/low-angle-people-working-with-drill_23-2149366670.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    color: "bg-[#F15A29]",
    count: 12,
  },
]

export function ZainStoreCategories() {
  return (
    <section className="py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#1B468F]">تسوق حسب الفئة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة واسعة من المنتجات عالية الجودة مصنفة حسب الفئات لتسهيل تجربة التسوق
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-44 overflow-hidden">
                <div className={`absolute inset-0 ${category.color} opacity-10`}></div>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold group-hover:text-[#F15A29] transition-colors">{category.name}</h3>
                  <span className={`${category.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                    {category.count} منتج
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
              </div>

              <div className="flex gap-x-2 justify-between px-2">
                {[
                  { name: "الثلاجات", icon: "/image/dev/blender-svgrepo-com.svg" },
                  { name: "مكيفات الهواء", icon: "/image/dev/cheese-svgrepo-com.svg" },
                  { name: "الشاشات", icon: "/image/dev/donuts-cake-svgrepo-com.svg" },
                  { name: "الغسالات", icon: "/image/dev/humberger-svgrepo-com.svg" },
                ].map((category, index) => (
                  <Link
                    key={index}
                    href={`#`}
                    className="flex flex-col items-center gap-2 text-center hover:text-[#F15A29] transition-colors"
                  >
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      width={24}
                      height={24}
                    />
                    <span className="text-xs">{category.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
