import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FileText, CheckCircle, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Генерация договоров с помощью ИИ</h1>
              <p className="text-xl text-gray-600 mb-8">
                Создавайте юридически корректные договоры за минуты вместо часов. Автоматическая проверка соответствия
                ГК РФ.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Создать договор
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-blue-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="h-32 w-32 text-red-600 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Возможности генерации</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрая генерация</h3>
              <p className="text-gray-600">Создание договора за 2-3 минуты на основе ваших требований</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Юридическая точность</h3>
              <p className="text-gray-600">Автоматическая проверка соответствия законодательству РФ</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Готовые шаблоны</h3>
              <p className="text-gray-600">Библиотека проверенных шаблонов для разных типов договоров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Contracts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Типы договоров</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Договор поставки",
              "Трудовой договор",
              "Договор аренды",
              "Договор подряда",
              "Договор оказания услуг",
              "Агентский договор",
              "Лицензионный договор",
              "Договор купли-продажи",
            ].map((type) => (
              <div
                key={type}
                className="p-6 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-md transition-all cursor-pointer"
              >
                <FileText className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Выберите тип договора</h3>
              <p className="text-gray-600">Укажите, какой договор вам нужен из готовых шаблонов</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Заполните параметры</h3>
              <p className="text-gray-600">Введите необходимые данные: стороны, сроки, условия</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Получите готовый договор</h3>
              <p className="text-gray-600">Скачайте проверенный договор в формате PDF или DOCX</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Начните создавать договоры прямо сейчас</h2>
          <p className="text-xl mb-8 text-red-50">Первые 3 договора — бесплатно. Без регистрации и кредитной карты.</p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
            Попробовать бесплатно
          </Button>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
