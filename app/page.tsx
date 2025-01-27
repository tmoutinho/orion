import Image from "next/image"
import ParticleBackground from "./components/ParticleBackground"
import LiveData from "./components/LiveData"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      <Image src="/orion-background.jpg" alt="Orion constellation" layout="fill" objectFit="cover" quality={100} />
      <ParticleBackground />
      <div className="z-10 text-white text-center">
        <h1 className="text-6xl font-bold mb-8">Welcome to Orion Inspired</h1>
        <LiveData />
      </div>
    </main>
  )
}

