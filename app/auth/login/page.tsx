"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Store, Bell, FileText } from "lucide-react"

export default function LoginPage() {
  const [isVendor, setIsVendor] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row-reverse">
      {/* Promo Banner */}
      <div className="w-full max-h-full md:w-1/2 bg-[#1B468F] text-white p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform -translate-y-3" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-6">الغير خيرين وثلاثة</h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl">تسوق مجموعة من المكانس</p>
            <p className="text-4xl font-bold">خصم يصل إلى 50%</p>
            <p className="text-lg">أسعار تبدأ من 89 ريال</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {["GS", "LG", "Samsung", "Hitachi"].map((brand) => (
              <div key={brand} className="bg-white/10 rounded p-2">
                <Image src={`/placeholder.svg?text=${brand}`} alt={brand} width={80} height={40} className="w-full" />
              </div>
            ))}
          </div>

          <p className="text-sm opacity-75">* العرض ساري حتى نفاذ الكمية</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform translate-y-3" />
            ))}
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isVendor ? "تسجيل دخول البائعين" : "تسجيل الدخول"}
            </h2>
            <p className="text-gray-600">
              {isVendor ? "قم بتسجيل الدخول لإدارة منتجاتك وطلباتك" : "قم بتسجيل الدخول لمتابعة تسوقك"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-[#1B468F] focus:ring-[#1B468F]" />
                <span className="mr-2 text-sm text-gray-600">تذكرني</span>
              </label>
              <Link href="/store/auth/forgot-password" className="text-sm text-[#1B468F] hover:text-[#F15A29]">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B468F] text-white py-3 rounded hover:bg-[#1B468F]/90 transition-colors"
            >
              تسجيل الدخول
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">أو</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50"
              >
                <Image src="/placeholder.svg?text=G" alt="Google" width={20} height={20} />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50"
              >
                <Image src="/placeholder.svg?text=A" alt="Apple" width={20} height={20} />
                Apple
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              ليس لديك حساب؟{" "}
              <Link href="/store/auth/register" className="text-[#1B468F] hover:text-[#F15A29]">
                سجل الآن
              </Link>
            </p>
          </div>

          {/* Vendor Toggle */}
          <div className="pt-6 border-t border-gray-200">
            <button
              onClick={() => setIsVendor(!isVendor)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm text-gray-600">
                {isVendor ? "العودة إلى تسجيل دخول العملاء" : "هل أنت بائع؟ سجل دخولك هنا"}
              </span>
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Benefits */}
          {!isVendor && (
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900">هل انت جديد في معارض تمكين؟ سجل الآن</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Store className="w-5 h-5 text-[#1B468F]" />
                  <span>سهولة في تقييم المنتجات وتتبع الطلبات</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <FileText className="w-5 h-5 text-[#1B468F]" />
                  <span>الوصول إلى قائمة المفضلات وحفظ المنتجات</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Bell className="w-5 h-5 text-[#1B468F]" />
                  <span>الحصول على كل الإشعارات بخصوص طلبك في تمكين</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

