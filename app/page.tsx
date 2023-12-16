import Demo from "@/components/demo";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Demo />
    </main>
  )
}
