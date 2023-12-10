"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-3xl sm:text-4xl md:text5xl lg:text-6xl space-y-5 font-extrabold">
        <h1>קוונטום יכול לעשות איתכם</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
            <TypewriterComponent 
            options={{
                strings: [
                    "שיחת צ'אט",
                    "לעצב תמונות",
                    "ליצור וידיאו",
                    "להלחין מוזיקה",
                    "לכתוב תיכנות",
                ],
                autoStart: true,
                loop:true
            }}
            />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400"> 
            .בעזרת בינה מלאכותית תוכלו לייצר תוכן פי 10 יותר מהר
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full">
             תתחילו ליצור בחינם
            </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
           .ללא צורך בתשלום
      </div>
    </div>
  );
};
