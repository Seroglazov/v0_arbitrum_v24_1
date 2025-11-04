import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/design-mode/logo.jpeg" alt="Кодексис" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Кодексис</span>
            </div>
            <p className="text-slate-400 text-sm">ИИ-помощник для юридической защиты 24/7</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/contracts" className="hover:text-white transition-colors">
                  Договоры
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="hover:text-white transition-colors">
                  Анализ
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-white transition-colors">
                  Чат
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Тарифы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Помощь
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Документация
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 Кодексис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
