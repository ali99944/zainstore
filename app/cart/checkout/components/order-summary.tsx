import { Truck } from "lucide-react"

interface OrderSummaryProps {
  cartItems: {
    id: number
    name: string
    price: number
    oldPrice: number | null
    quantity: number
    image: string
  }[]
  subtotal: number
  cb100Discount: number
  volumeDiscount: number
  total: number
}

export function OrderSummary({ cartItems, subtotal, cb100Discount, volumeDiscount, total }: OrderSummaryProps) {
  return (
    <div className="bg-white rounded border border-gray-100 overflow-hidden sticky top-24">
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-bold text-[#1B468F]">ملخص الطلب</h2>
      </div>

      <div className="p-4">
        {/* Order Items */}
        <div className="space-y-3 mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-2">
              <div className="relative w-12 h-12 rounded overflow-hidden bg-gray-50 flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1">
                <p className="text-xs line-clamp-1">{item.name}</p>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">الكمية: {item.quantity}</span>
                  <span className="text-xs font-medium">{item.price} ريال</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-2 pt-3 border-t border-gray-100">
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
        <div className="flex items-center gap-2 text-xs text-gray-600 mt-4 pt-3 border-t border-gray-100">
          <Truck className="w-4 h-4 text-[#1B468F]" />
          <span>توصيل مجاني لجميع مناطق المملكة</span>
        </div>
      </div>
    </div>
  )
}

