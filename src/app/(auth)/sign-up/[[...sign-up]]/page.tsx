import { SignUp } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignUp appearance={{
        theme: neobrutalism,
      }}/>
    </div>
  )
}