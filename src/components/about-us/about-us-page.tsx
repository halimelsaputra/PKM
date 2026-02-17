import { HeroSection } from "./hero-section"
import { AboutUsSection } from "./about-us-section"
import Aurora from "./Aurora"
import { ConcepsSection } from "./conceps-section"
import { GeneratingSection } from "./generating-section"
import { Footer } from "./footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <GeneratingSection />
          <ConcepsSection />
          <AboutUsSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
