"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ChatSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 font-bold">К</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Привет! Я ваш правовой ИИ-ассистент</h3>
                <p className="text-slate-600 text-sm">онлайн</p>
              </div>
            </div>

            <p className="text-slate-700 mb-6">Задайте любой вопрос о договорах, правах или проверке контрагентов</p>

            <div className="bg-red-600 text-white rounded-2xl p-4 mb-6 max-w-md">
              Как проверить надежность ООО перед сделкой?
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Введите ваш вопрос..."
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                <Send className="h-5 w-5" />
                <span className="ml-2">Спросить</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
