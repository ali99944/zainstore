"use client"

import { useState } from "react"
import { CheckoutForm } from "./components/checkout-form"
import { OrderConfirmation } from "./components/order-confirmation"
import { PaymentMethods } from "./components/payment-methods"
import { OrderSummary } from "./components/order-summary"
// Sample cart items
const cartItems = [
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

// Calculate totals
const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
const cb100Discount = 100
const volumeDiscount = cartItems.length > 1 ? 1000 : 0
const total = subtotal - cb100Discount - volumeDiscount

// Checkout steps
type CheckoutStep = "shipping" | "payment" | "review" | "confirmation"

export function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping")
  const [orderNumber, setOrderNumber] = useState<string>("")
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    notes: "",
  })
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "installment" | "bank">("cash")

  // Handle form submission
  const handleShippingSubmit = (data: typeof shippingInfo) => {
    setShippingInfo(data)
    setCurrentStep("payment")
    window.scrollTo(0, 0)
  }

  // Handle payment selection
  const handlePaymentSubmit = (method: typeof paymentMethod) => {
    setPaymentMethod(method)
    setCurrentStep("review")
    window.scrollTo(0, 0)
  }

  // Handle order placement
  const placeOrder = () => {
    // Generate random order number
    const randomOrderNumber = "ZS" + Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)
    setCurrentStep("confirmation")
    window.scrollTo(0, 0)
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      <main className="container mx-auto px-4 py-6">
        {/* Checkout Progress */}
        {currentStep !== "confirmation" && (
          <div className="mb-6">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === "shipping" ? "bg-[#1B468F] text-white" : "bg-[#1B468F] text-white"}`}
                >
                  1
                </div>
                <span
                  className={`text-xs mt-1 ${currentStep === "shipping" ? "text-[#1B468F] font-medium" : "text-gray-500"}`}
                >
                  معلومات الشحن
                </span>
              </div>

              <div className="flex-1 h-0.5 mx-2 bg-gray-200">
                <div
                  className={`h-full bg-[#1B468F] transition-all ${currentStep === "shipping" ? "w-0" : currentStep === "payment" ? "w-1/2" : "w-full"}`}
                ></div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === "payment" ? "bg-[#1B468F] text-white" : currentStep === "shipping" ? "bg-gray-200 text-gray-500" : "bg-[#1B468F] text-white"}`}
                >
                  2
                </div>
                <span
                  className={`text-xs mt-1 ${currentStep === "payment" ? "text-[#1B468F] font-medium" : "text-gray-500"}`}
                >
                  طريقة الدفع
                </span>
              </div>

              <div className="flex-1 h-0.5 mx-2 bg-gray-200">
                <div
                  className={`h-full bg-[#1B468F] transition-all ${currentStep === "shipping" || currentStep === "payment" ? "w-0" : "w-full"}`}
                ></div>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === "review" ? "bg-[#1B468F] text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  3
                </div>
                <span
                  className={`text-xs mt-1 ${currentStep === "review" ? "text-[#1B468F] font-medium" : "text-gray-500"}`}
                >
                  مراجعة الطلب
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {currentStep === "shipping" && <CheckoutForm onSubmit={handleShippingSubmit} initialData={shippingInfo} />}

            {currentStep === "payment" && (
              <PaymentMethods onSubmit={handlePaymentSubmit} selectedMethod={paymentMethod} />
            )}

            {currentStep === "review" && (
              <div className="bg-white rounded border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h1 className="text-xl font-bold text-[#1B468F]">مراجعة الطلب</h1>
                </div>

                <div className="p-4 space-y-6">
                  {/* Shipping Information */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-medium text-[#1B468F]">معلومات الشحن</h2>
                      <button
                        onClick={() => setCurrentStep("shipping")}
                        className="text-sm text-[#F15A29] hover:underline"
                      >
                        تعديل
                      </button>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p>
                        <span className="font-medium">الاسم:</span> {shippingInfo.fullName}
                      </p>
                      <p>
                        <span className="font-medium">الهاتف:</span> {shippingInfo.phone}
                      </p>
                      <p>
                        <span className="font-medium">البريد الإلكتروني:</span> {shippingInfo.email}
                      </p>
                      <p>
                        <span className="font-medium">المدينة:</span> {shippingInfo.city}
                      </p>
                      <p>
                        <span className="font-medium">العنوان:</span> {shippingInfo.address}
                      </p>
                      {shippingInfo.notes && (
                        <p>
                          <span className="font-medium">ملاحظات:</span> {shippingInfo.notes}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-medium text-[#1B468F]">طريقة الدفع</h2>
                      <button
                        onClick={() => setCurrentStep("payment")}
                        className="text-sm text-[#F15A29] hover:underline"
                      >
                        تعديل
                      </button>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      {paymentMethod === "cash" && <p>الدفع عند الاستلام</p>}
                      {paymentMethod === "card" && <p>بطاقة ائتمان</p>}
                      {paymentMethod === "installment" && <p>تقسيط بدون فوائد</p>}
                      {paymentMethod === "bank" && <p>تحويل بنكي</p>}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h2 className="font-medium text-[#1B468F] mb-2">المنتجات</h2>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded">
                          <div className="relative w-16 h-16 rounded overflow-hidden bg-white flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm line-clamp-2">{item.name}</p>
                            <div className="flex justify-between mt-1">
                              <span className="text-sm text-gray-500">الكمية: {item.quantity}</span>
                              <span className="text-sm font-medium text-[#F15A29]">{item.price} ريال</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    onClick={placeOrder}
                    className="w-full py-3 bg-[#1B468F] text-white text-center rounded font-medium hover:bg-[#1B468F]/90 transition-colors"
                  >
                    تأكيد الطلب
                  </button>
                </div>
              </div>
            )}

            {currentStep === "confirmation" && <OrderConfirmation orderNumber={orderNumber} />}
          </div>

          {/* Order Summary */}
          {currentStep !== "confirmation" && (
            <div className="w-full md:w-1/3">
              <OrderSummary
                cartItems={cartItems}
                subtotal={subtotal}
                cb100Discount={cb100Discount}
                volumeDiscount={volumeDiscount}
                total={total}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

