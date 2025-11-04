"use client"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function PricingPage() {
  const [pricingType, setPricingType] = useState("subscription")

  const subscriptionPlans = [
    {
      name: "Бесплатный",
      price: "0 ₽",
      period: "в месяц",
      features: [
        "1 анализов в месяц",
        "1 генераций в месяц",
        "Базовые возможности для начала работы с платформой",
        "Сканирование документов PDF + DOCX",
        "Экспорт чата в TXT/MD",
      ],
      buttonText: "Начать бесплатно",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      name: "Старт",
      price: "499 ₽",
      period: "в месяц",
      features: [
        "7 анализов в месяц",
        "5 генераций в месяц",
        "Сканирование документов PDF + DOCX",
        "Экспорт чата в TXT/MD",
      ],
      buttonText: "Купить за 499 ₽",
      buttonVariant: "default" as const,
      highlighted: false,
    },
    {
      name: "Профи",
      price: "1699 ₽",
      period: "в месяц",
      badge: "ВЫГОДНО",
      features: [
        "20 анализов в месяц",
        "15 генераций в месяц",
        "Сканирование документов PDF + DOCX",
        "Экспорт чата в TXT/MD",
      ],
      buttonText: "Купить за 1699 ₽",
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: "Бизнес",
      price: "3990 ₽",
      period: "в месяц",
      features: [
        "60 анализов в месяц",
        "40 генераций в месяц",
        "Чат с ИИ юристом",
        "Сканирование документов PDF + DOCX",
        "Экспорт чата в TXT/MD",
      ],
      buttonText: "Купить за 3990 ₽",
      buttonVariant: "default" as const,
      highlighted: false,
    },
  ]

  const oneTimePayments = [
    {
      name: "Разовая генерация документа",
      price: "199 ₽",
      period: "разовая покупка",
      features: ["1 генерация документов", "Создание одного договора с помощью ИИ"],
      buttonText: "Купить за 199 ₽",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
    {
      name: "30 сообщений в чате",
      price: "99 ₽",
      period: "разовая покупка",
      features: ["30 сообщений в чате", "Дополнительные вопросы ИИ-юристу"],
      buttonText: "Купить за 99 ₽",
      buttonVariant: "default" as const,
      highlighted: true,
    },
    {
      name: "Разовый анализ документа",
      price: "149 ₽",
      period: "разовая покупка",
      features: ["1 анализ документов", "Полная проверка одного документа по 47 критериям"],
      buttonText: "Купить за 149 ₽",
      buttonVariant: "outline" as const,
      highlighted: false,
    },
  ]

  const plans = pricingType === "subscription" ? subscriptionPlans : oneTimePayments

  const faqs = [
    {
      question: "Что такое Кодексис?",
      answer: "Кодексис — это платформа для анализа договоров с помощью искусственного интеллекта.",
    },
    {
      question: "Для кого предназначена платформа?",
      answer: "Платформа предназначена для юристов, предпринимателей и всех, кто работает с договорами.",
    },
    {
      question: "В каких регионах работает сервис?",
      answer: "Сервис работает по всей России и странам СНГ.",
    },
    {
      question: "Как начать использовать Кодексис?",
      answer: "Зарегистрируйтесь на платформе и начните с бесплатного тарифа.",
    },
    {
      question: "Какие форматы документов поддерживаются?",
      answer: "Поддерживаются форматы PDF, DOCX, TXT и MD.",
    },
    {
      question: "Насколько надежен анализ?",
      answer: "Наш ИИ обучен на тысячах договоров и обеспечивает высокую точность анализа.",
    },
    {
      question: "Безопасны ли мои данные?",
      answer: "Да, мы используем современные методы шифрования для защиты ваших данных.",
    },
    {
      question: "Кто имеет доступ к моим документам?",
      answer: "Только вы имеете доступ к своим документам. Мы не передаем данные третьим лицам.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-red-600">⚡</span>
            Тарифные планы
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Выберите подписку</h1>
          <p className="text-gray-600 text-lg">Для тех, кто работает с договорами регулярно</p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 gap-1">
            <button
              onClick={() => setPricingType("oneTime")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                pricingType === "oneTime" ? "bg-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Разовая оплата
            </button>
            <button
              onClick={() => setPricingType("subscription")}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                pricingType === "subscription" ? "bg-red-600 text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Подписка
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-6 ${
                plan.highlighted
                  ? "border-red-600 bg-[#2C3E50] text-white shadow-xl scale-105"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">{plan.badge}</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-4 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-red-600"}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>{plan.period}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-red-400" : "text-red-600"}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-gray-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.buttonVariant === "outline"
                    ? "border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-50"
                    : plan.highlighted
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-gray-600">Ответы на популярные вопросы о работе с сервисом</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
