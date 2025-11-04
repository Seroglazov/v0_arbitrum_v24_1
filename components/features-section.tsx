import { FileText, MessageSquare, FileCheck, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-semibold">⚡ Возможности</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">Возможности Кодексис</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Комплексная защита ваших интересов. От анализа рисков до проверки контрагентов — доверьте сложную работу
          искусственному интеллекту.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {/* Left Card - AI Contract Analysis */}
        <div className="bg-red-50 rounded-3xl p-8">
          <div className="bg-white rounded-xl p-4 w-fit mb-4">
            <FileText className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">ИИ-анализ договоров</h3>
          <p className="text-slate-600 mb-6">
            Автоматическое выявление рисков и скрытых угроз в любых документах за 2 минуты вместо 2-5 дней
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 bg-white rounded-xl p-4">
              <div className="bg-green-50 rounded-lg p-2">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Договор_поставки.pdf</p>
                <p className="text-xs text-slate-500">1,245 КВ</p>
              </div>
              <div className="bg-green-100 rounded-full p-1">
                <FileCheck className="h-4 w-4 text-green-600" />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-xl p-4">
              <div className="bg-green-50 rounded-lg p-2">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Трудовой_договор.pdf</p>
                <p className="text-xs text-slate-500">967 КВ</p>
              </div>
              <div className="bg-green-100 rounded-full p-1">
                <FileCheck className="h-4 w-4 text-green-600" />
              </div>
            </div>
          </div>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base">
            Анализировать договор
          </Button>
        </div>

        {/* Right Card - AI Chat Assistant */}
        <div className="bg-slate-50 rounded-3xl p-8">
          <div className="bg-white rounded-xl p-4 w-fit mb-4">
            <MessageSquare className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Привет! Я ваш правовой ИИ-ассистент</h3>
          <p className="text-slate-600 mb-6">Задайте любой вопрос о договорах, правах или проверке контрагентов</p>

          <div className="bg-red-600 text-white rounded-2xl p-4 mb-6">
            <p className="text-sm leading-relaxed">Как проверить надежность ООО перед сделкой?</p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Введите ваш вопрос..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
