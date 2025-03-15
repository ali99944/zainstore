"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Star,
  ChevronDown,
  Filter,
  ArrowUpDown,
  Heart,
  ShoppingBag,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Sample products data
const products = [
  {
    id: 1,
    name: "مكيف سبليت جري انفرتر 18000 وحدة",
    category: "split",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviewCount: 124,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    discount: 17,
    features: ["انفرتر", "توفير الطاقة", "تبريد سريع", "تشغيل هادئ"],
    inStock: true,
  },
  {
    id: 2,
    name: "مكيف سبليت جري انفرتر 12000 وحدة",
    category: "split",
    price: 1899,
    oldPrice: 2199,
    rating: 4.6,
    reviewCount: 98,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 14,
    features: ["انفرتر", "توفير الطاقة", "تشغيل هادئ"],
    inStock: true,
  },
  {
    id: 3,
    name: "مكيف سبليت جري انفرتر 24000 وحدة",
    category: "split",
    price: 2999,
    oldPrice: 3499,
    rating: 4.9,
    reviewCount: 145,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    discount: 14,
    features: ["انفرتر", "توفير الطاقة", "تبريد سريع", "تشغيل هادئ", "تنقية الهواء"],
    inStock: true,
  },
  {
    id: 4,
    name: "مكيف شباك جري 18000 وحدة",
    category: "window",
    price: 1499,
    oldPrice: 1899,
    rating: 4.5,
    reviewCount: 76,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 21,
    features: ["تبريد قوي", "سهل التركيب"],
    inStock: true,
  },
  {
    id: 5,
    name: "مكيف شباك جري 12000 وحدة",
    category: "window",
    price: 1199,
    oldPrice: 1399,
    rating: 4.4,
    reviewCount: 68,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 14,
    features: ["تبريد قوي", "سهل التركيب", "اقتصادي"],
    inStock: true,
  },
  {
    id: 6,
    name: "مكيف متنقل جري 12000 وحدة",
    category: "portable",
    price: 1299,
    oldPrice: 1499,
    rating: 4.3,
    reviewCount: 52,
    image: "https://img.freepik.com/free-vector/realistic-portable-air-conditioner-illustration_23-2149128079.jpg",
    isNew: true,
    isBestSeller: false,
    isDiscounted: true,
    discount: 13,
    features: ["متنقل", "سهل الاستخدام", "لا يحتاج تركيب"],
    inStock: true,
  },
  {
    id: 7,
    name: "فلتر مكيف جري أصلي",
    category: "accessories",
    price: 99,
    oldPrice: 129,
    rating: 4.6,
    reviewCount: 42,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 23,
    features: ["أصلي", "مضاد للبكتيريا", "سهل التركيب"],
    inStock: true,
  },
  {
    id: 8,
    name: "مكيف سبليت جري بارد فقط 18000 وحدة",
    category: "split",
    price: 1999,
    oldPrice: 2299,
    rating: 4.5,
    reviewCount: 87,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    discount: 13,
    features: ["بارد فقط", "تبريد قوي", "تشغيل هادئ"],
    inStock: true,
  },
]

// Filter options
const filterOptions = {
  categories: [
    { id: "all", label: "جميع الفئات" },
    { id: "split", label: "مكيفات سبليت" },
    { id: "window", label: "مكيفات شباك" },
    { id: "portable", label: "مكيفات متنقلة" },
    { id: "accessories", label: "اكسسوارات" },
  ],
  features: [
    { id: "inverter", label: "انفرتر" },
    { id: "energy-saving", label: "موفر للطاقة" },
    { id: "fast-cooling", label: "تبريد سريع" },
    { id: "quiet", label: "تشغيل هادئ" },
    { id: "air-purification", label: "تنقية الهواء" },
  ],
  priceRanges: [
    { id: "all", label: "جميع الأسعار" },
    { id: "under-1000", label: "أقل من 1000 ريال" },
    { id: "1000-2000", label: "1000 - 2000 ريال" },
    { id: "2000-3000", label: "2000 - 3000 ريال" },
    { id: "above-3000", label: "أكثر من 3000 ريال" },
  ],
  sortOptions: [
    { id: "featured", label: "الأكثر شهرة" },
    { id: "price-asc", label: "السعر: من الأقل للأعلى" },
    { id: "price-desc", label: "السعر: من الأعلى للأقل" },
    { id: "newest", label: "الأحدث" },
    { id: "rating", label: "التقييم" },
  ],
}

