import {
  FileText,
  Car,
  Home,
  AlertCircle,
  Users,
  TrendingUp,
  Scale,
  DollarSign,
  Heart,
  BookOpen,
  Scroll,
  Shield,
  Briefcase,
  Building,
} from "lucide-react"

export function SolutionsSection() {
  const solutions = [
    {
      icon: FileText,
      title: "Трудовые споры",
      description: "Уважайте свои права при увольнении или невыплате зарплаты",
    },
    {
      icon: Car,
      title: "Автомобильные сделки",
      description: "Безопасно купите или продайте автомобиль с проверкой документов",
    },
    {
      icon: Home,
      title: "Покупка квартиры",
      description: "Проанализируйте договор купли-продажи и узнайте возможные риски при покупке",
    },
    {
      icon: AlertCircle,
      title: "Жалоба на услуги",
      description: "Создайте претензию на основе закона о защиталище в порядке получения компенсации",
    },
    {
      icon: Users,
      title: "Семейные вопросы",
      description: "Оформите брачный договор или защитите себя в разводе и имущественных спорах",
    },
    {
      icon: TrendingUp,
      title: "Аренда жилья",
      description: "Изучите свои интересы в договоре аренды и узнайте сроки сдачи на 2 года",
    },
    { icon: Scale, title: "Трудовые споры", description: "Уважайте свои права при увольнении или невыплате зарплаты" },
    {
      icon: DollarSign,
      title: "Налоговые споры",
      description: "Найдите информацию по налоговой и процедуре налогового контроля",
    },
    {
      icon: Heart,
      title: "Наследственные дела",
      description: "Оформите наследство правильно и избежьте семейных ссор",
    },
    {
      icon: BookOpen,
      title: "Исследование законов",
      description: "Автоматизируйте работу с документами и учитесь интересы компании",
    },
    {
      icon: Scroll,
      title: "Потребительские права",
      description: "Уважайте свои права при покупке неправильного товара или услуги",
    },
    {
      icon: Shield,
      title: "Медицинские споры",
      description: "Узнайте на процедуре медицинского лечения или врачебные ошибки",
    },
    {
      icon: Briefcase,
      title: "Создание договоров",
      description: "Создайте любой договор за минуты - от оранжа до трудового соглашения",
    },
    {
      icon: Building,
      title: "Помощь для бизнеса",
      description: "Автоматизируйте работу с документами и учитайте интересы компании",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-semibold">Решения</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">В каких ситуациях поможет сервис?</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Анализ договоров, справочная информация по законодательству и создание документов для разных жизненных
          ситуаций
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-red-300 transition-all text-center hover:bg-red-50"
            >
              <Icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-xs md:text-sm font-medium text-gray-900 leading-tight">{solution.title}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
