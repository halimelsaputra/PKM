"use client"

import { useEffect, useState } from "react"

const features = [
  {
    number: "01",
    title: "Pengembangan Potensi",
    description:
      "Kami hadir untuk meningkatkan kreativitas dan bakat mahasiswa melalui berbagai program yang mendukung pengembangan diri di lingkungan kampus.",
  },
  {
    number: "02",
    title: "Wadah Aspirasi",
    description:
      "PKM menjadi tempat bagi mahasiswa untuk menyampaikan aspirasi dan memperjuangkan hak mahasiswa agar tercipta suasana belajar yang lebih baik.",
  },
  {
    number: "03",
    title: "Sinergi Birokrasi",
    description:
      "Kami berperan mensinergikan kepentingan mahasiswa dengan kebijakan pihak birokrasi kampus untuk mencapai tujuan bersama secara efektif.",
  },
  {
    number: "04",
    title: "Kesejahteraan dan Relasi",
    description:
      "Kami menangani urusan kesejahteraan mahasiswa di bidang akademik maupun non-akademik serta mempererat hubungan antar mahasiswa dan alumni Informatika.",
  },
]

export function GeneratingSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("apa-itu-pkm")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="apa-itu-pkm"
      className="pt-16 sm:pt-40 pb-24 sm:pb-32 px-4 relative z-10 mb-24 sm:mb-32"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
            Apa Itu{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PKM?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-balance leading-relaxed">
            Departemen Pengelolaan Kesejahteraan Mahasiswa adalah bagian dari HMIF yang berfungsi untuk meningkatkan potensi serta memperjuangkan hak dan aspirasi mahasiswa Informatika. Kami bekerja untuk menciptakan lingkungan yang lebih suportif dengan menjadi jembatan komunikasi antara mahasiswa dan birokrasi kampus.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl font-bold text-white/20 group-hover:text-white/40 transition-colors duration-300 select-none">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
