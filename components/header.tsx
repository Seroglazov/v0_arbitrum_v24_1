"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, FileText, Briefcase, Home } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/contracts" className="text-sm font-medium hover:text-red-600 transition-colors">
            Договоры
          </Link>
          <Link href="/chat" className="text-sm font-medium hover:text-red-600 transition-colors">
            Чат
          </Link>
          <Link href="/analysis" className="text-sm font-medium hover:text-red-600 transition-colors">
            Анализ договора
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-red-600 transition-colors">
            Тарифы
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-red-600 transition-colors">
              Ресурсы
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/generator/supply" className="flex items-center gap-2 cursor-pointer">
                  <FileText className="h-4 w-4" />
                  Договор поставки
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/generator/employment" className="flex items-center gap-2 cursor-pointer">
                  <Briefcase className="h-4 w-4" />
                  Трудовой договор
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/generator/rent" className="flex items-center gap-2 cursor-pointer">
                  <Home className="h-4 w-4" />
                  Договор аренды
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/contracts"
                className="text-lg font-medium hover:text-red-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Договоры
              </Link>
              <Link
                href="/chat"
                className="text-lg font-medium hover:text-red-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Чат
              </Link>
              <Link
                href="/analysis"
                className="text-lg font-medium hover:text-red-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Анализ договора
              </Link>
              <Link
                href="/pricing"
                className="text-lg font-medium hover:text-red-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                Тарифы
              </Link>
              <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-200">
                <span className="text-sm font-semibold text-gray-500 uppercase">Ресурсы</span>
                <Link
                  href="/generator/supply"
                  className="text-base hover:text-red-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Договор поставки
                </Link>
                <Link
                  href="/generator/employment"
                  className="text-base hover:text-red-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Трудовой договор
                </Link>
                <Link
                  href="/generator/rent"
                  className="text-base hover:text-red-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Договор аренды
                </Link>
              </div>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Войти
                  </Button>
                </Link>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Попробовать</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image src="/images/design-mode/logo.jpeg" alt="Кодексис" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold">Кодексис</span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
              Войти
            </Button>
          </Link>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Попробовать</Button>
        </div>

        <Button className="md:hidden bg-red-600 hover:bg-red-700 text-white text-sm px-3">Попробовать</Button>
      </div>
    </header>
  )
}
