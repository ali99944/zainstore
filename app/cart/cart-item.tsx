"use client"
import Image from "next/image"
import { Heart, Trash2, Plus, Minus } from "lucide-react"

interface CartItemProps {
  id: number
  name: string
  price: number
  oldPrice?: number | null
  quantity: number
  image: string
  onQuantityChange: (id: number, quantity: number) => void
  onRemove: (id: number) => void
  onMoveToWishlist: (id: number) => void
}

export function CartItem({
  id,
  name,
  price,
  oldPrice,
  quantity,
  image,
  onQuantityChange,
  onRemove,
  onMoveToWishlist,
}: CartItemProps) {
  return (
    <div className="p-4 flex flex-col sm:flex-row gap-4">
      <div className="relative w-full sm:w-24 h-24 rounded overflow-hidden bg-gray-50 flex-shrink-0">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <h3 className="text-sm font-medium">{name}</h3>
          <div className="flex gap-2 sm:flex-shrink-0">
            <button
              onClick={() => onMoveToWishlist(id)}
              className="text-gray-400 hover:text-[#F15A29] transition-colors"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button onClick={() => onRemove(id)} className="text-gray-400 hover:text-red-500 transition-colors">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#F15A29] font-medium">{price} ريال</span>
            {oldPrice && <span className="text-sm text-gray-400 line-through">{oldPrice} ريال</span>}
          </div>

          <div className="flex items-center border border-gray-200 rounded">
            <button
              onClick={() => onQuantityChange(id, quantity - 1)}
              disabled={quantity <= 1}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1B468F] disabled:opacity-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm">{quantity}</span>
            <button
              onClick={() => onQuantityChange(id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#1B468F]"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

