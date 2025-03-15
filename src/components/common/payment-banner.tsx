import Image from "next/image";

export function PaymentBanner() {
    return (
      <div className="bg-[#1B468F] py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8">
            <Image
              src="/image/payment-methods/Tabby-01.svg"
              alt="Tabby"
              width={140}
              height={60}
            />
            <div className="text-white text-center">
              <p className="text-lg font-bold">قسّط مشترياتك على 4 دفعات</p>
              <p>بدون فوائد أو رسوم</p>
            </div>
            <Image
              src="/image/payment-methods/Tamara (1).svg"
              alt="Tabby"
              width={140}
              height={60}
            />
          </div>
        </div>
      </div>
    )
  }
  
  