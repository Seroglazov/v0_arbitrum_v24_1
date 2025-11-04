"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Check } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  return (
    <div className="min-h-screen bg-[#2C3E50] flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#2C3E50]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/design-mode/logo(1).jpeg"
              alt="Кодексис"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Кодексис</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-[#374B5F] rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-xl p-3">
                <Image
                  src="/images/design-mode/logo(1).jpeg"
                  alt="Кодексис"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-2">Создайте аккаунт</h1>
            <p className="text-gray-300 text-center mb-8">Начните работу с Кодексис бесплатно</p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#2C3E50] border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500"
                />
              </div>

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
                <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                  Пароль
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Минимум 8 символов"
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

              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Минимум 8 символов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gray-500" />
                  <span>Одна заглавная буква</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gray-500" />
                  <span>Одна цифра</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-medium"
              >
                Зарегистрироваться
              </Button>

              <p className="text-center text-gray-300 text-sm">
                Уже есть аккаунт?{" "}
                <Link href="/login" className="text-red-500 hover:text-red-400 font-medium">
                  Войти
                </Link>
              </p>

              <p className="text-xs text-gray-400 text-center">
                Регистрируясь, вы соглашаетесь с{" "}
                <Link href="#" className="text-red-500 hover:text-red-400">
                  Условиями использования
                </Link>{" "}
                и{" "}
                <Link href="#" className="text-red-500 hover:text-red-400">
                  Политикой конфиденциальности
                </Link>
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-white">
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <span>Первый анализ договора бесплатно</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <span>Доступ к ИИ-юристу 24/7</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <span>Безопасное хранение документов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
