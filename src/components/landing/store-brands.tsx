"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Brands data
const brands = [
  {
    name: "Samsung",
    logo: "/image/brands/samsung.svg",
  },
  {
    name: "LG",
    logo: "/image/brands/lg.svg",
  },
  {
    name: "Panasonic",
    logo: "/image/brands/panasonic.svg",
  },
  {
    name: "Toshiba",
    logo: "/image/brands/toshiba.svg",
  },
  {
    name: "Carrier",
    logo: "/image/brands/carrier.svg",
  },
  {
    name: "Gree",
    logo: "/image/brands/gree.png",
  },
  {
    name: "Bosch",
    logo: "/image/brands/bosch.svg",
  },
  {
    name: "Philips",
    logo: "/image/brands/phillips.svg",
  },
]

export function ZainStoreBrands() {
  return (
    <section className="py-12 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#1B468F]">ماركات عالمية</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نتعامل مع أفضل الماركات العالمية لنقدم لكم منتجات عالية الجودة بأسعار تنافسية
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded p-4 flex items-center justify-center border border-gray-100 group"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={80}
                className="max-h-20 w-auto object-contain transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

