"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  ShoppingBag,
  AlertCircle,
  Headphones,
} from "lucide-react"

// Mock order statuses
const ORDER_STATUSES = {
  PROCESSING: "processing",
  SHIPPED: "shipped",
  OUT_FOR_DELIVERY: "out_for_delivery",
  DELIVERED: "delivered",
}

// Mock order data
const mockOrders = [
  {
    id: "ORD-12345678",
    date: "2023-03-10",
    status: ORDER_STATUSES.DELIVERED,
    items: [
      {
        id: 1,
        name: "مكيف سبليت سامسونج 18000 وحدة",
        image: "/placeholder.svg?height=80&width=80",
        price: 2499,
        quantity: 1,
      },
      {
        id: 2,
        name: "فلتر مكيف سبليت - قطعة غيار أصلية",
        image: "/placeholder.svg?height=80&width=80",
        price: 149,
        quantity: 2,
      },
    ],
    total: 2797,
    shipping: {
      address: "حي النزهة، شارع الأمير سلطان، الرياض",
      carrier: "شركة زاجل للشحن",
      trackingNumber: "ZGL9876543210",
      estimatedDelivery: "2023-03-15",
    },
    timeline: [
      { status: "تم استلام الطلب", date: "10 مارس 2023", time: "09:15 ص", completed: true },
      { status: "جاري تجهيز الطلب", date: "11 مارس 2023", time: "10:30 ص", completed: true },
      { status: "تم شحن الطلب", date: "12 مارس 2023", time: "02:45 م", completed: true },
      { status: "الطلب في الطريق إليك", date: "14 مارس 2023", time: "11:20 ص", completed: true },
      { status: "تم التوصيل", date: "15 مارس 2023", time: "04:30 م", completed: true },
    ],
  },
  {
    id: "ORD-87654321",
    date: "2023-03-12",
    status: ORDER_STATUSES.OUT_FOR_DELIVERY,
    items: [
      {
        id: 3,
        name: "غسالة أوتوماتيك إل جي 7 كيلو",
        image: "/placeholder.svg?height=80&width=80",
        price: 1899,
        quantity: 1,
      },
    ],
    total: 1899,
    shipping: {
      address: "حي العليا، طريق الملك فهد، الرياض",
      carrier: "شركة أرامكس",
      trackingNumber: "ARX1234567890",
      estimatedDelivery: "2023-03-18",
    },
    timeline: [
      { status: "تم استلام الطلب", date: "12 مارس 2023", time: "11:30 ص", completed: true },
      { status: "جاري تجهيز الطلب", date: "13 مارس 2023", time: "09:45 ص", completed: true },
      { status: "تم شحن الطلب", date: "14 مارس 2023", time: "03:15 م", completed: true },
      { status: "الطلب في الطريق إليك", date: "15 مارس 2023", time: "10:00 ص", completed: true },
      { status: "تم التوصيل", date: "18 مارس 2023", time: "مقدر", completed: false },
    ],
  },
]

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [foundOrder, setFoundOrder] = useState<(typeof mockOrders)[0] | null>(null)
  const [activeTab, setActiveTab] = useState("tracking")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate order search
    if (orderNumber) {
      const order = mockOrders.find((order) => order.id === orderNumber)
      setFoundOrder(order || null)
      setSearchPerformed(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with pattern */}
      <div className="bg-[#1B468F] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <div className="flex gap-2 overflow-hidden py-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-6 h-6 rotate-45 bg-[#F15A29] opacity-10 transform -translate-y-3" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">تتبع طلبك</h1>
            <p className="text-lg opacity-90 mb-8">يمكنك متابعة حالة طلبك ومعرفة موقعه في أي وقت</p>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1B468F] font-medium mb-2 text-right">رقم الطلب</label>
                    <input
                      type="text"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="مثال: ORD-12345678"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:border-[#1B468F] focus:ring-1 focus:ring-[#1B468F] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#1B468F] font-medium mb-2 text-right">
                      البريد الإلكتروني (اختياري)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="البريد الإلكتروني المستخدم في الطلب"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-800 focus:border-[#1B468F] focus:ring-1 focus:ring-[#1B468F] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B468F] hover:bg-[#1B468F]/90 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Search className="w-5 h-5" />
                  <span>تتبع الطلب</span>
                </button>
              </form>
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

      {/* Order Results */}
      {searchPerformed && (
        <div className="container mx-auto px-4 py-12">
          {foundOrder ? (
            <div className="max-w-4xl mx-auto">
              {/* Order Header */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{foundOrder.id}</h2>
                    <p className="text-gray-600">تاريخ الطلب: {foundOrder.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        foundOrder.status === ORDER_STATUSES.DELIVERED
                          ? "bg-green-100 text-green-800"
                          : foundOrder.status === ORDER_STATUSES.OUT_FOR_DELIVERY
                            ? "bg-blue-100 text-blue-800"
                            : foundOrder.status === ORDER_STATUSES.SHIPPED
                              ? "bg-purple-100 text-purple-800"
                              : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {foundOrder.status === ORDER_STATUSES.DELIVERED
                        ? "تم التوصيل"
                        : foundOrder.status === ORDER_STATUSES.OUT_FOR_DELIVERY
                          ? "في ال��ريق إليك"
                          : foundOrder.status === ORDER_STATUSES.SHIPPED
                            ? "تم الشحن"
                            : "قيد المعالجة"}
                    </span>
                    <Link
                      href={`/store/orders/${foundOrder.id}`}
                      className="text-[#1B468F] hover:text-[#F15A29] flex items-center gap-1 text-sm font-medium"
                    >
                      <span>تفاصيل الطلب</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="flex border-b">
                  <button
                    onClick={() => setActiveTab("tracking")}
                    className={`flex-1 py-4 px-6 text-center font-medium ${
                      activeTab === "tracking"
                        ? "text-[#1B468F] border-b-2 border-[#1B468F]"
                        : "text-gray-600 hover:text-[#1B468F]"
                    }`}
                  >
                    تتبع الشحنة
                  </button>
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`flex-1 py-4 px-6 text-center font-medium ${
                      activeTab === "details"
                        ? "text-[#1B468F] border-b-2 border-[#1B468F]"
                        : "text-gray-600 hover:text-[#1B468F]"
                    }`}
                  >
                    تفاصيل الطلب
                  </button>
                </div>

                {/* Tracking Tab */}
                {activeTab === "tracking" && (
                  <div className="p-6">
                    {/* Shipping Info */}
                    <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">عنوان التوصيل</h3>
                          <p className="text-gray-800 flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-[#1B468F] flex-shrink-0 mt-0.5" />
                            <span>{foundOrder.shipping.address}</span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">شركة الشحن</h3>
                          <p className="text-gray-800">{foundOrder.shipping.carrier}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-1">رقم التتبع</h3>
                          <p className="text-[#1B468F] font-medium">{foundOrder.shipping.trackingNumber}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      {foundOrder.timeline.map((event, index) => (
                        <div key={index} className="flex mb-8 last:mb-0">
                          {/* Status Icon */}
                          <div className="relative flex flex-col items-center ml-6">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                                event.completed ? "bg-[#1B468F] text-white" : "bg-gray-200 text-gray-400"
                              }`}
                            >
                              {index === 0 ? (
                                <Package className="w-5 h-5" />
                              ) : index === foundOrder.timeline.length - 1 ? (
                                <CheckCircle className="w-5 h-5" />
                              ) : index === foundOrder.timeline.length - 2 ? (
                                <Truck className="w-5 h-5" />
                              ) : (
                                <Clock className="w-5 h-5" />
                              )}
                            </div>
                            {/* Connecting Line */}
                            {index < foundOrder.timeline.length - 1 && (
                              <div
                                className={`absolute top-10 w-0.5 h-full ${
                                  event.completed && foundOrder.timeline[index + 1].completed
                                    ? "bg-[#1B468F]"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}
                          </div>

                          {/* Status Details */}
                          <div className="flex-1">
                            <h3 className={`font-bold ${event.completed ? "text-gray-800" : "text-gray-500"}`}>
                              {event.status}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Estimated Delivery */}
                    {foundOrder.status !== ORDER_STATUSES.DELIVERED && (
                      <div className="mt-8 p-4 border border-dashed border-[#1B468F] rounded-lg bg-blue-50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[#1B468F]/10 flex items-center justify-center">
                            <Truck className="w-6 h-6 text-[#1B468F]" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">موعد التوصيل المتوقع</h3>
                            <p className="text-[#1B468F] font-bold">{foundOrder.shipping.estimatedDelivery}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Details Tab */}
                {activeTab === "details" && (
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-4">منتجات الطلب</h3>

                    {/* Order Items */}
                    <div className="space-y-4 mb-6">
                      {foundOrder.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg">
                          <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{item.name}</h4>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-gray-600">الكمية: {item.quantity}</span>
                              <span className="font-bold text-[#1B468F]">{item.price} ر.س</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-4">ملخص الطلب</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">المجموع الفرعي</span>
                          <span>{foundOrder.total - 50} ر.س</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">الشحن</span>
                          <span>50 ر.س</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                          <span className="font-bold">المجموع</span>
                          <span className="font-bold text-[#1B468F]">{foundOrder.total} ر.س</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">هل تحتاج إلى مساعدة؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/store/contact"
                    className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#1B468F] hover:bg-blue-50 transition-colors"
                  >
                    <Headphones className="w-5 h-5 text-[#1B468F]" />
                    <span>اتصل بخدمة العملاء</span>
                  </Link>
                  <Link
                    href="/store/faq"
                    className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#1B468F] hover:bg-blue-50 transition-colors"
                  >
                    <AlertCircle className="w-5 h-5 text-[#1B468F]" />
                    <span>الأسئلة الشائعة</span>
                  </Link>
                  <Link
                    href="/store"
                    className="flex items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#F15A29] hover:bg-orange-50 transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5 text-[#F15A29]" />
                    <span>متابعة التسوق</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">لم يتم العثور على الطلب</h2>
              <p className="text-gray-600 mb-6">
                لم نتمكن من العثور على طلب برقم {orderNumber}. يرجى التأكد من رقم الطلب والمحاولة مرة أخرى.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSearchPerformed(false)
                    setOrderNumber("")
                    setEmail("")
                  }}
                  className="bg-[#1B468F] hover:bg-[#1B468F]/90 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>العودة للبحث</span>
                </button>
                <Link
                  href="/store/contact"
                  className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Headphones className="w-5 h-5" />
                  <span>اتصل بنا للمساعدة</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Help Section */}
      {!searchPerformed && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">كيف يمكنني تتبع طلبي؟</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1B468F]">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">أدخل رقم الطلب</h3>
                <p className="text-gray-600">أدخل رقم الطلب الذي تلقيته في بريدك الإلكتروني أو رسالة نصية</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1B468F]">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">أدخل البريد الإلكتروني</h3>
                <p className="text-gray-600">أدخل البريد الإلكتروني الذي استخدمته عند إتمام الطلب (اختياري)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#1B468F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1B468F]">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">تتبع حالة طلبك</h3>
                <p className="text-gray-600">اطلع على حالة طلبك وموقعه الحالي وموعد التوصيل المتوقع</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">الأسئلة الشائعة</h2>

              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-[#1B468F] mb-2">أين يمكنني العثور على رقم طلبي؟</h3>
                  <p className="text-gray-600">
                    يمكنك العثور على رقم طلبك في رسالة تأكيد الطلب التي تم إرسالها إلى بريدك الإلكتروني، أو في حسابك على
                    موقع زين ستور في قسم &quot;طلباتي&quot;.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-[#1B468F] mb-2">كم من الوقت يستغرق توصيل طلبي؟</h3>
                  <p className="text-gray-600">
                    تختلف مدة التوصيل حسب موقعك وتوفر المنتج. عادةً ما يتم التوصيل خلال 2-5 أيام عمل داخل المدن الرئيسية،
                    و5-10 أيام للمناطق النائية.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-[#1B468F] mb-2">ماذا أفعل إذا تأخر طلبي؟</h3>
                  <p className="text-gray-600">
                    إذا تجاوز طلبك تاريخ التوصيل المتوقع، يرجى الاتصال بخدمة العملاء على الرقم 800 123 4567 أو مراسلتنا
                    عبر البريد الإلكتروني support@zainstore.com.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#1B468F] mb-2">هل يمكنني تغيير عنوان التوصيل بعد تقديم الطلب؟</h3>
                  <p className="text-gray-600">
                    يمكن تغيير عنوان التوصيل فقط إذا لم يتم شحن الطلب بعد. يرجى الاتصال بخدمة العملاء في أقرب وقت ممكن
                    لطلب تغيير العنوان.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/store/faq"
                  className="text-[#1B468F] hover:text-[#F15A29] font-medium inline-flex items-center gap-1"
                >
                  <span>عرض المزيد من الأسئلة الشائعة</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-[#1B468F] to-[#1B468F]/90 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h2>
            <p className="text-lg opacity-90 mb-6">فريق خدمة العملاء متاح للمساعدة على مدار الساعة</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/store/contact"
                className="bg-white text-[#1B468F] hover:bg-[#F15A29] hover:text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل بنا</span>
              </Link>
              <Link
                href="/store/faq"
                className="bg-[#F15A29] text-white hover:bg-white hover:text-[#1B468F] py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>أرسل استفسارك</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

