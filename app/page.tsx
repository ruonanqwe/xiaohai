import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Products } from "@/components/Products"
import { Courses } from "@/components/Courses"
import { Experts } from "@/components/Experts"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Products />
        <Courses />
        <Experts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

