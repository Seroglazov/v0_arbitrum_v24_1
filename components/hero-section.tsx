import { Button } from "@/components/ui/button"
import { Users, Building2, Briefcase } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Card - AI Assistant */}
        <div className="bg-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-2">ИИ-Юрист</h1>
            <p className="text-5xl font-bold text-red-500 mb-8">
              помощник
              <br />
              24/7
            </p>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 mb-8">
              Попробовать
              <br />
              бесплатно
            </Button>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <button className="flex flex-col items-center gap-2 p-4 bg-red-600 rounded-xl hover:bg-red-700 transition-colors">
                <Users className="h-6 w-6" />
                <span className="text-xs">Физ. лица</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                <Building2 className="h-6 w-6" />
                <span className="text-xs">ИП</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors">
                <Briefcase className="h-6 w-6" />
                <span className="text-xs">Бизнес</span>
              </button>
            </div>

            <div className="border-t border-blue-500 pt-6">
              <p className="text-center text-lg font-semibold mb-2">Знает все ваши права и способы их защиты</p>
              <p className="text-center text-sm text-slate-300">
                Получите четкий план действий за минуты, а не дни поисков в интернете
              </p>
            </div>
          </div>
        </div>

        {/* Right Card - Image */}
        <div className="relative rounded-3xl overflow-hidden h-[600px]">
          <img
            src="/images/design-mode/video-poster.jpg"
            alt="Профессиональный юрист"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-2">
              Будь следующим,
              <br />
              кто
            </h2>
            <p className="text-xl">видит скрытые угрозы</p>
          </div>
        </div>
      </div>
    </section>
  )
}
