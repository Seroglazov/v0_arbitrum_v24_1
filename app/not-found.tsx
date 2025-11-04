import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Search, FileQuestion } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <FileQuestion className="h-96 w-96 text-red-600" />
            </div>
            <div className="relative">
              <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-red-500 to-orange-500 leading-none mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                404
              </h1>
            </div>
          </div>

          <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Страница не найдена</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 text-balance">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            <p className="text-lg text-gray-500 text-balance">
              Но не волнуйтесь — наш ИИ-помощник всегда готов помочь вам найти нужную информацию!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <Home className="h-5 w-5 mr-2" />
                Вернуться на главную
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 shadow-md hover:shadow-lg transition-all w-full sm:w-auto bg-transparent"
              >
                <Search className="h-5 w-5 mr-2" />
                Задать вопрос ИИ
              </Button>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 animate-in fade-in duration-700 delay-500">
            <p className="text-sm text-gray-500 mb-4">Популярные разделы:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/about" className="text-sm text-red-600 hover:text-red-700 hover:underline">
                О нас
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/services" className="text-sm text-red-600 hover:text-red-700 hover:underline">
                Услуги
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/contact" className="text-sm text-red-600 hover:text-red-700 hover:underline">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
