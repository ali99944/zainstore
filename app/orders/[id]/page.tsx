"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Truck, CheckCircle, Clock, Download, MessageCircle, MapPin, CreditCard } from 'lucide-react'
import { useParams } from "next/navigation"

export default function OrderDetailsPage() {
  const [activeTab, setActiveTab] = useState("details")
 
  const {id} = useParams()
  // Mock order data
  const order = {
    id: +(id ?? 1),
    orderNumber: "ZS-" + (id as string ?? '').padStart(6, "0"),
    date: "15 مارس 2025",
    status: "قيد التوصيل",
    statusCode: "shipping",
    paymentMethod: "بطاقة ائتمان",
    paymentStatus: "تم الدفع",
    shippingMethod: "توصيل سريع",
    trackingNumber: "TRK123456789SA",
    estimatedDelivery: "18 مارس 2025",
    subtotal: 1250.00,
    shipping: 30.00,
    tax: 191.25,
    discount: 100.00,
    total: 1371.25,
    items: [
      {
        id: "1",
        name: "سماعة سوني لاسلكية WH-1000XM4",
        image: "/placeholder.svg?height=80&width=80",
        price: 750.00,
        quantity: 1,
        options: "اللون: أسود"
      },
      {
        id: "2",
        name: "ساعة ذكية سامسونج جالاكسي ووتش 6",
        image: "/placeholder.svg?height=80&width=80",
        price: 500.00,
        quantity: 1,
        options: "اللون: فضي، المقاس: 44مم"
      }
    ],
    address: {
      name: "محمد أحمد",
      street: "شارع الملك فهد",
      city: "الرياض",
      state: "منطقة الرياض",
      zip: "12345",
      country: "المملكة العربية السعودية",
      phone: "+966 50 123 4567"
    },
    timeline: [
      { status: "تم استلام الطلب", date: "15 مارس 2025", time: "09:30 ص", completed: true },
      { status: "تمت الموافقة على الطلب", date: "15 مارس 2025", time: "10:15 ص", completed: true },
      { status: "جاري تجهيز الطلب", date: "15 مارس 2025", time: "02:45 م", completed: true },
      { status: "تم شحن الطلب", date: "16 مارس 2025", time: "11:20 ص", completed: true },
      { status: "قيد التوصيل", date: "17 مارس 2025", time: "08:30 ص", completed: true },
      { status: "تم التسليم", date: "18 مارس 2025", time: "متوقع", completed: false }
    ]
  }

  // Status color mapping
  const getStatusColor = (statusCode: string) => {
    const statusMap: Record<string, string> = {
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      shipping: "bg-purple-100 text-purple-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800"
    }
    return statusMap[statusCode] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link href="/store/orders" className="flex items-center text-[#1B468F] hover:text-[#F15A29]">
              <ChevronRight className="h-5 w-5" />
              <span className="mr-1">العودة إلى الطلبات</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 mr-auto">تفاصيل الطلب #{order.orderNumber}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary and Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Card */}
            <div className="bg-white rounded-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">حالة الطلب</h2>
                    <p className="text-gray-500 text-sm">تم الطلب في {order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-sm text-sm font-medium ${getStatusColor(order.statusCode)}`}>
                    {order.status}
                  </span>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="absolute top-0 right-4 h-full w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {order.timeline.map((event, index) => (
                      <div key={index} className="relative flex">
                        <div className="absolute right-0 mt-1">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            event.completed 
                              ? 'bg-[#1B468F] text-white' 
                              : 'bg-gray-200 text-gray-400'
                          }`}>
                            {event.completed ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <Clock className="h-5 w-5" />
                            )}
                          </div>
                        </div>
                        <div className="mr-12">
                          <h3 className="text-base font-medium text-gray-900">{event.status}</h3>
                          <p className="text-sm text-gray-500">
                            {event.date} • {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tracking Info */}
              <div className="border-t border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-[#1B468F]" />
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">رقم التتبع</p>
                      <p className="text-sm text-gray-500">{order.trackingNumber}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/store/track-order?tracking=${order.trackingNumber}`}
                    className="px-4 py-2 bg-[#1B468F] text-white text-sm rounded-sm hover:bg-[#1B468F]/90"
                  >
                    تتبع الشحنة
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Details Tabs */}
            <div className="bg-white rounded-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab("details")}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === "details"
                        ? "border-b-2 border-[#1B468F] text-[#1B468F]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    تفاصيل الطلب
                  </button>
                  <button
                    onClick={() => setActiveTab("shipping")}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === "shipping"
                        ? "border-b-2 border-[#1B468F] text-[#1B468F]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    معلومات الشحن
                  </button>
                  <button
                    onClick={() => setActiveTab("invoice")}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === "invoice"
                        ? "border-b-2 border-[#1B468F] text-[#1B468F]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    الفاتورة
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "details" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">المنتجات</h3>
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center border-b border-gray-100 pb-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="mr-4 flex-1">
                            <h4 className="text-base font-medium text-gray-900">{item.name}</h4>
                            <p className="mt-1 text-sm text-gray-500">{item.options}</p>
                            <div className="mt-1 flex text-sm">
                              <p className="text-gray-500">الكمية: {item.quantity}</p>
                            </div>
                          </div>
                          <p className="text-base font-medium text-gray-900">{item.price.toFixed(2)} ر.س</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "shipping" && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">معلومات الشحن</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-sm">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-[#1B468F] mt-0.5" />
                          <div className="mr-3">
                            <h4 className="text-sm font-medium text-gray-900">عنوان الشحن</h4>
                            <p className="mt-2 text-sm text-gray-600">
                              {order.address.name}<br />
                              {order.address.street}<br />
                              {order.address.city}, {order.address.state} {order.address.zip}<br />
                              {order.address.country}<br />
                              {order.address.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-sm">
                        <div className="flex items-start">
                          <Truck className="h-5 w-5 text-[#1B468F] mt-0.5" />
                          <div className="mr-3">
                            <h4 className="text-sm font-medium text-gray-900">طريقة الشحن</h4>
                            <p className="mt-2 text-sm text-gray-600">
                              {order.shippingMethod}<br />
                              التوصيل المتوقع: {order.estimatedDelivery}<br />
                              رقم التتبع: {order.trackingNumber}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "invoice" && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-gray-900">الفاتورة</h3>
                      <button className="flex items-center text-[#1B468F] hover:text-[#F15A29] text-sm">
                        <Download className="h-4 w-4 ml-1" />
                        تحميل الفاتورة
                      </button>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-sm mb-4">
                      <div className="flex items-start">
                        <CreditCard className="h-5 w-5 text-[#1B468F] mt-0.5" />
                        <div className="mr-3">
                          <h4 className="text-sm font-medium text-gray-900">طريقة الدفع</h4>
                          <p className="mt-1 text-sm text-gray-600">
                            {order.paymentMethod}<br />
                            حالة الدفع: {order.paymentStatus}
                          </p>
                        </div>
                      </div>
                    </div>

                    <table className="w-full text-sm text-right">
                      <tbody>
                        <tr>
                          <td className="py-2 text-gray-600">المجموع الفرعي</td>
                          <td className="py-2 text-gray-900 font-medium">{order.subtotal.toFixed(2)} ر.س</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">الشحن</td>
                          <td className="py-2 text-gray-900 font-medium">{order.shipping.toFixed(2)} ر.س</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">الضريبة (15%)</td>
                          <td className="py-2 text-gray-900 font-medium">{order.tax.toFixed(2)} ر.س</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">الخصم</td>
                          <td className="py-2 text-gray-900 font-medium">-{order.discount.toFixed(2)} ر.س</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="py-3 text-base font-bold text-gray-900">المجموع</td>
                          <td className="py-3 text-base font-bold text-gray-900">{order.total.toFixed(2)} ر.س</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">ملخص الطلب</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">رقم الطلب:</span>
                  <span className="font-medium text-gray-900">{order.orderNumber}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">تاريخ الطلب:</span>
                  <span className="font-medium text-gray-900">{order.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">حالة الطلب:</span>
                  <span className={`font-medium ${
                    order.statusCode === 'delivered' ? 'text-green-600' : 
                    order.statusCode === 'cancelled' ? 'text-red-600' : 'text-[#1B468F]'
                  }`}>{order.status}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">طريقة الدفع:</span>
                  <span className="font-medium text-gray-900">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">المجموع:</span>
                  <span className="font-medium text-gray-900">{order.total.toFixed(2)} ر.س</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">إجراءات سريعة</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-[#1B468F] text-white text-sm rounded-sm hover:bg-[#1B468F]/90">
                  إعادة الطلب
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-sm hover:bg-gray-50">
                  طلب إرجاع
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-sm hover:bg-gray-50">
                  <MessageCircle className="h-4 w-4 ml-2" />
                  تواصل مع الدعم
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">هل تحتاج إلى مساعدة؟</h3>
              <p className="text-sm text-gray-600 mb-4">
                إذا كان لديك أي استفسار حول طلبك، يرجى الاتصال بفريق خدمة العملاء لدينا.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="text-gray-600 ml-2">البريد الإلكتروني:</span>
                  <a href="mailto:support@zainstore.com" className="font-medium text-[#1B468F] hover:text-[#F15A29]">
                    support@zainstore.com
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-gray-600 ml-2">الهاتف:</span>
                  <a href="tel:+966501234567" className="font-medium text-[#1B468F] hover:text-[#F15A29]">
                    +966 50 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
