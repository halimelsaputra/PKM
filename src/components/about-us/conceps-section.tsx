"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "./testimonials-column"

export function ConcepsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "Kegiatan rutin mengenakan seragam kebanggaan sebagai identitas dan bentuk kekompakan warga Informatika.",
      name: "PDH DAY",
      role: "Identitas & Kekompakan",
    },
    {
      text: "Acara kumpul bersama untuk mempererat silaturahmi antar angkatan agar hubungan sesama mahasiswa tetap terjaga.",
      name: "INTEGER",
      role: "Informatika Temu Generasi",
    },
    {
      text: "Program khusus untuk menyambut dan memberikan pembekalan karakter serta akademik bagi mahasiswa baru Informatika.",
      name: "PAKARMARU",
      role: "Pembinaan Akademik dan Karakter Mahasiswa Baru",
    },
    {
      text: "Pusat informasi bermanfaat yang disajikan khusus untuk membantu kebutuhan sehari-hari mahasiswa selama masa perkuliahan.",
      name: "INF PEDIA",
      role: "Informasi Mahasiswa",
    },
    {
      text: "Sesi berbagi pengalaman bersama narasumber inspiratif untuk membuka wawasan dan memberikan motivasi bagi mahasiswa.",
      name: "GIT",
      role: "Guest Star Inspiring Talk",
    },
    {
      text: "Forum diskusi terbuka sebagai sarana mahasiswa untuk menyampaikan aspirasi dan membahas isu-isu kampus secara langsung.",
      name: "OPTIC",
      role: "Open Talk Informatics",
    },
    {
      text: "Momen perpisahan yang diadakan untuk mengapresiasi kontribusi pengurus dan merayakan kelulusan mahasiswa.",
      name: "HMIF Farewell",
      role: "Perpisahan & Apresiasi",
    },
    {
      text: "Program khusus yang difokuskan untuk pemberdayaan serta ruang diskusi bagi mahasiswi Informatika agar lebih aktif dan berani berkarya.",
      name: "Women Empowering & Women Talk",
      role: "Pemberdayaan Mahasiswi",
    },
  ]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative pt-16 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 z-10 mb-24 sm:mb-32"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight text-balance">
            Program Kerja <span className="font-bold">PKM</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            daftar kegiatan dan program unggulan yang kami rancang untuk mendukung kesejahteraan serta mempererat solidaritas mahasiswa Informatika.
          </p>
        </div>

        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden">
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(3, 6)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(5, 8)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
