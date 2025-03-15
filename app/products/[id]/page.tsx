"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Share2, Truck, ShieldCheck, RotateCcw, Plus, Minus, Star, ChevronLeft, Check, ThumbsUp, Play, HelpCircle, Award, Zap, Percent, X, ChevronDown, LucideIcon } from 'lucide-react'

// Sample product data
const product = {
  id: 1,
  name: "مكيف سبليت جري انفرتر موفر للطاقة 18000 وحدة",
  description: "مكيف سبليت جري انفرتر موفر للطاقة بقوة 18000 وحدة، يتميز بتقنية التبريد السريع وخاصية التشغيل الهادئ. مناسب للغرف بمساحة حتى 20 متر مربع. يأتي مع ضمان لمدة 10 سنوات على الكمبروسر و3 سنوات على الجهاز.",
  longDescription: "مكيف سبليت جري انفرتر هو الخيار الأمثل للحصول على تبريد فعال وموفر للطاقة في منزلك أو مكتبك. يتميز هذا المكيف بتقنية الانفرتر المتطورة التي تعمل على ضبط سرعة الكمبروسر بشكل تلقائي حسب درجة الحرارة المطلوبة، مما يوفر استهلاك الطاقة ويقلل من فواتير الكهرباء.\n\nيوفر المكيف تبريداً سريعاً وفعالاً بفضل تقنية التبريد السريع، كما يتميز بمستوى ضوضاء منخفض يصل إلى 26 ديسيبل فقط، مما يجعله مثالياً للاستخدام في غرف النوم والمكاتب. يحتوي المكيف على فلتر مضاد للبكتيريا يعمل على تنقية الهواء وإزالة الروائح الكريهة، بالإضافة إلى خاصية التنظيف الذاتي التي تمنع تراكم البكتيريا والعفن داخل الوحدة.\n\nيأتي المكيف مع جهاز تحكم عن بعد مزود بشاشة LED سهلة القراءة، ويتضمن وضع النوم للتشغيل الليلي الذي يعمل على ضبط درجة الحرارة بشكل تلقائي أثناء النوم لتوفير الراحة المثالية. التصميم الأنيق والعصري للوحدة الداخلية يجعلها تتناسب مع مختلف أنماط الديكور.",
  features: [
    "تقنية انفرتر موفرة للطاقة",
    "تبريد سريع وفعال",
    "تشغيل هادئ بمستوى ضوضاء منخفض",
    "فلتر مضاد للبكتيريا",
    "خاصية التنظيف الذاتي",
    "تحكم عن بعد مع شاشة LED",
    "وضع النوم للتشغيل الليلي",
    "تصميم أنيق وعصري"
  ],
  specifications: [
    { name: "القدرة", value: "18000 وحدة (1.5 طن)" },
    { name: "نوع المكيف", value: "سبليت" },
    { name: "تقنية التبريد", value: "انفرتر" },
    { name: "استهلاك الطاقة", value: "1600 واط" },
    { name: "كفاءة الطاقة", value: "A++" },
    { name: "مستوى الضوضاء", value: "26 ديسيبل" },
    { name: "المساحة المناسبة", value: "حتى 20 متر مربع" },
    { name: "الأبعاد (الوحدة الداخلية)", value: "90 × 30 × 20 سم" },
    { name: "الوزن (الوحدة الداخلية)", value: "10 كجم" },
    { name: "الضمان", value: "10 سنوات على الكمبروسر، 3 سنوات على الجهاز" }
  ],
  price: 2499,
  oldPrice: 2999,
  discount: 17,
  rating: 4.8,
  reviewCount: 124,
  inStock: true,
  stockCount: 15,
  sku: "GR-INV-18K-001",
  images: [
    "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    "https://img.freepik.com/free-vector/realistic-portable-air-conditioner-illustration_23-2149128079.jpg"
  ],
  videoThumbnail: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
  brand: {
    name: "Gree",
    logo: "/image/brands/gree.png"
  },
  installationService: {
    available: true,
    price: 299,
    description: "تركيب احترافي بواسطة فنيين معتمدين مع ضمان على خدمة التركيب لمدة عام كامل"
  },
  warranty: {
    duration: "3 سنوات",
    description: "ضمان شامل لمدة 3 سنوات على الجهاز و10 سنوات على الكمبروسر"
  },
  shipping: {
    free: true,
    estimatedDelivery: "2-3 أيام عمل"
  },
  paymentOptions: [
    "الدفع عند الاستلام",
    "بطاقة ائتمان",
    "تقسيط بدون فوائد"
  ],
  highlights: [
    { icon: "Zap", title: "توفير الطاقة", description: "يوفر حتى 60% من استهلاك الكهرباء" },
    { icon: "ShieldCheck", title: "جودة عالية", description: "صناعة متطورة بمعايير عالمية" },
    { icon: "Award", title: "الأفضل مبيعاً", description: "الأكثر مبيعاً في فئته لعام 2023" }
  ],
  faqs: [
    {
      question: "ما هي مدة الضمان على المكيف؟",
      answer: "يأتي المكيف مع ضمان شامل لمدة 3 سنوات على الجهاز و10 سنوات على الكمبروسر."
    },
    {
      question: "هل يشمل السعر خدمة التركيب؟",
      answer: "لا، خدمة التركيب اختيارية ويمكن إضافتها بتكلفة إضافية قدرها 299 ريال."
    },
    {
      question: "ما هي المساحة المناسبة لهذا المكيف؟",
      answer: "هذا المكيف مناسب للغرف بمساحة تصل إلى 20 متر مربع."
    },
    {
      question: "هل يمكنني استبدال المنتج إذا لم يعجبني؟",
      answer: "نعم، يمكنك استبدال المنتج خلال 14 يوماً من تاريخ الاستلام شرط أن يكون بحالته الأصلية."
    }
  ]
}

