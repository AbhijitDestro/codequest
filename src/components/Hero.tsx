import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import { ArrowRightIcon } from 'lucide-react'


const Hero = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <Image src={'/hero.gif'} alt="hero" width={1000} height={1000} className="w-full h-full object-cover absolute inset-0" />
      <div className="absolute w-full flex flex-col items-center justify-center py-28">
        <h2 className="font-bold text-7xl font-game">Start Your</h2>
        <h2 className="text-9xl font-bold font-game text-yellow-400" style={{textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000" }}>Coding Journey</h2>
        <h2 className="text-3xl font-medium font-game mt-5">Beginner friendly coding courses and projects</h2>
        <SignedOut>
          <Button asChild className="mt-5" size="lg" variant="pixel">
              <SignUpButton mode="modal" appearance={{ theme: neobrutalism }}>Get Started</SignUpButton>
            </Button>
        </SignedOut>
        <SignedIn>
          <Button asChild className="mt-5" size="lg" variant="pixel">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </SignedIn>
      </div>
    </div>
  )
}

export default Hero