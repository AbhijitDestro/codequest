import { SignIn } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SignIn appearance={{
        theme: neobrutalism,
      }}/>
    </div>
  )
}