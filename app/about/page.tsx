import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">О Кодексис</h1>
          <p className="text-xl text-slate-600 mb-12">
            Мы создаем будущее юридических услуг, делая профессиональную правовую помощь доступной каждому через
            искусственный интеллект.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-50 rounded-2xl p-8">
              <Target className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
              <p className="text-slate-600">
                Демократизировать доступ к качественной юридической помощи, используя передовые технологии
                искусственного интеллекта для защиты прав и интересов каждого человека и бизнеса.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Наши ценности</h3>
              <p className="text-slate-600">
                Прозрачность, надежность и инновации. Мы стремимся предоставлять точную правовую информацию и защищать
                данные наших клиентов на самом высоком уровне.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6">Почему Кодексис?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
                <p className="text-slate-300">Круглосуточная поддержка</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
                <p className="text-slate-300">Баз данных для проверки</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-500 mb-2">2 мин</div>
                <p className="text-slate-300">Анализ договора</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Наша команда</h2>
            <p className="text-lg text-slate-600 mb-8">
              Кодексис создан командой опытных юристов, разработчиков и специалистов по искусственному интеллекту,
              объединенных общей целью — сделать юридические услуги доступными и понятными для всех.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-24 w-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-red-600" />
                </div>
                <h4 className="font-bold mb-1">Юристы</h4>
                <p className="text-sm text-slate-600">Эксперты с многолетним опытом</p>
              </div>
              <div className="text-center">
                <div className="h-24 w-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                </div>
                <h4 className="font-bold mb-1">AI-специалисты</h4>
                <p className="text-sm text-slate-600">Разработчики передовых технологий</p>
              </div>
              <div className="text-center">
                <div className="h-24 w-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="font-bold mb-1">Продукт</h4>
                <p className="text-sm text-slate-600">Создатели удобного интерфейса</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