// Sample reviews
const reviews = [
  {
    id: 1,
    user: "أحمد محمد",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2023-12-15",
    title: "ممتاز جداً وموفر للطاقة",
    comment: "اشتريت هذا المكيف قبل شهر وأنا سعيد جداً بأدائه. التبريد سريع والصوت منخفض جداً. لاحظت انخفاض في فاتورة الكهرباء مقارنة بالمكيف القديم.",
    helpful: 24,
    verified: true
  },
  {
    id: 2,
    user: "سارة علي",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    date: "2023-11-20",
    title: "جودة عالية وتصميم جميل",
    comment: "المكيف ممتاز من ناحية الجودة والتصميم. التبريد قوي والتحكم عن بعد سهل الاستخدام. أعطيت 4 نجوم فقط لأن التركيب كان مكلفاً بعض الشيء.",
    helpful: 18,
    verified: true
  },
  {
    id: 3,
    user: "خالد عبدالله",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2023-10-05",
    title: "أفضل مكيف اشتريته",
    comment: "هذا ثالث مكيف أشتريه من ماركة جري وهو الأفضل حتى الآن. التبريد سريع جداً والصوت منخفض للغاية. أنصح به بشدة لمن يبحث عن مكيف موفر للطاقة.",
    helpful: 32,
    verified: true
  }
]

// Comparison products
const comparisonProducts = [
  {
    id: 1,
    name: "مكيف سبليت جري انفرتر 18000 وحدة",
    price: 2499,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    features: {
      "تقنية انفرتر": true,
      "توفير الطاقة": "60%",
      "مستوى الضوضاء": "26 ديسيبل",
      "فلتر مضاد للبكتيريا": true,
      "خاصية التنظيف الذاتي": true,
      "ضمان الكمبروسر": "10 سنوات"
    }
  },
  {
    id: 2,
    name: "مكيف سبليت سامسونج انفرتر 18000 وحدة",
    price: 2699,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    features: {
      "تقنية انفرتر": true,
      "توفير الطاقة": "55%",
      "مستوى الضوضاء": "28 ديسيبل",
      "فلتر مضاد للبكتيريا": true,
      "خاصية التنظيف الذاتي": true,
      "ضمان الكمبروسر": "8 سنوات"
    }
  },
  {
    id: 3,
    name: "مكيف سبليت إل جي انفرتر 18000 وحدة",
    price: 2599,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    features: {
      "تقنية انفرتر": true,
      "توفير الطاقة": "50%",
      "مستوى الضوضاء": "30 ديسيبل",
      "فلتر مضاد للبكتيريا": true,
      "خاصية التنظيف الذاتي": false,
      "ضمان الكمبروسر": "7 سنوات"
    }
  }
]

