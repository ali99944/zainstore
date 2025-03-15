"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingBag, Heart, Eye } from "lucide-react"

// Product categories
const categories = [
  { id: "all", label: "جميع المنتجات" },
  { id: "best-sellers", label: "الأكثر مبيعاً" },
  { id: "new-arrivals", label: "وصل حديثاً" },
  { id: "discounted", label: "خصومات" },
]

// Sample products data
const products = [
  {
    id: 1,
    name: "مكيف سبليت انفرتر",
    category: "air-conditioners",
    price: 1999,
    oldPrice: 2499,
    rating: 4.8,
    reviewCount: 124,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    discount: 20,
  },
  {
    id: 2,
    name: "مكيف شباك",
    category: "air-conditioners",
    price: 899,
    oldPrice: 1099,
    rating: 4.5,
    reviewCount: 86,
    image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 18,
  },
  {
    id: 3,
    name: "غسالة أوتوماتيك",
    category: "home-appliances",
    price: 1599,
    oldPrice: 1899,
    rating: 4.7,
    reviewCount: 103,
    image: "https://img.freepik.com/free-vector/realistic-washing-machine-with-open-door_107791-1525.jpg",
    isNew: true,
    isBestSeller: false,
    isDiscounted: true,
    discount: 15,
  },
  {
    id: 4,
    name: "ثلاجة مزدوجة الأبواب",
    category: "home-appliances",
    price: 2899,
    oldPrice: 3299,
    rating: 4.9,
    reviewCount: 157,
    image: "https://img.freepik.com/free-vector/realistic-refrigerator-with-closed-door_107791-1517.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    discount: 12,
  },
  {
    id: 5,
    name: "فلتر مكيف",
    category: "spare-parts",
    price: 99,
    oldPrice: 129,
    rating: 4.6,
    reviewCount: 42,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    discount: 23,
  },
  {
    id: 6,
    name: "قطع غيار غسالة",
    category: "spare-parts",
    price: 149,
    oldPrice: 199,
    rating: 4.4,
    reviewCount: 38,
    image: "https://img.freepik.com/free-vector/realistic-washing-machine-parts-illustration_23-2149128078.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    discount: 25,
  },
  {
    id: 7,
    name: "مكيف متنقل",
    category: "air-conditioners",
    price: 1299,
    oldPrice: 1499,
    rating: 4.3,
    reviewCount: 67,
    image: "https://img.freepik.com/free-vector/realistic-portable-air-conditioner-illustration_23-2149128079.jpg",
    isNew: true,
    isBestSeller: false,
    isDiscounted: true,
    discount: 13,
  },
  {
    id: 8,
    name: "مكنسة كهربائية",
    category: "home-appliances",
    price: 399,
    oldPrice: 499,
    rating: 4.7,
    reviewCount: 91,
    image: "https://img.freepik.com/free-vector/realistic-vacuum-cleaner-illustration_23-2149128080.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    discount: 20,
  },
]

export function ZainStoreProducts() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : activeCategory === "best-sellers"
        ? products.filter((product) => product.isBestSeller)
        : activeCategory === "new-arrivals"
          ? products.filter((product) => product.isNew)
          : products.filter((product) => product.isDiscounted)

  return (
    <section className="py-12 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1B468F]"
          >
            منتجات مميزة
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#F15A29] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded overflow-hidden border border-gray-100 group"
              >
                {/* Product Image */}
                <div className="relative h-44 overflow-hidden">
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

                {/* Product Info */}
                <div className="p-3">
                  <Link href={`/store/product/${product.id}`}>
                    <h3 className="font-bold mb-1 group-hover:text-[#F15A29] transition-colors">{product.name}</h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
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
                    <span className="font-bold text-lg">{product.price} ريال</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 text-sm line-through">{product.oldPrice} ريال</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <Link
            href="/store/products"
            className="inline-flex items-center gap-2 bg-[#F15A29] hover:bg-[#e04a1c] text-white font-medium px-5 py-2 rounded transition-colors"
          >
            <span>عرض جميع المنتجات</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">لا توجد منتجات في هذه الفئة حالياً</p>
          </div>
        )}
      </div>
    </section>
  )
}

