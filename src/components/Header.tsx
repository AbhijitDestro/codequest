import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'


const Header = () => {
  return (
    <div className="p-4 max-w-7xl">
        <div className="flex items-center gap-2">
        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
        <h2 className="text-3xl font-bold ">CodeQuest</h2>
        </div>
        <div className="flex justify-end gap-4">
        </div>
        <div>
            <Button variant={"outline"}>Sign In</Button>
        </div>
    </div>
  )
}

export default Header