import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function PromoBanners() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Delivery Banner */}
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6y4rubAEZSidbcY5SkomZtnxvKor1g.png"
              alt="احصل على هدية مجانية"
              width={600}
              height={300}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#1B468F]/80 to-transparent p-8 flex flex-col justify-center text-white text-right">
              <h3 className="text-2xl font-bold mb-2">احصل على هدية مجانية</h3>
              <p className="mb-4">عند شرائك من مجموعات الطبخ من جنرال سوبريم</p>
              <Link
                href="/store/cooking-sets"
                className="inline-flex items-center gap-2 bg-[#F15A29] text-white px-6 py-2 rounded self-end hover:bg-[#F15A29]/90 transition-colors"
              >
                <span>تسوق الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* AC Promo Banner */}
          <div className="relative rounded overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6y4rubAEZSidbcY5SkomZtnxvKor1g.png"
              alt="مكيفات بارد"
              width={600}
              height={300}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#1B468F]/80 to-transparent p-8 flex flex-col justify-center text-white text-right">
              <h3 className="text-2xl font-bold mb-2">مكيفات بارد</h3>
              <p className="mb-4">أسعار تبدأ من</p>
              <div className="flex items-center justify-end gap-2 mb-4">
                <span className="text-3xl font-bold">1,599</span>
                <span>ريال</span>
              </div>
              <Link
                href="/store/ac"
                className="inline-flex items-center gap-2 bg-[#F15A29] text-white px-6 py-2 rounded self-end hover:bg-[#F15A29]/90 transition-colors"
              >
                <span>تسوق الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

