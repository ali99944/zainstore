"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

export function ZainStorePromo() {
  return (
    <section className="py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Promo Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B468F] to-[#1B468F]/80 opacity-90 z-10"></div>
            <Image
              src="https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg"
              alt="عروض المكيفات"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
            />
            <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white text-[#1B468F] px-3 py-1 rounded text-sm font-medium mb-3">
                  عرض محدود
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">خصم 25% على جميع المكيفات</h3>
                <p className="text-white text-opacity-90 mb-4 max-w-md">
                  استمتع بأفضل العروض على مكيفات من أشهر الماركات العالمية. العرض ساري حتى نهاية الشهر.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 rounded text-[#F15A29]">
                  <Clock className="w-4 h-4" />
                  <span>ينتهي خلال 5 أيام</span>
                </div>
                <Link
                  href="/store/air-conditioners"
                  className="inline-flex items-center gap-2 bg-white hover:bg-opacity-90 text-[#1B468F] font-medium px-4 py-1.5 rounded transition-colors"
                >
                  <span>تسوق الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Second Promo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F15A29] to-[#F15A29]/80 opacity-90 z-10"></div>
            <Image
              src="https://img.freepik.com/free-vector/realistic-home-appliances-composition_1284-65307.jpg"
              alt="عروض الأجهزة المنزلية"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
            />
            <div className="relative z-20 p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="inline-block bg-white text-[#F15A29] px-3 py-1 rounded text-sm font-medium mb-3">
                  عرض خاص
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">خصم 15% على الأجهزة المنزلية</h3>
                <p className="text-white text-opacity-90 mb-4 max-w-md">
                  اشتري الآن واحصل على خصم 15% على جميع الأجهزة المنزلية مع ضمان لمدة عامين.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div className="flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 rounded text-[#1B468F]">
                  <Clock className="w-4 h-4" />
                  <span>ينتهي خلال 3 أيام</span>
                </div>
                <Link
                  href="/store/home-appliances"
                  className="inline-flex items-center gap-2 bg-white hover:bg-opacity-90 text-[#F15A29] font-medium px-4 py-1.5 rounded transition-colors"
                >
                  <span>تسوق الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

