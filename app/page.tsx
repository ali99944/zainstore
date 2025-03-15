import { ZainStoreHero } from "@/src/components/landing/store-hero";
import { ZainStoreProducts } from "@/src/components/landing/store-products";
import { ZainStorePromo } from "@/src/components/landing/store-promo";
import { ZainStoreBrands } from "@/src/components/landing/store-brands";
import { ZainStoreBenefits } from "@/src/components/landing/store-benefits";
import { PaymentBanner } from "@/src/components/common/payment-banner";
import { ZainStoreCategories } from "@/src/components/landing/store-categories";
import { CategoryGrid } from "@/src/components/common/category-grid";
import OffersCarousel from "@/src/components/common/offers-carousel";
import HorizontalOffersCarousel from "@/src/components/common/one-way-offers-carousel";

export default function ZainStorePage() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      <main className="flex-grow">
        <ZainStoreHero />
        <ZainStoreCategories />
        <div className="grid grid-cols-3 mx-4 gap-4">
          <div className="col-span-2">
          <OffersCarousel />
          </div>
          <div className="col-span-1">
            <HorizontalOffersCarousel />
          </div>
        </div>
        <CategoryGrid />
        <PaymentBanner />
        <ZainStoreProducts />
        <ZainStorePromo />
        <ZainStoreBenefits />
        <ZainStoreBrands />
      </main>
    </div>
  )
}
