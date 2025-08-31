import Mission from '@/components/Mission'
import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/layout/Footer'
import Service from '@/components/Service'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Analytics />
      <Hero />
      <Mission />
      <Service />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
