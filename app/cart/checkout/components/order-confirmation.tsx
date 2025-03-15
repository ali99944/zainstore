import Link from "next/link"
import { CheckCircle, Truck, Calendar, ArrowLeft } from "lucide-react"

interface OrderConfirmationProps {
  orderNumber: string
}

export function OrderConfirmation({ orderNumber }: OrderConfirmationProps) {
  // Calculate estimated delivery date (5 days from now)
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 5)

  // Format date to Arabic
  const formatter = new Intl.DateTimeFormat("ar-SA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const formattedDate = formatter.format(deliveryDate)

  return (
    <div className="bg-white rounded border border-gray-100 overflow-hidden">
      <div className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-[#1B468F] mb-2">تم تأكيد طلبك بنجاح!</h1>
        <p className="text-gray-600 mb-6">شكراً لك على طلبك. سنقوم بمعالجة طلبك في أقرب وقت ممكن.</p>

        <div className="bg-gray-50 p-4 rounded mb-6 inline-block">
          <p className="text-sm text-gray-600 mb-1">رقم الطلب:</p>
          <p className="text-xl font-bold text-[#1B468F]">{orderNumber}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right mb-8">
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-5 h-5 text-[#1B468F]" />
              <h3 className="font-medium">حالة الطلب</h3>
            </div>
            <p className="text-sm text-gray-600">تم استلام الطلب وهو قيد المعالجة الآن</p>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-[#1B468F]" />
              <h3 className="font-medium">موعد التسليم المتوقع</h3>
            </div>
            <p className="text-sm text-gray-600">{formattedDate}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          تم إرسال تفاصيل الطلب إلى بريدك الإلكتروني. يمكنك متابعة حالة طلبك من خلال رقم الطلب.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/store/track-order"
            className="px-6 py-3 bg-[#1B468F] text-white text-center rounded font-medium hover:bg-[#1B468F]/90 transition-colors"
          >
            تتبع الطلب
          </Link>

          <Link
            href="/store"
            className="px-6 py-3 border border-gray-200 text-gray-700 text-center rounded font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>العودة للتسوق</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

