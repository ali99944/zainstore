"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Trash2, Plus, Minus, ArrowLeft, Truck } from "lucide-react"

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "جنرال سوبريم غسالة صحون 5 برامج 12 مكان 2 رف تجفيف، نصف تحميل، أبيض GSDW1225WT",
    price: 1199,
    oldPrice: 1499,
    quantity: 1,
    image: "https://img.freepik.com/free-vector/realistic-dishwasher-with-open-door_107791-1526.jpg",
  },
  {
    id: 2,
    name: "فيري أقراص 1 سلة كبيرة لغسالة الأطباق الأوتوماتيكية برائحة الليمون 3 كبسولة",
    price: 0,
    oldPrice: 35,
    quantity: 1,
    image: "https://img.freepik.com/free-vector/realistic-dishwasher-detergent-package_107791-1514.jpg",
  },
]

// Sample recommended products
const recommendedProducts = [
  {
    id: 3,
    name: "مكيف سبليت انفرتر جنرال سوبريم 18000 وحدة",
    price: 2499,
    oldPrice: 2899,
    image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
  },
  {
    id: 4,
    name: "غسالة ملابس أوتوماتيك 7 كيلو",
    price: 1899,
    oldPrice: 2199,
    image: "https://img.freepik.com/free-vector/realistic-washing-machine-with-open-door_107791-1525.jpg",
  },
  {
    id: 5,
    name: "ثلاجة جنرال سوبريم بابين 450 لتر",
    price: 3299,
    oldPrice: 3599,
    image: "https://img.freepik.com/free-vector/realistic-refrigerator-with-closed-door_107791-1517.jpg",
  },
  {
    id: 6,
    name: "فرن كهربائي 60 لتر",
    price: 1299,
    oldPrice: null,
    image: "https://img.freepik.com/free-vector/realistic-oven-illustration_23-2149128081.jpg",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const cb100Discount = 100
  const volumeDiscount = cartItems.length > 1 ? 1000 : 0
  const total = subtotal - cb100Discount - volumeDiscount

  // Handle quantity change
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Handle item removal
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Handle move to wishlist
  const moveToWishlist = (id: number) => {
    // In a real app, this would add to wishlist and then remove from cart
    removeItem(id)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h1 className="text-xl font-bold text-[#1B468F]">سلة التسوق</h1>
                <p className="text-sm text-gray-500 mt-1">لديك ({cartItems.length}) منتج في عربة التسوق</p>
              </div>

              {cartItems.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-24 h-24 rounded overflow-hidden bg-gray-50 flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between gap-2">
                          <h3 className="text-sm font-medium">{item.name}</h3>
                          <div className="flex gap-2 sm:flex-shrink-0">
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="text-gray-400 hover:text-[#F15A29] transition-colors"
                            >
                              <Heart className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[#F15A29] font-medium">{item.price} ريال</span>
                            {item.oldPrice && (
                              <span className="text-sm text-gray-400 line-through">{item.oldPrice} ريال</span>
                            )}
                          </div>

                          <div className="flex items-center border border-gray-200 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1B468F]"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-10 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1B468F]"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500 mb-4">سلة التسوق فارغة</p>
                  <Link
                    href="/store"
                    className="inline-flex items-center gap-2 text-[#1B468F] hover:text-[#F15A29] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>العودة للتسوق</span>
                  </Link>
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="p-4 bg-gray-50 flex justify-between items-center">
                  <Link
                    href="/store"
                    className="inline-flex items-center gap-2 text-[#1B468F] hover:text-[#F15A29] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>متابعة التسوق</span>
                  </Link>

                  <button
                    onClick={() => setCartItems([])}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                  >
                    إفراغ السلة
                  </button>
                </div>
              )}
            </div>

            {/* Frequently Bought Together */}
            {cartItems.length > 0 && (
              <div className="mt-6 bg-white rounded border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-[#1B468F]">عادة ما يتم شراء تلك المنتجات معا</h2>
                </div>

                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {recommendedProducts.map((product) => (
                    <Link key={product.id} href={`/store/product/${product.id}`} className="group">
                      <div className="relative h-40 rounded overflow-hidden bg-gray-50 mb-2">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-medium line-clamp-2 group-hover:text-[#F15A29] transition-colors">
                        {product.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[#F15A29] font-medium">{product.price} ريال</span>
                        {product.oldPrice && (
                          <span className="text-xs text-gray-400 line-through">{product.oldPrice} ريال</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded border border-gray-100 overflow-hidden sticky top-24">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-[#1B468F]">ملخص الطلب</h2>
                </div>

                <div className="p-4 space-y-4">
                  {/* Coupon Code */}
                  <div>
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                      كود الخصم
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-r-none rounded-l p-2 text-sm focus:outline-none focus:border-[#1B468F]"
                        placeholder="أدخل كود الخصم"
                      />
                      <button className="bg-[#1B468F] text-white px-4 py-2 rounded-l rounded-r-none text-sm hover:bg-[#1B468F]/90 transition-colors">
                        تطبيق
                      </button>
                    </div>
                  </div>


                  {/* Order Summary */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
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
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">الشحن</span>
                      <span className="text-green-500">مجاني</span>
                    </div>
                    <div className="flex justify-between font-medium pt-2 border-t border-gray-100">
                      <span>إجمالي المبلغ</span>
                      <span className="text-[#F15A29]">{total} ريال</span>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
                    <Truck className="w-4 h-4 text-[#1B468F]" />
                    <span>توصيل مجاني لجميع مناطق المملكة</span>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/store/checkout"
                    className="block w-full py-3 bg-[#1B468F] text-white text-center rounded font-medium hover:bg-[#1B468F]/90 transition-colors"
                  >
                    إتمام الطلب
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

