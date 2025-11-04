import { Users, Home, Building2, Briefcase } from "lucide-react"

export function WhoUsesSection() {
  const categories = [
    {
      icon: Home,
      title: "Малый и средний бизнес",
      description:
        "Защита от рисков в договорах, проверка контрагентов и автоматизация документооборота для роста вашего бизнеса.",
    },
    {
      icon: Users,
      title: "Частные лица",
      description:
        "Помощь в трудовых, семейных, потребительских спорах, анализ любых договоров и защита ваших прав простыми словами.",
    },
    {
      icon: Briefcase,
      title: "HR-специалисты",
      description: "Создание и анализ трудовых договоров, справки по ТК РФ и автоматизация кадрового документооборота.",
    },
    {
      icon: Building2,
      title: "Фрилансеры и ИП",
      description: "Защита от неплательщиков, профессиональные договоры с заказчиками клиентов.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            <Users className="h-4 w-4" />
            <span className="text-sm font-semibold">Пользователи</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Кто использует Кодексис?</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Независимо от того, частное лицо вы или крупная компания — Кодексис адаптируется под ваши потребности и
            повышает эффективность работы с документами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors">
                <div className="bg-slate-700 rounded-lg p-3 w-fit mb-4">
                  <Icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
