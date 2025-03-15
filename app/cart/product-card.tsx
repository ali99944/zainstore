import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  oldPrice?: number | null
  image: string
}

export function ProductCard({ id, name, price, oldPrice, image }: ProductCardProps) {
  return (
    <Link href={`/store/product/${id}`} className="group">
      <div className="relative h-40 rounded overflow-hidden bg-gray-50 mb-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium line-clamp-2 group-hover:text-[#F15A29] transition-colors">{name}</h3>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-[#F15A29] font-medium">{price} ريال</span>
        {oldPrice && <span className="text-xs text-gray-400 line-through">{oldPrice} ريال</span>}
      </div>
    </Link>
  )
}

