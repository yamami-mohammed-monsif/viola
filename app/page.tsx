import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import MainSection from '@/components/MainSection'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      <Hero />
      <Testimonials />
      <MainSection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
