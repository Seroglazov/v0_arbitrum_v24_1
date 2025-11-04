import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-slate-600 mb-12">Свяжитесь с нами любым удобным способом</p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тема</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Тема сообщения"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6">
                  <Send className="h-5 w-5 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-slate-600">support@kodexis.ru</p>
                    <p className="text-slate-600">info@kodexis.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-slate-500">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-slate-600">
                      Москва, ул. Примерная, д. 1<br />
                      БЦ "Технопарк", офис 123
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold mb-3">Техническая поддержка 24/7</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Наш ИИ-помощник готов ответить на ваши вопросы в любое время
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Открыть чат</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
