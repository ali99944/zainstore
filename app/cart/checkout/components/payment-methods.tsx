"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { CreditCard, Banknote, Calendar, CreditCardIcon } from "lucide-react"

interface PaymentMethodsProps {
  onSubmit: (method: "cash" | "card" | "installment" | "bank") => void
  selectedMethod: "cash" | "card" | "installment" | "bank"
}

export function PaymentMethods({ onSubmit, selectedMethod }: PaymentMethodsProps) {
  const [method, setMethod] = useState<"cash" | "card" | "installment" | "bank">(selectedMethod)
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(method)
  }

  return (
    <div className="bg-white rounded border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-xl font-bold text-[#1B468F]">طريقة الدفع</h1>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <div className="space-y-3">
          {/* Cash on Delivery */}
          <label className="flex items-start p-3 border border-gray-200 rounded cursor-pointer hover:border-[#1B468F] transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              checked={method === "cash"}
              onChange={() => setMethod("cash")}
              className="mt-1 text-[#F15A29] focus:ring-[#F15A29]"
            />
            <div className="mr-3 flex-1">
              <div className="flex items-center">
                <Banknote className="w-5 h-5 text-[#1B468F] ml-2" />
                <span className="font-medium">الدفع عند الاستلام</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">ادفع نقداً عند استلام طلبك مباشرة</p>
            </div>
          </label>

          {/* Credit Card */}
          <div
            className={`border rounded transition-colors ${method === "card" ? "border-[#1B468F]" : "border-gray-200"}`}
          >
            <label className="flex items-start p-3 cursor-pointer hover:border-[#1B468F]">
              <input
                type="radio"
                name="paymentMethod"
                checked={method === "card"}
                onChange={() => setMethod("card")}
                className="mt-1 text-[#F15A29] focus:ring-[#F15A29]"
              />
              <div className="mr-3 flex-1">
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-[#1B468F] ml-2" />
                  <span className="font-medium">بطاقة ائتمان</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">ادفع باستخدام بطاقة فيزا أو ماستركارد أو مدى</p>
                <div className="flex gap-2 mt-2">
                  <Image
                    src="/placeholder.svg?height=24&width=36"
                    alt="Visa"
                    width={36}
                    height={24}
                    className="rounded"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=36"
                    alt="Mastercard"
                    width={36}
                    height={24}
                    className="rounded"
                  />
                  <Image
                    src="/placeholder.svg?height=24&width=36"
                    alt="Mada"
                    width={36}
                    height={24}
                    className="rounded"
                  />
                </div>
              </div>
            </label>

            {method === "card" && (
              <div className="p-3 pt-0 border-t border-gray-100 mt-3">
                <div className="space-y-3">
                  {/* Card Number */}
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم البطاقة
                    </label>
                    <div className="relative">
                      <input
                        id="cardNumber"
                        type="text"
                        className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]"
                        placeholder="0000 0000 0000 0000"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      />
                      <CreditCardIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Holder */}
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      اسم حامل البطاقة
                    </label>
                    <input
                      id="cardName"
                      type="text"
                      className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]"
                      placeholder="الاسم كما يظهر على البطاقة"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* Expiry Date */}
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                        تاريخ الانتهاء
                      </label>
                      <div className="relative">
                        <input
                          id="cardExpiry"
                          type="text"
                          className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>

                    {/* CVV */}
                    <div>
                      <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-1">
                        رمز الأمان (CVV)
                      </label>
                      <input
                        id="cardCvv"
                        type="text"
                        className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Installment */}
          <label className="flex items-start p-3 border border-gray-200 rounded cursor-pointer hover:border-[#1B468F] transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              checked={method === "installment"}
              onChange={() => setMethod("installment")}
              className="mt-1 text-[#F15A29] focus:ring-[#F15A29]"
            />
            <div className="mr-3 flex-1">
              <div className="flex items-center">
                <Image src="/placeholder.svg?height=20&width=60" alt="Tabby" width={60} height={20} className="ml-2" />
                <span className="font-medium">تقسيط بدون فوائد</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">قسط مشترياتك على 4 دفعات بدون فوائد أو رسوم</p>
            </div>
          </label>

          {/* Bank Transfer */}
          <label className="flex items-start p-3 border border-gray-200 rounded cursor-pointer hover:border-[#1B468F] transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              checked={method === "bank"}
              onChange={() => setMethod("bank")}
              className="mt-1 text-[#F15A29] focus:ring-[#F15A29]"
            />
            <div className="mr-3 flex-1">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-[#1B468F] ml-2" />
                <span className="font-medium">تحويل بنكي</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">قم بالتحويل البنكي إلى حسابنا وأرسل لنا صورة الإيصال</p>
              {method === "bank" && (
                <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                  <p className="font-medium mb-1">تفاصيل الحساب البنكي:</p>
                  <p>اسم البنك: البنك الأهلي السعودي</p>
                  <p>اسم الحساب: شركة زين للأجهزة المنزلية</p>
                  <p>رقم الحساب: SA0380000000608010167519</p>
                  <p className="mt-2 text-xs text-gray-500">
                    بعد إتمام التحويل، يرجى إرسال صورة الإيصال على رقم الواتساب: 0512345678
                  </p>
                </div>
              )}
            </div>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#1B468F] text-white text-center rounded font-medium hover:bg-[#1B468F]/90 transition-colors"
        >
          متابعة
        </button>
      </form>
    </div>
  )
}

