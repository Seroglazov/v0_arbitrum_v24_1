"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Download, Sparkles } from "lucide-react"

interface ContractGeneratorProps {
  title: string
  description: string
  contractType: string
}

export function ContractGenerator({ title, description, contractType }: ContractGeneratorProps) {
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      setGenerated(true)
    }, 3000)
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Генератор договоров
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="party1">Сторона 1 (Наименование)</Label>
                <Input id="party1" placeholder="ООО 'Компания'" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="party1-inn">ИНН Стороны 1</Label>
                <Input id="party1-inn" placeholder="1234567890" className="mt-2" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="party2">Сторона 2 (Наименование)</Label>
                <Input id="party2" placeholder="ИП Иванов И.И." className="mt-2" />
              </div>
              <div>
                <Label htmlFor="party2-inn">ИНН Стороны 2</Label>
                <Input id="party2-inn" placeholder="0987654321" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="subject">Предмет договора</Label>
              <Textarea id="subject" placeholder="Опишите предмет договора..." className="mt-2 min-h-[120px]" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="amount">Сумма договора (₽)</Label>
                <Input id="amount" type="number" placeholder="100000" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="term">Срок действия</Label>
                <Input id="term" placeholder="12 месяцев" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="additional">Дополнительные условия</Label>
              <Textarea
                id="additional"
                placeholder="Укажите дополнительные условия договора..."
                className="mt-2 min-h-[100px]"
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base"
            >
              {generating ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                  Генерируем договор...
                </>
              ) : (
                <>
                  <FileText className="h-5 w-5 mr-2" />
                  Сгенерировать договор
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Generated Result */}
        {generated && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Договор успешно сгенерирован!</h3>
                <p className="text-gray-600 mb-4">
                  Ваш {title.toLowerCase()} готов к использованию. Проверьте все данные перед подписанием.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Скачать PDF
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Скачать DOCX
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Важная информация</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Сгенерированный договор проверен на соответствие ГК РФ</li>
            <li>• Рекомендуем дополнительно проконсультироваться с юристом</li>
            <li>• Все данные защищены и не передаются третьим лицам</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
