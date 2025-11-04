import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ContractGenerator } from "@/components/contract-generator"

export default function EmploymentContractPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContractGenerator
        title="Трудовой договор"
        description="Создайте трудовой договор, соответствующий ТК РФ"
        contractType="employment"
      />
      <Footer />
      <CookieBanner />
    </div>
  )
}
