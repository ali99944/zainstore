"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, ChevronDown, Phone, MapPin, Truck } from "lucide-react"
import { cn } from "@/lib/utils"
import { CartDrawer } from "./cart-drawer"

// Mega menu data
const megaMenuData = [
  {
    name: "مكيفات",
    href: "/store/air-conditioners",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
    subcategories: [
      {
        name: "مكيفات سبليت",
        href: "/store/air-conditioners/split",
        products: [
          {
            id: 1,
            name: "مكيف سبليت انفرتر",
            price: 1999,
            image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
          },
          {
            id: 2,
            name: "مكيف سبليت بارد",
            price: 1499,
            image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
          },
        ],
      },
      {
        name: "مكيفات شباك",
        href: "/store/air-conditioners/window",
        products: [
          {
            id: 3,
            name: "مكيف شباك 1.5 طن",
            price: 899,
            image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
          },
          {
            id: 4,
            name: "مكيف شباك 2 طن",
            price: 1099,
            image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
          },
        ],
      },
      {
        name: "مكيفات مركزية",
        href: "/store/air-conditioners/central",
        products: [
          {
            id: 5,
            name: "مكيف مركزي 3 طن",
            price: 3999,
            image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
          },
        ],
      },
      {
        name: "مكيفات متنقلة",
        href: "/store/air-conditioners/portable",
        products: [
          {
            id: 6,
            name: "مكيف متنقل",
            price: 1299,
            image:
              "https://img.freepik.com/free-vector/realistic-portable-air-conditioner-illustration_23-2149128079.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "أجهزة منزلية",
    href: "/store/home-appliances",
    image: "https://img.freepik.com/free-vector/realistic-home-appliances-composition_1284-65307.jpg",
    subcategories: [
      {
        name: "ثلاجات",
        href: "/store/home-appliances/refrigerators",
        products: [
          {
            id: 7,
            name: "ثلاجة مزدوجة الأبواب",
            price: 2899,
            image: "https://img.freepik.com/free-vector/realistic-refrigerator-with-closed-door_107791-1517.jpg",
          },
        ],
      },
      {
        name: "غسالات",
        href: "/store/home-appliances/washing-machines",
        products: [
          {
            id: 8,
            name: "غسالة أوتوماتيك",
            price: 1599,
            image: "https://img.freepik.com/free-vector/realistic-washing-machine-with-open-door_107791-1525.jpg",
          },
        ],
      },
      {
        name: "أفران",
        href: "/store/home-appliances/ovens",
        products: [{ id: 9, name: "فرن كهربائي", price: 899, image: "/placeholder.svg?height=100&width=100" }],
      },
      {
        name: "مكانس كهربائية",
        href: "/store/home-appliances/vacuum-cleaners",
        products: [
          {
            id: 10,
            name: "مكنسة كهربائية",
            price: 399,
            image: "https://img.freepik.com/free-vector/realistic-vacuum-cleaner-illustration_23-2149128080.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "قطع غيار",
    href: "/store/spare-parts",
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
    subcategories: [
      {
        name: "قطع غيار مكيفات",
        href: "/store/spare-parts/ac",
        products: [
          {
            id: 11,
            name: "فلتر مكيف",
            price: 99,
            image:
              "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
          },
        ],
      },
      {
        name: "قطع غيار ثلاجات",
        href: "/store/spare-parts/refrigerators",
        products: [{ id: 12, name: "ثرموستات ثلاجة", price: 149, image: "/placeholder.svg?height=100&width=100" }],
      },
      {
        name: "قطع غيار غسالات",
        href: "/store/spare-parts/washing-machines",
        products: [
          {
            id: 13,
            name: "قطع غيار غسالة",
            price: 149,
            image: "https://img.freepik.com/free-vector/realistic-washing-machine-parts-illustration_23-2149128078.jpg",
          },
        ],
      },
    ],
  },
  { name: "عروض خاصة", href: "/store/special-offers" },
  { name: "الأكثر مبيعاً", href: "/store/best-sellers" },
]

const topBarLinks = [
  { name: "تتبع طلبك", href: "/store/track-order", icon: Truck },
  { name: "فروعنا", href: "/store/branches", icon: MapPin },
  { name: "اتصل بنا", href: "/store/contact", icon: Phone },
]

// Cart items
const cartItems = [
  {
    id: 1,
    name: "مكيف سبليت انفرتر",
    price: 1999,
    quantity: 1,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
  },
  {
    id: 8,
    name: "غسالة أوتوماتيك",
    price: 1599,
    quantity: 1,
    image: "https://img.freepik.com/free-vector/realistic-washing-machine-with-open-door_107791-1525.jpg",
  },
  {
    id: 11,
    name: "فلتر مكيف",
    price: 99,
    quantity: 1,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-filter-illustration_23-2149128077.jpg",
  },
]

export function ZainStoreNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate cart total
  // const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1B468F] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {topBarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 text-xs hover:text-[#F15A29] transition-colors"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="text-xs">
              <span>توصيل سريع لجميع مناطق المملكة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white py-2" : "bg-white py-3",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10">
              <div className="relative w-10 h-10 bg-[#F15A29] rounded flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#1B468F]">ZAIN STORE</span>
                <span className="text-xs text-gray-500 -mt-1">للأجهزة المنزلية</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {megaMenuData.map((category) => (
                <div
                  key={category.name}
                  className="relative group"
                  onMouseEnter={() => category.subcategories && setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={category.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded flex items-center gap-1 transition-colors",
                      activeCategory === category.name
                        ? "text-[#F15A29] bg-gray-50"
                        : "text-gray-700 hover:text-[#F15A29]",
                    )}
                  >
                    {category.name}
                    {category.subcategories && (
                      <ChevronDown
                        className={cn("w-4 h-4 transition-transform", activeCategory === category.name && "rotate-180")}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {category.subcategories && (
                    <AnimatePresence>
                      {activeCategory === category.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded border border-gray-100 py-4 min-w-[700px] z-50"
                        >
                          <div className="flex">
                            {/* Category Image */}
                            <div className="w-1/4 p-4 border-r border-gray-100">
                              <div className="relative h-40 rounded overflow-hidden mb-3">
                                <Image
                                  src={category.image || "/placeholder.svg"}
                                  alt={category.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="font-bold text-[#1B468F] mb-2">{category.name}</h3>
                              <Link href={category.href} className="text-[#F15A29] text-sm hover:underline">
                                عرض جميع المنتجات
                              </Link>
                            </div>

                            {/* Subcategories */}
                            <div className="w-3/4 p-4">
                              <div className="grid grid-cols-3 gap-4">
                                {category.subcategories.map((subcategory) => (
                                  <div key={subcategory.name} className="mb-4">
                                    <Link
                                      href={subcategory.href}
                                      className="font-medium text-[#1B468F] hover:text-[#F15A29] transition-colors mb-2 block"
                                    >
                                      {subcategory.name}
                                    </Link>

                                    {/* Products */}
                                    {subcategory.products && (
                                      <div className="space-y-2 mt-2">
                                        {subcategory.products.map((product) => (
                                          <Link
                                            key={product.id}
                                            href={`/store/product/${product.id}`}
                                            className="flex items-center gap-2 group"
                                          >
                                            <div className="relative w-8 h-8 rounded overflow-hidden bg-gray-50">
                                              <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                              />
                                            </div>
                                            <div>
                                              <p className="text-xs text-gray-700 group-hover:text-[#F15A29] transition-colors">
                                                {product.name}
                                              </p>
                                              <p className="text-xs text-[#F15A29] font-medium">{product.price} ريال</p>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F15A29] text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>

              {/* Cart Drawer */}
              <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 lg:hidden bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/store" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="relative w-10 h-10 bg-[#F15A29] rounded flex items-center justify-center overflow-hidden">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xl text-[#1B468F]">ZAIN STORE</span>
                    <span className="text-xs text-gray-500 -mt-1">للأجهزة المنزلية</span>
                  </div>
                </Link>
                <button
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-6">
                  {/* Categories with Accordions */}
                  <div className="space-y-2">
                    {megaMenuData.map((category) => (
                      <div key={category.name} className="border-b border-gray-100 pb-2">
                        <div className="flex items-center justify-between">
                          <Link
                            href={category.href}
                            className="text-base font-medium text-gray-700 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                          {category.subcategories && (
                            <button
                              onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                              className="p-1"
                            >
                              <ChevronDown
                                className={cn(
                                  "w-5 h-5 text-gray-500 transition-transform",
                                  activeCategory === category.name && "rotate-180",
                                )}
                              />
                            </button>
                          )}
                        </div>

                        {/* Subcategories */}
                        {category.subcategories && (
                          <AnimatePresence>
                            {activeCategory === category.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pr-4 pb-2"
                              >
                                <div className="space-y-1 pt-1">
                                  {category.subcategories.map((subcategory) => (
                                    <Link
                                      key={subcategory.name}
                                      href={subcategory.href}
                                      className="block py-1.5 text-sm text-gray-600 hover:text-[#F15A29]"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {subcategory.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase">روابط سريعة</h3>
                    <div className="space-y-1">
                      {topBarLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-2 py-2 text-gray-700 hover:text-[#F15A29]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <link.icon className="w-4 h-4" />
                          <span>{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <Link
                  href="/store/cart"
                  className="flex items-center justify-center gap-2 bg-[#F15A29] text-white px-4 py-3 rounded hover:bg-[#e04a1c] transition-colors w-full font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>عرض سلة التسوق ({cartItems.length})</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

