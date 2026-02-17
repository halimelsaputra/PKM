"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative mx-auto mt-10 w-full max-w-4xl bg-black px-5 py-8 text-white sm:px-6 sm:py-10">
      <div className="absolute top-0 -left-120 -right-120 h-px bg-white/20" />

      <div className="relative flex flex-col items-center gap-5 sm:gap-6">
        <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">PKM HMIF</div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-white/80">
          <span>Pengelolaan Kesejahteraan Mahasiswa</span>
          <span>•</span>
          <span>HMIF</span>
          <span>•</span>
          <span>Informatika</span>
        </div>

        <div className="flex items-center gap-1 text-[11px] sm:text-xs text-white/70">
          <span>Made with</span>
          <Heart className="h-3 w-3 text-red-400 fill-red-400" />
          <span>by Departemen PKM HMIF</span>
        </div>
      </div>
    </footer>
  )
}