// Related products
const relatedProducts = [
  {
    id: 2,
    name: "مكيف سبليت جري انفرتر 12000 وحدة",
    price: 1899,
    oldPrice: 2199,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
  },
  {
    id: 3,
    name: "مكيف سبليت جري انفرتر 24000 وحدة",
    price: 2999,
    oldPrice: 3499,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
  },
  {
    id: 4,
    name: "مكيف شباك جري 18000 وحدة",
    price: 1499,
    oldPrice: 1699,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
  },
  {
    id: 5,
    name: "فلتر مكيف جري أصلي",
    price: 99,
    oldPrice: 129,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
  }
]

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  Award: Award
}

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [includeInstallation, setIncludeInstallation] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)

  // Scroll to reviews
  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: 'smooth' })
    setActiveTab("reviews")
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/store" className="hover:text-[#F15A29]">الرئيسية</Link>
          <span>/</span>
          <Link href="/store/air-conditioners" className="hover:text-[#F15A29]">مكيفات</Link>
          <span>/</span>
          <Link href="/store/air-conditioners/split" className="hover:text-[#F15A29]">مكيفات سبليت</Link>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        {/* Product Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-gray-100 bg-white">
              {selectedImage < product.images.length ? (
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative h-full w-full bg-gray-100 flex items-center justify-center cursor-pointer" onClick={() => setShowVideoModal(true)}>
                  <Image
                    src={product.videoThumbnail || "/placeholder.svg"}
                    alt={`${product.name} - فيديو`}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#F15A29] mr-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                    شاهد الفيديو
                  </span>
                </div>
              )}
              
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-[#F15A29] text-white text-sm font-bold px-2 py-1 rounded">
                  خصم {product.discount}%
                </div>
              )}
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded border ${
                    selectedImage === index ? "border-[#F15A29]" : "border-gray-200"
                  } overflow-hidden flex-shrink-0 bg-white`}
                >
                  <Image src={image || "/placeholder.svg"} alt={`${product.name} - صورة ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
              <button
                onClick={() => setSelectedImage(product.images.length)}
                className={`relative w-20 h-20 rounded border ${
                  selectedImage === product.images.length ? "border-[#F15A29]" : "border-gray-200"
                } overflow-hidden flex-shrink-0 bg-gray-100`}
              >
                <Image src={product.videoThumbnail || "/placeholder.svg"} alt={`${product.name} - فيديو`} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-10 h-10 rounded overflow-hidden border border-gray-200 bg-white">
                  <Image src={product.brand.logo || "/placeholder.svg"} alt={product.brand.name} fill className="object-contain p-1" />
                </div>
                <span className="text-sm text-gray-500">{product.brand.name}</span>
                {product.inStock ? (
                  <span className="mr-auto text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">متوفر</span>
                ) : (
                  <span className="mr-auto text-sm bg-red-100 text-red-800 px-2 py-0.5 rounded">غير متوفر</span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-[#1B468F] mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-[#F15A29] fill-[#F15A29]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviewCount} تقييم)</span>
                <button onClick={scrollToReviews} className="text-sm text-[#1B468F] hover:text-[#F15A29] transition-colors">
                  قراءة التقييمات
                </button>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[#F15A29]">{product.price} ريال</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">{product.oldPrice} ريال</span>
                )}
                {product.discount > 0 && (
                  <span className="text-sm bg-[#F15A29]/10 text-[#F15A29] px-2 py-1 rounded flex items-center gap-1">
                    <Percent className="w-3 h-3" />
                    وفر {product.oldPrice - product.price} ريال
                  </span>
                )}
              </div>

              {/* Product Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {product.highlights.map((highlight, index) => {
                  const IconComponent = iconMap[highlight.icon]
                  return (
                    <div key={index} className="flex items-center gap-3 bg-white p-3 rounded border border-gray-100">
                      {IconComponent && <IconComponent className="w-5 h-5 text-[#F15A29]" />}
                      <div>
                        <h3 className="text-sm font-medium">{highlight.title}</h3>
                        <p className="text-xs text-gray-500">{highlight.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* SKU and Stock */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div>رمز المنتج: <span className="font-medium text-gray-700">{product.sku}</span></div>
                {product.inStock && (
                  <div>المتبقي في المخزون: <span className="font-medium text-gray-700">{product.stockCount} قطعة</span></div>
                )}
              </div>
            </div>

            {/* Installation Service */}
            {product.installationService.available && (
              <div className="bg-white p-4 rounded border border-gray-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeInstallation}
                    onChange={() => setIncludeInstallation(!includeInstallation)}
                    className="w-4 h-4 mt-1 text-[#F15A29] focus:ring-[#F15A29]"
                  />
                  <div className="flex-1">
                    <span className="font-medium">إضافة خدمة التركيب</span>
                    <p className="text-sm text-gray-500">{product.installationService.description}</p>
                  </div>
                  <span className="font-medium whitespace-nowrap">{product.installationService.price} ريال</span>
                </label>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1B468F]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#1B468F]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex-1">
                  <button className="w-full py-3 bg-[#1B468F] text-white rounded font-medium hover:bg-[#1B468F]/90 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    <span>إضافة للسلة</span>
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 py-2 border border-[#1B468F] text-[#1B468F] rounded font-medium hover:bg-[#1B468F]/5 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>المفضلة</span>
                </button>
                <button className="flex-1 py-2 border border-[#1B468F] text-[#1B468F] rounded font-medium hover:bg-[#1B468F]/5 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  <span>مشاركة</span>
                </button>
              </div>
            </div>

            {/* Shipping & Payment Info */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#1B468F]" />
                <div>
                  <h3 className="font-medium">توصيل مجاني</h3>
                  <p className="text-sm text-gray-500">التوصيل خلال {product.shipping.estimatedDelivery}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1B468F]" />
                <div>
                  <h3 className="font-medium">ضمان {product.warranty.duration}</h3>
                  <p className="text-sm text-gray-500">{product.warranty.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-[#1B468F]" />
                <div>
                  <h3 className="font-medium">استرجاع مجاني</h3>
                  <p className="text-sm text-gray-500">استرجاع خلال 14 يوم من الاستلام</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-medium mb-2">خيارات الدفع:</h3>
              <div className="flex flex-wrap gap-2">
                {product.paymentOptions.map((option, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === "description"
                  ? "text-[#F15A29] border-b-2 border-[#F15A29]"
                  : "text-gray-600 hover:text-[#1B468F]"
              }`}
            >
              وصف المنتج
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === "specifications"
                  ? "text-[#F15A29] border-b-2 border-[#F15A29]"
                  : "text-gray-600 hover:text-[#1B468F]"
              }`}
            >
              المواصفات
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === "reviews"
                  ? "text-[#F15A29] border-b-2 border-[#F15A29]"
                  : "text-gray-600 hover:text-[#1B468F]"
              }`}
            >
              التقييمات ({product.reviewCount})
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === "comparison"
                  ? "text-[#F15A29] border-b-2 border-[#F15A29]"
                  : "text-gray-600 hover:text-[#1B468F]"
              }`}
            >
              مقارنة المنتجات
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                activeTab === "faq"
                  ? "text-[#F15A29] border-b-2 border-[#F15A29]"
                  : "text-gray-600 hover:text-[#1B468F]"
              }`}
            >
              الأسئلة الشائعة
            </button>
          </div>

          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="bg-white rounded border border-gray-100 p-6">
              <div className="prose max-w-none">
                {product.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#1B468F] mb-4">المميزات الرئيسية</h3>
                <div className="grid gridd-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#F15A29] mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specifications" && (
            <div className="bg-white rounded border border-gray-100 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-col border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500">{spec.name}</span>
                    <span className="font-medium text-gray-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div ref={reviewsRef} className="bg-white rounded border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center p-4 bg-gray-50 rounded">
                  <div className="text-5xl font-bold text-[#1B468F] mb-2">{product.rating}</div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "text-[#F15A29] fill-[#F15A29]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">بناءً على {product.reviewCount} تقييم</div>
                  <button className="px-4 py-2 bg-[#F15A29] text-white rounded hover:bg-[#F15A29]/90 transition-colors">
                    أضف تقييمك
                  </button>
                </div>
                
                <div className="md:w-2/3">
                  <h3 className="text-lg font-bold text-[#1B468F] mb-4">آراء العملاء</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                            <Image src={review.avatar || "/placeholder.svg"} alt={review.user} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{review.user}</h4>
                              {review.verified && (
                                <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                                  مشتري مؤكد
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < review.rating ? "text-[#F15A29] fill-[#F15A29]" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span>{new Date(review.date).toLocaleDateString('ar-SA')}</span>
                            </div>
                          </div>
                        </div>
                        <h5 className="font-medium mb-2">{review.title}</h5>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#1B468F]">
                          <ThumbsUp className="w-4 h-4" />
                          <span>مفيد ({review.helpful})</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Comparison Tab */}
          {activeTab === "comparison" && (
            <div className="bg-white rounded border border-gray-100 p-6 overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-3 text-right font-medium text-gray-500">المنتج</th>
                    {comparisonProducts.map((product) => (
                      <th key={product.id} className="p-3 text-center">
                        <div className="flex flex-col items-center">
                          <div className="relative w-20 h-20 mb-2">
                            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                          </div>
                          <h3 className="text-sm font-medium line-clamp-2 text-center">{product.name}</h3>
                          <p className="text-[#F15A29] font-bold mt-1">{product.price} ريال</p>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(comparisonProducts[0].features).map((feature) => (
                    <tr key={feature} className="border-b border-gray-100">
                      <td className="p-3 font-medium">{feature}</td>
                      {comparisonProducts.map((product) => (
                        <td key={`${product.id}-${feature}`} className="p-3 text-center">
                          {/* {typeof product.features[feature] === 'boolean' ? (
                            product.features[feature] ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span>{product.features[feature]}</span>
                          )} */}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="bg-white rounded border border-gray-100 p-6">
              <div className="space-y-4">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-100 rounded overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="flex items-center justify-between w-full p-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-medium">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedFaq === index && (
                      <div className="p-4 bg-white">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-2 p-4 bg-gray-50 rounded">
                <HelpCircle className="w-5 h-5 text-[#1B468F]" />
                <span className="text-gray-700">هل لديك سؤال آخر؟</span>
                <Link href="/store/contact" className="text-[#F15A29] hover:underline">
                  تواصل معنا
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1B468F]">منتجات مشابهة</h2>
            <Link
              href="/store/air-conditioners"
              className="text-[#F15A29] flex items-center gap-1 hover:underline"
            >
              عرض الكل
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded overflow-hidden border border-gray-100 group"
              >
                <Link href={`/store/product/${product.id}`}>
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium line-clamp-2 group-hover:text-[#F15A29] transition-colors">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="font-bold text-[#F15A29]">{product.price} ريال</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 text-sm line-through">{product.oldPrice} ريال</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative w-full max-w-3xl bg-black rounded overflow-hidden">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title={`فيديو ${product.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
