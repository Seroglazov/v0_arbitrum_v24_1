import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ContractGenerator } from "@/components/contract-generator"

export default function RentContractPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContractGenerator
        title="Договор аренды"
        description="Создайте договор аренды недвижимости или оборудования"
        contractType="rent"
      />
      <Footer />
      <CookieBanner />
    </div>
  )
}
