import { MessageSquare } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Антон Морозов",
      role: "Покупатель недвижимости",
      initials: "АМ",
      quote:
        "Дачу за 3 миллиона – за 50 система показала, что участок в сезонном залеге у банка. Продавец 'забыл' про это. Система показала что участок в сезонном залеге у банка. Продавец 'забыл' про это.",
    },
    {
      name: "Наталья Белова",
      role: "HR-директор",
      initials: "НБ",
      quote:
        "Трудинспекция пришла с проверкой – ни одного нарушения в документах! Кодексис автоматически обновляет все договоры при изменениях в ТК РФ. Спльно спасибо!",
    },
    {
      name: "Елена Соколова",
      role: "Бухгалтер",
      initials: "ЕС",
      quote:
        "Покупал квартиру в новостройке. Кодексис нашел 8 рисков в договоре долевого участия, включая возможность залога! Выбрал другой ЖК!",
    },
    {
      name: "Игорь Семенов",
      role: "Владелец ресторана",
      initials: "ИС",
      quote:
        "Проверил потенциального партнера – оказалось 15 судебных дел как ответчик и долги 12 млн. Избежал катастрофы. Лучше 50 рублей сейчас чем потом разбираться.",
    },
    {
      name: "Марина Федорова",
      role: "Учитель",
      initials: "МФ",
      quote:
        "Оформила раздел – раздел имущества за 50 рублей вместо 50,000 у юриста. Четко понял свои права и получил справедливую долю квартиры и машины.",
    },
    {
      name: "Анна Петрова",
      role: "Дизайнер-фрилансер",
      initials: "АП",
      quote:
        "Устала от клиентов, которые требуют бесконечные правки. Договор через Кодексис четко прописал все условия и сроки. Доходы выросли на 40%.",
    },
    {
      name: "Дмитрий Козлов",
      role: "ИП",
      initials: "ДК",
      quote:
        "Проверил потенциального партнера – оказалось 15 судебных дел как ответчик и долги 12 млн. Избежал катастрофы. Лучше 50 рублей сейчас чем потом разбираться.",
    },
    {
      name: "Сергей Волков",
      role: "Управляющий недвижимостью",
      initials: "СВ",
      quote:
        "Управляю 20 объектами недвижимостью. Ранше юрист брал 150,000 в месяц за договоры. Теперь Кодексис и получаю лучшее качество по 5,000 через Кодексис и получаю лучше качество.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm font-semibold">Отзывы</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Что думают наши пользователи</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Реальные истории людей, которые защитили себя от рисков и сэкономили деньги благодаря Кодексис
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">{testimonial.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-red-600">{testimonial.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
