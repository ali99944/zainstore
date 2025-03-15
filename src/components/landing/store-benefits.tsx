"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Truck, CreditCard, RotateCcw, HeadphonesIcon, Award } from "lucide-react"

const benefits = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "توصيل سريع",
    description: "توصيل مجاني للطلبات أكثر من 500 ريال",
    color: "bg-[#1B468F]/10 text-[#1B468F]",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "ضمان الجودة",
    description: "ضمان لمدة عامين على جميع المنتجات",
    color: "bg-[#F15A29]/10 text-[#F15A29]",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "دفع آمن",
    description: "طرق دفع متعددة وآمنة",
    color: "bg-[#1B468F]/10 text-[#1B468F]",
  },
  {
    icon: <RotateCcw className="w-5 h-5" />,
    title: "استرجاع سهل",
    description: "استرجاع المنتجات خلال 14 يوم",
    color: "bg-[#F15A29]/10 text-[#F15A29]",
  },
  {
    icon: <HeadphonesIcon className="w-5 h-5" />,
    title: "دعم فني",
    description: "دعم فني على مدار الساعة",
    color: "bg-[#1B468F]/10 text-[#1B468F]",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "منتجات أصلية",
    description: "جميع منتجاتنا أصلية 100%",
    color: "bg-[#F15A29]/10 text-[#F15A29]",
  },
]

export function ZainStoreBenefits() {
  return (
    <section className="py-12 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-3 text-[#1B468F]">لماذا تختار زين ستور؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن نسعى دائماً لتقديم أفضل تجربة تسوق لعملائنا من خلال توفير منتجات عالية الجودة وخدمات متميزة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded border border-gray-100"
            >
              <div className={`w-10 h-10 rounded ${benefit.color} flex items-center justify-center mb-3`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

