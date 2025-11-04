import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const posts = [
    {
      title: "Как проверить контрагента перед заключением сделки",
      excerpt: "Подробное руководство по проверке надежности компаний и предпринимателей перед началом сотрудничества.",
      date: "15 января 2025",
      author: "Команда Кодексис",
      category: "Проверка контрагентов",
    },
    {
      title: "5 скрытых рисков в договорах поставки",
      excerpt: "Узнайте, на какие пункты договора поставки нужно обратить особое внимание, чтобы избежать проблем.",
      date: "12 января 2025",
      author: "Команда Кодексис",
      category: "Договоры",
    },
    {
      title: "Трудовой договор: что должен знать каждый работодатель",
      excerpt: "Основные требования к трудовым договорам и типичные ошибки при их составлении.",
      date: "8 января 2025",
      author: "Команда Кодексис",
      category: "Трудовое право",
    },
    {
      title: "ИИ в юриспруденции: как технологии меняют правовую сферу",
      excerpt: "Обзор современных технологий искусственного интеллекта в юридической практике.",
      date: "5 января 2025",
      author: "Команда Кодексис",
      category: "Технологии",
    },
    {
      title: "Договор аренды: защита прав арендодателя и арендатора",
      excerpt: "Ключевые моменты, которые необходимо учесть при составлении договора аренды недвижимости.",
      date: "2 января 2025",
      author: "Команда Кодексис",
      category: "Недвижимость",
    },
    {
      title: "Банкротство контрагента: как защитить свои интересы",
      excerpt: "Что делать, если ваш контрагент находится на грани банкротства или уже начал процедуру.",
      date: "29 декабря 2024",
      author: "Команда Кодексис",
      category: "Банкротство",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Блог Кодексис</h1>
          <p className="text-xl text-slate-600 mb-12">Полезные статьи о праве, договорах и защите ваших интересов</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-red-500 to-red-600" />
                <div className="p-6">
                  <div className="text-xs text-red-600 font-semibold mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0">
                    Читать далее <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
