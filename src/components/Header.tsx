import Image from 'next/image'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Grid2X2 } from 'lucide-react'

const courses =[
  {
     id:1,
     name:"HTML",
     desc:"Learn the fundamentals of HTML and build the structure of modern web pages",
     path:"/courses/1/details",
  },
  {
     id:2,
     name:"CSS",
     desc:"Learn the fundamentals of CSS and style modern web pages",
     path:"/courses/2/details",
  },
  {
     id:3,
     name:"JavaScript",
     desc:"Learn the fundamentals of JavaScript and build interactive web pages",
     path:"/courses/3/details",
  },
  {
     id:4,
     name:"React",
     desc:"Learn the fundamentals of React and build interactive web pages",
     path:"/courses/4/details",
  },
  {
     id:5,
     name:"Node.js",
     desc:"Learn the fundamentals of Node.js and build interactive web pages",
     path:"/courses/5/details",
  },
]


const Header = () => {
  return (
    <div className="p-4 max-w-7xl flex items-center justify-between mx-auto">
      <div className="flex items-center gap-2">
        <Image src={'/logo.png'} alt="logo" width={40} height={40} />
        <h2 className="text-4xl font-medium ">CodeQuest</h2>
      </div>
      <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px] p-4">
                  {courses.map((course) => (
                    <div key={course.id} className="p-2 hover:bg-accent rounded-xl cursor-pointer">
                       <h2 className="font-medium">{course.name}</h2>
                       <p className="text-sm text-gray-500">{course.desc}</p>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={'/projects'}>Projects</Link>  
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={'/pricing'}>Pricing</Link>  
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href={'/contact'}>Contact Us</Link>  
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <Button variant={"outline"}>Sign In</Button>
      </div>
    </div>
  )
}

export default Header