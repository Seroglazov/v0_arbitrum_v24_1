import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WhoUsesSection } from "@/components/who-uses-section"
import { SolutionsSection } from "@/components/solutions-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhoUsesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ServicesSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
