"use client"

import { motion } from "framer-motion"
import{
  Package
} from "lucide-react"


export default function CollectionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#1B468F] py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
            >
              <span className="text-white font-medium flex items-center justify-center gap-2">
                <Package className="w-4 h-4" />
                مجموعات متكاملة بأسعار مميزة
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              مجموعات المنتجات
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-opacity-90 text-lg mb-8"
            >
              اختر من بين مجموعات المنتجات المتكاملة المصممة خصيصاً لتلبية احتياجاتك بأسعار مخفضة وعروض حصرية. وفر المال
              واستمتع بتجربة تسوق سهلة ومريحة.
            </motion.p>
          </div>
        </div>

      </div>

    </div>
  )
}

