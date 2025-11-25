"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gamepad2, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-primary p-4 rounded-none border-4 border-black">
            <Gamepad2 className="size-12 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold font-game mb-4">404</h1>
        <h2 className="text-3xl font-bold font-game mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for seems to have disappeared into the digital void.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="font-game">
            <Link href="/">
              <ArrowLeft className="size-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="font-game">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;