"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Send, Sparkles, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Здравствуйте! Я ИИ-юрист Кодексис. Чем могу помочь вам сегодня?",
    },
  ])
  const [input, setInput] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const suggestedQuestions = [
    "Жилые споры, что делать?",
    "Не возвращают залог за квартиру",
    "Как расторгнуть договор досрочно?",
    "Как поделить имущество при разводе?",
    "ДТП - что делать, кто виноват?",
    "Сроки выплаты заработной платы",
  ]

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Спасибо за ваш вопрос. Я анализирую информацию и готовлю ответ...",
        },
      ])
    }, 1000)
  }

  const handleSuggestedQuestion = (question: string) => {
    setMessages([...messages, { role: "user", content: question }])
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Спасибо за ваш вопрос. Я анализирую информацию и готовлю ответ...",
        },
      ])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex flex-1 pt-20">
        {sidebarOpen && (
          <div className="w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto hidden md:flex flex-col">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 mb-6 rounded-lg flex items-center justify-center gap-2">
              <span>+</span> Новый чат
            </button>
            <nav className="space-y-2 flex-1">
              <button className="w-full text-left px-4 py-3 bg-gray-100 rounded-lg font-medium text-gray-900 hover:bg-gray-200">
                Навигация
              </button>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-900 text-center">Нет чатов</p>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Создайте первый чат для получения правовой информации
              </p>
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          <div className="flex-1 pb-8 px-4 md:px-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {messages.length === 1 ? (
                <div className="h-full flex flex-col items-center justify-center py-12">
                  <div className="bg-red-600 text-white rounded-2xl p-12 text-center mb-12 max-w-2xl w-full">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Попробуй эти вопросы</h1>
                    <p className="text-base md:text-lg leading-relaxed">
                      Выбери готовый вопрос или задай свой — ИИ-юрист поможет разобраться с любой правовой ситуацией
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-2xl">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="bg-white border border-gray-300 rounded-xl p-4 text-left hover:shadow-lg hover:border-red-300 transition-all text-gray-900 font-medium text-sm"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-8">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "assistant" ? "bg-gradient-to-br from-red-600 to-red-700" : "bg-slate-900"
                        }`}
                      >
                        {message.role === "assistant" ? (
                          <Sparkles className="h-5 w-5 text-white" />
                        ) : (
                          <MessageSquare className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                        <div
                          className={`inline-block p-4 rounded-2xl max-w-md ${
                            message.role === "assistant" ? "bg-gray-100 text-gray-900" : "bg-red-600 text-white"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 bg-white p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Опишите вашу ситуацию подробно..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                ИИ может допускать ошибки. Проверяйте важную информацию. См. условия использования.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  )
}
