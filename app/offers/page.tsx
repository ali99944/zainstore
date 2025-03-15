"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  Tag,
  Percent,
  Star,
  ShoppingBag,
  FlameIcon as Fire,
} from "lucide-react"

// Sample offers data
const offers = [
  {
    id: 1,
    title: "خصم 25% على جميع مكيفات جري",
    subtitle: "وفر حتى 1000 ريال على مكيفات جري الموفرة للطاقة",
    description:
      "استمتع بأفضل العروض على مكيفات جري من أشهر الماركات العالمية. العرض ساري حتى نهاية الشهر. يشمل العرض جميع موديلات مكيفات جري بما في ذلك المكيفات الانفرتر الموفرة للطاقة ومكيفات الشباك والمكيفات المتنقلة.",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    expiryDate: "2024-04-30",
    expiryDays: 5,
    color: "bg-[#1B468F]",
    discount: 25,
    badge: "الأكثر مبيعاً",
    badgeColor: "bg-[#F15A29]",
    featured: true,
    products: [
      {
        id: 101,
        name: "مكيف سبليت جري انفرتر 18000 وحدة",
        price: 2499,
        oldPrice: 2999,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.8,
        reviewCount: 124,
      },
      {
        id: 102,
        name: "مكيف سبليت جري انفرتر 12000 وحدة",
        price: 1899,
        oldPrice: 2199,
        image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
        rating: 4.6,
        reviewCount: 98,
      },
      {
        id: 103,
        name: "مكيف شباك جري 18000 وحدة",
        price: 1499,
        oldPrice: 1899,
        image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
        rating: 4.5,
        reviewCount: 76,
      },
    ],
    benefits: [
      "توفير في استهلاك الكهرباء يصل إلى 60%",
      "ضمان لمدة 10 سنوات على الكمبروسر",
      "تبريد سريع وفعال",
      "تشغيل هادئ بمستوى ضوضاء منخفض",
    ],
  },
  {
    id: 2,
    title: "عرض التركيب المجاني",
    subtitle: "احصل على تركيب مجاني عند شراء أي مكيف",
    description:
      "اشتري الآن أي مكيف واحصل على خدمة التركيب مجاناً مع ضمان لمدة عامين على الخدمة. يشمل العرض جميع أنواع المكيفات من مختلف الماركات العالمية. التركيب يتم بواسطة فنيين معتمدين ومدربين على أعلى مستوى.",
    image: "https://img.freepik.com/free-photo/low-angle-people-working-with-drill_23-2149366670.jpg",
    expiryDate: "2024-05-15",
    expiryDays: 7,
    color: "bg-[#F15A29]",
    discount: null,
    badge: "عرض حصري",
    badgeColor: "bg-[#1B468F]",
    featured: true,
    products: [
      {
        id: 104,
        name: "مكيف سبليت جري انفرتر 24000 وحدة",
        price: 2999,
        oldPrice: 3499,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.9,
        reviewCount: 145,
      },
      {
        id: 105,
        name: "مكيف سبليت سامسونج انفرتر 18000 وحدة",
        price: 2699,
        oldPrice: 3199,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.7,
        reviewCount: 112,
      },
    ],
    benefits: [
      "تركيب احترافي بواسطة فنيين معتمدين",
      "ضمان لمدة عامين على خدمة التركيب",
      "توصيل مجاني للمنزل",
      "دعم فني على مدار الساعة",
    ],
  },
  {
    id: 3,
    title: "اشتري مكيف واحصل على فلتر مجاناً",
    subtitle: "هدية مع كل مكيف: فلتر إضافي مجاني",
    description:
      "اشتري أي مكيف من مكيفات جري أو سامسونج واحصل على فلتر إضافي مجاناً. الفلتر الإضافي يساعد على تنقية الهواء وإزالة الغبار والروائح الكريهة، مما يوفر هواءً نقياً وصحياً في منزلك.",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    expiryDate: "2024-05-30",
    expiryDays: 10,
    color: "bg-gradient-to-r from-[#1B468F] to-[#3672D9]",
    discount: null,
    badge: "هدية مجانية",
    badgeColor: "bg-green-600",
    featured: false,
    products: [
      {
        id: 106,
        name: "فلتر مكيف جري أصلي",
        price: 0,
        oldPrice: 99,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
        rating: 4.6,
        reviewCount: 42,
      },
    ],
    benefits: [
      "فلتر أصلي 100% من الشركة المصنعة",
      "يزيل الغبار والروائح الكريهة",
      "سهل التركيب والاستبدال",
      "يدوم لفترة أطول من الفلاتر العادية",
    ],
  },
  {
    id: 4,
    title: "خصم 15% على مكيفات الشباك",
    subtitle: "وفر الآن على مكيفات الشباك من جميع الماركات",
    description:
      "استمتع بخصم 15% على جميع مكيفات الشباك من مختلف الماركات العالمية. مكيفات الشباك مثالية للغرف الصغيرة والمكاتب، وتتميز بسهولة التركيب والصيانة وانخفاض التكلفة مقارنة بالأنواع الأخرى.",
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    expiryDate: "2024-04-20",
    expiryDays: 3,
    color: "bg-gradient-to-r from-[#F15A29] to-[#F7931E]",
    discount: 15,
    badge: "ينتهي قريباً",
    badgeColor: "bg-red-600",
    featured: false,
    products: [
      {
        id: 107,
        name: "مكيف شباك جري 12000 وحدة",
        price: 1199,
        oldPrice: 1399,
        image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
        rating: 4.4,
        reviewCount: 68,
      },
      {
        id: 108,
        name: "مكيف شباك سامسونج 18000 وحدة",
        price: 1599,
        oldPrice: 1899,
        image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
        rating: 4.5,
        reviewCount: 82,
      },
    ],
    benefits: [
      "سهولة التركيب والصيانة",
      "مثالي للغرف الصغيرة والمكاتب",
      "تكلفة أقل من المكيفات السبليت",
      "تبريد سريع وفعال",
    ],
  },
  {
    id: 5,
    title: "عرض الصيف: خصم 20% على مكيفات سامسونج",
    subtitle: "استعد للصيف مع أفضل مكيفات سامسونج بخصم 20%",
    description:
      "استمتع بخصم 20% على جميع مكيفات سامسونج الانفرتر الموفرة للطاقة. مكيفات سامسونج تتميز بالتصميم الأنيق والأداء القوي والتكنولوجيا المتطورة التي توفر تبريداً فعالاً مع استهلاك أقل للطاقة.",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    expiryDate: "2024-06-15",
    expiryDays: 20,
    color: "bg-[#1B468F]",
    discount: 20,
    badge: "عرض الصيف",
    badgeColor: "bg-blue-500",
    featured: true,
    products: [
      {
        id: 109,
        name: "مكيف سبليت سامسونج انفرتر 12000 وحدة",
        price: 1999,
        oldPrice: 2499,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.7,
        reviewCount: 95,
      },
      {
        id: 110,
        name: "مكيف سبليت سامسونج انفرتر 18000 وحدة",
        price: 2399,
        oldPrice: 2999,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.8,
        reviewCount: 112,
      },
      {
        id: 111,
        name: "مكيف سبليت سامسونج انفرتر 24000 وحدة",
        price: 2899,
        oldPrice: 3599,
        image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
        rating: 4.9,
        reviewCount: 87,
      },
    ],
    benefits: [
      "توفير في استهلاك الكهرباء يصل إلى 50%",
      "تقنية التبريد السريع",
      "مضاد للبكتيريا والفيروسات",
      "تحكم ذكي عبر تطبيق الهاتف",
    ],
  },
]

