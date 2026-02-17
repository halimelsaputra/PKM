"use client"

import { CometCard } from "./comet-card"
import { useEffect, useRef, useState } from "react"
import "./profile-card.css"

export function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const cards = [
    { title: "Halim Elsa Putra", code: "Ketua Departemen", img: "/orang1.png", alt: "Portrait Halim" },
    { title: "Dian Islami", code: "Sekretaris Departemen", img: "/orang2.png", alt: "Portrait Dian" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-16 sm:pt-40 pb-24 sm:pb-32 px-4 relative z-10 mb-24 sm:mb-32"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 sm:mb-40 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6">
            <span className="text">Meet Us</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Kenali lebih dekat tim inti yang memimpin Departemen Pengelolaan Kesejahteraan Mahasiswa HMIF.
          </p>
        </div>

        <div
          className={`grid gap-x-12 gap-y-10 md:gap-x-60 md:gap-y-12 grid-cols-1 sm:grid-cols-2 justify-items-center max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {cards.map((card) => (
            <div key={card.code} className="flex justify-center">
              <CometCard>
                <div className="profile-card-wrap">
                  <div className="profile-card">
                    <div className="profile-card-filter"></div>
                    <img
                      loading="lazy"
                      className="profile-card-bg"
                      alt={card.alt}
                      src={card.img}
                    />

                    <div className="profile-card-content">
                      <div className="profile-card-name-wrap">
                        <div className="profile-card-name">{card.title}</div>
                      </div>

                      <div className="profile-card-tags">
                        <span className="profile-card-tag">{card.code}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CometCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
