import type { Metadata } from "next"
import CartPage from "./cart-page"

export const metadata: Metadata = {
  title: "سلة التسوق | متجر زين",
  description: "عرض وتعديل محتويات سلة التسوق الخاصة بك",
}

export default function Cart() {
  return <CartPage />
}

