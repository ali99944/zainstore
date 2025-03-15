"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Store, Bell, FileText } from 'lucide-react'

export default function RegisterPage() {
  const [isVendor, setIsVendor] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    acceptTerms: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row-reverse">
      {/* Promo Banner */}
      <div className="w-full md:w-1/2 bg-[#1B468F] text-white p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform -translate-y-3" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-lg text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلى عائلة معارض تمكين</h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl">احصل على خصم 10% على أول طلب</p>
            <p className="text-lg">وتمتع بمزايا حصرية للأعضاء الجدد</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded p-4 text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm">عميل سعيد</div>
            </div>
            <div className="bg-white/10 rounded p-4 text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm">منتج متنوع</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F15A29] flex items-center justify-center text-white">✓</div>
              <span>شحن مجاني للطلبات فوق 200 ريال</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F15A29] flex items-center justify-center text-white">✓</div>
              <span>ضمان استرجاع المنتج خلال 14 يوم</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F15A29] flex items-center justify-center text-white">✓</div>
              <span>دعم فني على مدار الساعة</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform translate-y-3" />
            ))}
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isVendor ? "تسجيل حساب بائع جديد" : "إنشاء حساب جديد"}
            </h2>
            <p className="text-gray-600">
              {isVendor 
                ? "انضم إلينا كبائع واعرض منتجاتك لآلاف العملاء" 
                : "انضم إلى معارض تمكين واستمتع بتجربة تسوق فريدة"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأول</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                  placeholder="محمد"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الأخير</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                  placeholder="العبدالله"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم الجوال</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="05xxxxxxxx"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تأكيد كلمة المرور</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#1B468F] focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptTerms"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="rounded border-gray-300 text-[#1B468F] focus:ring-[#1B468F]"
                required
              />
              <label htmlFor="acceptTerms" className="mr-2 text-sm text-gray-600">
                أوافق على{" "}
                <Link href="/store/policy" className="text-[#1B468F] hover:text-[#F15A29]">
                  الشروط والأحكام
                </Link>{" "}
                و{" "}
                <Link href="/store/policy" className="text-[#1B468F] hover:text-[#F15A29]">
                  سياسة الخصوصية
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B468F] text-white py-3 rounded hover:bg-[#1B468F]/90 transition-colors"
            >
              إنشاء حساب
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
              لديك حساب بالفعل؟{" "}
              <Link href="/store/auth/login" className="text-[#1B468F] hover:text-[#F15A29]">
                تسجيل الدخول
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
                {isVendor ? "العودة إلى تسجيل حساب العملاء" : "هل أنت بائع؟ سجل كبائع هنا"}
              </span>
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          {/* Benefits */}
          {!isVendor && (
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-900">مزايا التسجيل في معارض تمكين</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Store className="w-5 h-5 text-[#1B468F]" />
                  <span>تتبع طلباتك وحالتها بسهولة</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <FileText className="w-5 h-5 text-[#1B468F]" />
                  <span>حفظ المنتجات المفضلة لديك</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Bell className="w-5 h-5 text-[#1B468F]" />
                  <span>الحصول على إشعارات بالعروض والخصومات</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
