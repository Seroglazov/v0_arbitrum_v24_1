"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
        <button onClick={handleClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-start gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🍪</span>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Кодексис использует Cookies</h3>
            <p className="text-sm text-slate-600">
              Кодексис использует Cookies для персонализации сервисов. Продолжая пользоваться сайтом, вы автоматически
              соглашаетесь на их обработку. Если не согласны — покиньте сайт или отключите Cookies в браузере.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleAccept} className="flex-1 bg-red-600 hover:bg-red-700 text-white">
            Принять
          </Button>
          <Button variant="outline" onClick={handleClose} className="border-slate-300 bg-transparent">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
