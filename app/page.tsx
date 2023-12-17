import About from "@/components/about";
import Curriculum from "@/components/curriculum";
import Demo from "@/components/demo";
import Educators from "@/components/educators";
import { Hero } from "@/components/hero";
import { Hero2 } from "@/components/hero2";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Demo />
      <Testimonials />
      <Educators />
      <Curriculum />
      <About />
      <Hero2 />
    </main>
  )
}
