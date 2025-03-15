"use client"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Heart, Trash2 } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  oldPrice?: number
  quantity: number
  image: string
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
}

export function CartDrawer({ isOpen, onClose, items }: CartDrawerProps) {
  // Calculate totals
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const cb100Discount = 100
  const volumeDiscount = items.length > 2 ? 1000 : 0
  const total = subtotal - cb100Discount - volumeDiscount

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed top-0 left-0 h-full w-full sm:max-w-md bg-white z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6 text-gray-500" />
              </button>
              <h2 className="text-lg font-medium">قائمة منتجات العربة الخاصة بك</h2>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto" style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-4">لديك ({items.length}) منتج في عربتك</p>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-b-gray-200">
                      <div className="relative w-20 h-20 rounded overflow-hidden bg-gray-50">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <div className="flex gap-2">
                            <button className="text-gray-400 hover:text-[#F15A29]">
                              <Heart className="w-5 h-5" />
                            </button>
                            <button className="text-gray-400 hover:text-red-500">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-[#F15A29] font-medium">{item.price} ريال</span>
                          {item.oldPrice && (
                            <span className="text-sm text-gray-400 line-through">{item.oldPrice} ريال</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">المجموع الفرعي</span>
                  <span>{subtotal} ريال</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">CB 100</span>
                  <span className="text-green-500">- {cb100Discount} ريال</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">خصم المنتجات</span>
                  <span className="text-green-500">- {volumeDiscount} ريال</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t">
                  <span>إجمالي المبلغ</span>
                  <span className="text-[#F15A29]">{total} ريال</span>
                </div>
              </div>

              <div className="space-y-2">
                <button className="w-full py-3 bg-[#1B468F] text-white rounded font-medium hover:bg-[#1B468F]/90 transition-colors">
                  الشراء الآن
                </button>
                <Link
                  href="/store/cart"
                  className="block w-full py-3 border border-[#1B468F] text-[#1B468F] rounded font-medium text-center hover:bg-gray-50 transition-colors"
                >
                  الذهاب الى عربة المنتجات
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

