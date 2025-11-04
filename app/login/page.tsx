"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-[#2C3E50] flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#2C3E50]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Договоры
            </Link>
            <Link href="/" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Чат
            </Link>
            <Link href="/" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Анализ договора
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
              Тарифы
            </Link>
            <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-red-500 transition-colors">
              Ресурсы
            </button>
          </nav>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Image src="/images/design-mode/logo.jpeg" alt="Кодексис" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Кодексис</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Войти
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">Попробовать</Button>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#374B5F] rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-xl p-3">
                <Image
                  src="/images/design-mode/logo.jpeg"
                  alt="Кодексис"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">Добро пожаловать</h1>
            <p className="text-gray-300 text-center mb-8">Войдите в свой аккаунт Кодексис</p>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ваш@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#2C3E50] border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-white">
                    Пароль
                  </label>
                  <Link href="#" className="text-sm text-red-500 hover:text-red-400">
                    Забыли пароль?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#2C3E50] border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-medium"
              >
                Войти
              </Button>

              <p className="text-center text-gray-300 text-sm">
                Нет аккаунта?{" "}
                <Link href="/register" className="text-red-500 hover:text-red-400 font-medium">
                  Зарегистрироваться
                </Link>
              </p>
            </form>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="bg-red-600 rounded-lg p-4 text-center">
              <p className="text-white text-sm font-medium">Без скрытых комиссий</p>
            </div>
            <div className="bg-red-600 rounded-lg p-4 text-center">
              <p className="text-white text-sm font-medium">Первый анализ бесплатно</p>
            </div>
            <div className="bg-red-600 rounded-lg p-4 text-center">
              <p className="text-white text-sm font-medium">Результат сразу</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Кодексис защищает ваши права и деньги</h2>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Попробовать бесплатно</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
