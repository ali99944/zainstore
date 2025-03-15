"use client"
import { useForm } from "react-hook-form"

interface CheckoutFormProps {
  onSubmit: (data: FormData) => void
  initialData: FormData
}

interface FormData {
  fullName: string
  phone: string
  email: string
  city: string
  address: string
  notes: string
}

export function CheckoutForm({ onSubmit, initialData }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialData,
  })

  const cities = [
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الخبر",
    "تبوك",
    "أبها",
    "القصيم",
    "حائل",
    "نجران",
    "جازان",
    "الطائف",
    "ينبع",
    "الجبيل",
    "الأحساء",
    "الخرج",
  ]

  return (
    <div className="bg-white rounded border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h1 className="text-xl font-bold text-[#1B468F]">معلومات الشحن</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              className={`w-full border ${errors.fullName ? "border-red-500" : "border-gray-200"} rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]`}
              placeholder="أدخل الاسم الكامل"
              {...register("fullName", { required: "الاسم الكامل مطلوب" })}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-200"} rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]`}
              placeholder="05xxxxxxxx"
              {...register("phone", {
                required: "رقم الهاتف مطلوب",
                pattern: {
                  value: /^(05)[0-9]{8}$/,
                  message: "يرجى إدخال رقم هاتف سعودي صحيح",
                },
              })}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              البريد الإلكتروني <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-200"} rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]`}
              placeholder="example@email.com"
              {...register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "يرجى إدخال بريد إلكتروني صحيح",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              المدينة <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              className={`w-full border ${errors.city ? "border-red-500" : "border-gray-200"} rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]`}
              {...register("city", { required: "المدينة مطلوبة" })}
            >
              <option value="">اختر المدينة</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            العنوان التفصيلي <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            rows={3}
            className={`w-full border ${errors.address ? "border-red-500" : "border-gray-200"} rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]`}
            placeholder="الحي، الشارع، رقم المبنى، رقم الشقة"
            {...register("address", { required: "العنوان التفصيلي مطلوب" })}
          ></textarea>
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            ملاحظات إضافية
          </label>
          <textarea
            id="notes"
            rows={2}
            className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:border-[#1B468F]"
            placeholder="أي ملاحظات إضافية حول الطلب أو التوصيل"
            {...register("notes")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#1B468F] text-white text-center rounded font-medium hover:bg-[#1B468F]/90 transition-colors"
        >
          متابعة للدفع
        </button>
      </form>
    </div>
  )
}