export default function CategoryProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activePriceRange, setActivePriceRange] = useState("all")
  const [activeSort, setActiveSort] = useState("featured")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6

  // Filter products based on active filters
  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (activeCategory !== "all" && product.category !== activeCategory) {
      return false
    }

    // Filter by price range
    if (activePriceRange !== "all") {
      if (activePriceRange === "under-1000" && product.price >= 1000) {
        return false
      } else if (activePriceRange === "1000-2000" && (product.price < 1000 || product.price > 2000)) {
        return false
      } else if (activePriceRange === "2000-3000" && (product.price < 2000 || product.price > 3000)) {
        return false
      } else if (activePriceRange === "above-3000" && product.price <= 3000) {
        return false
      }
    }

    // Filter by features
    if (selectedFeatures.length > 0) {
      const productFeatures = product.features.map((f) => f.toLowerCase())
      const hasAllFeatures = selectedFeatures.every((feature) => {
        if (feature === "inverter") return productFeatures.includes("انفرتر")
        if (feature === "energy-saving") return productFeatures.includes("توفير الطاقة")
        if (feature === "fast-cooling") return productFeatures.includes("تبريد سريع")
        if (feature === "quiet") return productFeatures.includes("تشغيل هادئ")
        if (feature === "air-purification") return productFeatures.includes("تنقية الهواء")
        return false
      })
      if (!hasAllFeatures) return false
    }

    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "price-asc") return a.price - b.price
    if (activeSort === "price-desc") return b.price - a.price
    if (activeSort === "newest") return a.isNew ? -1 : 1
    if (activeSort === "rating") return b.rating - a.rating
    // Default: featured (best sellers first)
    return a.isBestSeller ? -1 : 1
  })

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId))
    } else {
      setSelectedFeatures([...selectedFeatures, featureId])
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        {/* Category Header */}
        <div className="relative h-48 md:h-48 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B468F] to-[#1B468F]/80 z-10"></div>
          {/* <Image
            src="https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg"
            alt="مكيفات جري"
            fill
            className="object-cover"
          /> */}
          <div className="relative z-20 h-full flex flex-col justify-center p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-full  flex items-center justify-center">
                <Image src="/image/brands/gree.png" alt="Gree" width={50} height={50} className="object-cover" />
              </div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  مكيفات جري
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white text-opacity-90"
                >
                  تشكيلة واسعة من مكيفات جري الموفرة للطاقة
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/store" className="hover:text-[#F15A29]">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/store/air-conditioners" className="hover:text-[#F15A29]">
            مكيفات
          </Link>
          <span>/</span>
          <span className="text-gray-700">مكيفات جري</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-bold text-[#1B468F]">تصفية المنتجات</h2>
              </div>

              {/* Categories Filter */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium mb-3">الفئات</h3>
                <div className="space-y-2">
                  {filterOptions.categories.map((category) => (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={activeCategory === category.id}
                        onChange={() => setActiveCategory(category.id)}
                        className="text-[#F15A29] focus:ring-[#F15A29]"
                      />
                      <span className="text-sm">{category.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium mb-3">نطاق السعر</h3>
                <div className="space-y-2">
                  {filterOptions.priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={activePriceRange === range.id}
                        onChange={() => setActivePriceRange(range.id)}
                        className="text-[#F15A29] focus:ring-[#F15A29]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features Filter */}
              <div className="p-4">
                <h3 className="font-medium mb-3">المميزات</h3>
                <div className="space-y-2">
                  {filterOptions.features.map((feature) => (
                    <label key={feature.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className="text-[#F15A29] focus:ring-[#F15A29]"
                      />
                      <span className="text-sm">{feature.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Filters Bar */}
            <div className="bg-white rounded border border-gray-100 p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1 text-sm font-medium text-[#1B468F] hover:text-[#F15A29] transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>تصفية</span>
                </button>
                <div className="hidden md:block text-sm text-gray-500">
                  عرض <span className="font-medium">{sortedProducts.length}</span> منتج
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">ترتيب حسب:</span>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors px-3 py-1.5 rounded">
                    <ArrowUpDown className="w-4 h-4" />
                    <span>
                      {filterOptions.sortOptions.find((option) => option.id === activeSort)?.label || "الأكثر شهرة"}
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full right-0 mt-1 bg-white rounded border border-gray-100 shadow-sm z-10 w-48 hidden group-hover:block">
                    {filterOptions.sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setActiveSort(option.id)}
                        className={`block w-full text-right px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          activeSort === option.id ? "text-[#F15A29] font-medium" : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded overflow-hidden border border-gray-100 group"
                  >
                    <Link href={`/store/product/${product.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Product Badges */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1">
                          {product.isNew && (
                            <span className="bg-[#1B468F] text-white text-xs font-bold px-2 py-0.5 rounded">جديد</span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-[#F15A29] text-white text-xs font-bold px-2 py-0.5 rounded">
                              الأكثر مبيعاً
                            </span>
                          )}
                          {product.isDiscounted && (
                            <span className="bg-gray-800 text-white text-xs font-bold px-2 py-0.5 rounded">
                              خصم {product.discount}%
                            </span>
                          )}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 py-2 bg-black bg-opacity-50 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button
                            className="w-7 h-7 rounded bg-white flex items-center justify-center hover:bg-[#F15A29] hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart className="w-4 h-4" />
                          </button>
                          <button
                            className="w-7 h-7 rounded bg-white flex items-center justify-center hover:bg-[#F15A29] hover:text-white transition-colors"
                            aria-label="Quick view"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="w-7 h-7 rounded bg-white flex items-center justify-center hover:bg-[#F15A29] hover:text-white transition-colors"
                            aria-label="Add to cart"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium line-clamp-2 group-hover:text-[#F15A29] transition-colors">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 my-2">
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

                        {/* Price */}
                        <div className="flex items-center gap-2">
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
            ) : (
              <div className="bg-white rounded border border-gray-100 p-8 text-center">
                <p className="text-gray-500 mb-4">لا توجد منتجات تطابق معايير التصفية</p>
                <button
                  onClick={() => {
                    setActiveCategory("all")
                    setActivePriceRange("all")
                    setSelectedFeatures([])
                  }}
                  className="text-[#1B468F] hover:text-[#F15A29] transition-colors"
                >
                  إعادة ضبط التصفية
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded ${
                      currentPage === index + 1 ? "bg-[#1B468F] text-white" : "border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)}></div>
            <div className="absolute inset-y-0 right-0 w-80 max-w-full bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-bold text-[#1B468F]">تصفية المنتجات</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {/* Categories Filter */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium mb-3">الفئات</h3>
                  <div className="space-y-2">
                    {filterOptions.categories.map((category) => (
                      <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={activeCategory === category.id}
                          onChange={() => setActiveCategory(category.id)}
                          className="text-[#F15A29] focus:ring-[#F15A29]"
                        />
                        <span className="text-sm">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-medium mb-3">نطاق السعر</h3>
                  <div className="space-y-2">
                    {filterOptions.priceRanges.map((range) => (
                      <label key={range.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange-mobile"
                          checked={activePriceRange === range.id}
                          onChange={() => setActivePriceRange(range.id)}
                          className="text-[#F15A29] focus:ring-[#F15A29]"
                        />
                        <span className="text-sm">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div className="p-4">
                  <h3 className="font-medium mb-3">المميزات</h3>
                  <div className="space-y-2">
                    {filterOptions.features.map((feature) => (
                      <label key={feature.id} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFeatures.includes(feature.id)}
                          onChange={() => toggleFeature(feature.id)}
                          className="text-[#F15A29] focus:ring-[#F15A29]"
                        />
                        <span className="text-sm">{feature.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setActiveCategory("all")
                      setActivePriceRange("all")
                      setSelectedFeatures([])
                    }}
                    className="py-2 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    إعادة ضبط
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="py-2 bg-[#1B468F] text-white rounded hover:bg-[#1B468F]/90 transition-colors"
                  >
                    تطبيق
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