export default function OffersPage() {

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1B468F] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg')] bg-cover opacity-10 z-0"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded mb-4"
              >
                <span className="text-white font-medium flex items-center gap-2">
                  <Fire className="w-4 h-4" />
                  عروض حصرية ولفترة محدودة
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                أقوى عروض المكيفات <br />
                <span className="text-yellow-300">خصومات تصل إلى 25%</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white text-opacity-90 text-lg mb-8"
              >
                استعد لموسم الصيف مع أفضل العروض والخصومات على تشكيلة واسعة من المكيفات من أشهر الماركات العالمية. عروض
                حصرية على المكيفات الموفرة للطاقة، خدمات التركيب المجانية، والمزيد من المفاجآت.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#offers"
                  className="bg-white text-[#1B468F] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Tag className="w-5 h-5" />
                  تصفح العروض
                </Link>
                <Link
                  href="/store/air-conditioners"
                  className="bg-transparent border-2 border-white text-white px-6 py-2 rounded font-medium hover:bg-white/10 transition-colors"
                >
                  جميع المكيفات
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src="https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg"
                  alt="عروض المكيفات"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </motion.div>
          </div>
        </div>


      </div>

      <main className="container mx-auto px-4 py-8">

        {/* All Offers Section */}
        <section id="offers" className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1B468F] mb-2">جميع العروض</h2>
            <p className="text-gray-600">تصفح جميع العروض المتاحة حالياً</p>
          </div>

          <div className="space-y-8">
            {offers.map((offer, index) => (
              <motion.div
                id={`offer-${offer.id}`}
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded border border-gray-100 overflow-hidden "
              >
                {/* Offer Header */}
                <div className={`${offer.color} text-white p-6`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {offer.discount ? (
                          <div className="bg-white text-[#F15A29] px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                            <Percent className="w-3 h-3" />
                            <span>خصم {offer.discount}%</span>
                          </div>
                        ) : (
                          <div className="bg-white text-[#F15A29] px-2 py-1 rounded text-sm font-medium flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>عرض خاص</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-sm">
                          <Clock className="w-3 h-3" />
                          <span>ينتهي خلال {offer.expiryDays} أيام</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                      <p className="text-white/90">{offer.subtitle}</p>
                    </div>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded overflow-hidden bg-white/10 flex-shrink-0">
                      <Image
                        src={offer.image || "/placeholder.svg"}
                        alt={offer.title}
                        fill
                        className="object-cover p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Offer Description */}
                <div className="p-6 border-b border-gray-100">
                  <p className="text-gray-600">{offer.description}</p>
                </div>

                {/* Offer Products */}
                <div className="p-4">
                  <h3 className="font-bold text-[#1B468F] mb-4">المنتجات المشمولة في العرض</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {offer.products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/store/product/${product.id}`}
                        className="bg-gray-50 rounded border border-gray-100 overflow-hidden group"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-[#F15A29] transition-colors">
                            {product.name}
                          </h4>

                          <div className="flex items-center gap-1 my-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(product.rating) ? "text-[#F15A29] fill-[#F15A29]" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">({product.reviewCount})</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#F15A29]">{product.price} ريال</span>
                            {product.oldPrice && (
                              <span className="text-xs text-gray-400 line-through">{product.oldPrice} ريال</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      href={`/store/air-conditioners`}
                      className="inline-flex items-center gap-2 bg-[#1B468F] hover:bg-[#1B468F]/90 text-white px-6 py-2 rounded transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>تسوق الآن</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

