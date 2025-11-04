import { Shield, FileCheck, Clock, Building, Users, Gavel, ShieldCheck, FileText, Briefcase, Home } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Service 1 - Counterparty Verification */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <div className="bg-white rounded-xl p-4 w-fit mb-4">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Проверка контрагентов</h3>
          <p className="text-slate-600 mb-6">
            Мгновенная проверка организаций и контрагентов по 15+ базам данных: налоговая, суды, Финансы, банкротство в
            одном отчете
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Home className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Недвижимость</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Users className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Трудовое</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Briefcase className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Бизнес</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Users className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Физ. лица</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Gavel className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Суды</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <ShieldCheck className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Защита</span>
            </div>
          </div>
        </div>

        {/* Service 2 - Contract Generation (Red Card) */}
        <div className="bg-red-600 text-white rounded-3xl p-8">
          <div className="bg-white/20 rounded-xl p-4 w-fit mb-4">
            <FileCheck className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Генерация договоров</h3>
          <p className="mb-6">
            Создание юридически корректных договоров любой сложности с автоматической проверкой соответствия ГК РФ
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <FileText className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Аренда</span>
            </div>
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <Users className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Услуги</span>
            </div>
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <Building className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Поставка</span>
            </div>
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <Users className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Трудовое</span>
            </div>
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <Gavel className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Суды</span>
            </div>
            <div className="bg-white/20 rounded-xl p-3 flex flex-col items-center gap-1 hover:bg-white/30 transition-colors cursor-pointer">
              <ShieldCheck className="h-5 w-5 text-white" />
              <span className="text-xs text-center">Банкротство</span>
            </div>
          </div>
        </div>

        {/* Service 3 - 24/7 AI Assistant */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <div className="bg-white rounded-xl p-4 w-fit mb-4">
            <Clock className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">24/7 ИИ-помощник</h3>
          <p className="text-slate-600 mb-6">
            Получайте правовую информацию в режиме реального времени и многое другое. Простые ответы на сложные вопросы
          </p>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Home className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Недвижимость</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Users className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Трудовое</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Briefcase className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Бизнес</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Users className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Физ. лица</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <Gavel className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Суды</span>
            </div>
            <div className="bg-white rounded-xl p-3 flex flex-col items-center gap-1 hover:shadow-md transition-shadow cursor-pointer">
              <ShieldCheck className="h-5 w-5 text-red-600" />
              <span className="text-xs text-center">Защита</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
