import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ContractGenerator } from "@/components/contract-generator"

export default function SupplyContractPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContractGenerator
        title="Договор поставки"
        description="Создайте юридически корректный договор поставки товаров за несколько минут"
        contractType="supply"
      />
      <Footer />
      <CookieBanner />
    </div>
  )
}
