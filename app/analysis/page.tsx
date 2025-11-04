"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Upload, FileText, CheckCircle, AlertTriangle, Info, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AnalysisPage() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setResults(null)
    }
  }

  const handleAnalyze = () => {
    setAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setResults({
        risks: [
          { level: "high", text: "Отсутствует срок действия договора" },
          { level: "medium", text: "Не указаны штрафные санкции за нарушение сроков" },
          { level: "low", text: "Рекомендуется уточнить порядок расторжения" },
        ],
        suggestions: [
          "Добавить пункт о сроке действия договора",
          "Включить раздел об ответственности сторон",
          "Уточнить порядок разрешения споров",
        ],
      })
      setAnalyzing(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">ИИ-анализ договоров</h1>
          <p className="text-xl text-gray-600 mb-8">
            Автоматическое выявление рисков и скрытых угроз в любых документах за 2-5 дней
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-red-600 transition-colors">
            {!file ? (
              <label className="cursor-pointer">
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Загрузите договор для анализа</h3>
                <p className="text-gray-600 mb-4">Поддерживаются форматы: PDF, DOC, DOCX (до 10 МБ)</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">Выбрать файл</Button>
              </label>
            ) : (
              <div>
                <FileText className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{file.name}</h3>
                <p className="text-gray-600 mb-4">{(file.size / 1024).toFixed(2)} КБ</p>
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    {analyzing ? "Анализируем..." : "Анализировать договор"}
                  </Button>
                  <Button onClick={() => setFile(null)} variant="outline">
                    Выбрать другой файл
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Результаты анализа</h2>

            {/* Risks */}
            <div className="bg-white rounded-xl p-8 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Выявленные риски
              </h3>
              <div className="space-y-4">
                {results.risks.map((risk: any, index: number) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      risk.level === "high"
                        ? "bg-red-50 border-red-600"
                        : risk.level === "medium"
                          ? "bg-yellow-50 border-yellow-600"
                          : "bg-blue-50 border-blue-600"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className={`h-5 w-5 mt-0.5 ${
                          risk.level === "high"
                            ? "text-red-600"
                            : risk.level === "medium"
                              ? "text-yellow-600"
                              : "text-blue-600"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-gray-900">{risk.text}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Уровень риска:{" "}
                          {risk.level === "high" ? "Высокий" : risk.level === "medium" ? "Средний" : "Низкий"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Рекомендации
              </h3>
              <ul className="space-y-3">
                {results.suggestions.map((suggestion: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Download className="h-4 w-4 mr-2" />
                Скачать отчет
              </Button>
              <Button variant="outline">Проконсультироваться с юристом</Button>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Что проверяет ИИ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Риски и угрозы</h3>
              <p className="text-gray-600">Выявление скрытых рисков и невыгодных условий</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Соответствие ГК РФ</h3>
              <p className="text-gray-600">Проверка на соответствие законодательству</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Рекомендации</h3>
              <p className="text-gray-600">Конкретные советы по улучшению договора</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
