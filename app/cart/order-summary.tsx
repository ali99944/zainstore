"use client"

import { useState } from "react"
import Link from "next/link"
import { Truck, CreditCard } from "lucide-react"

interface OrderSummaryProps {
  subtotal: number
  cb100Discount: number
  volumeDiscount: number
  total: number
}

export function OrderSummary({ subtotal, cb100Discount, volumeDiscount, total }: OrderSummaryProps) {
  const [couponCode, setCouponCode] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "installment">("cash")

  return (
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

        {/* Payment Method */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">طريقة الدفع</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="text-[#F15A29] focus:ring-[#F15A29]"
              />
              <span className="text-sm">الدفع عند الاستلام</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="text-[#F15A29] focus:ring-[#F15A29]"
              />
              <span className="text-sm">بطاقة ائتمان</span>
              <CreditCard className="w-4 h-4 text-gray-400" />
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "installment"}
                onChange={() => setPaymentMethod("installment")}
                className="text-[#F15A29] focus:ring-[#F15A29]"
              />
              <span className="text-sm">تقسيط بدون فوائد</span>
            </label>
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
  )
}

