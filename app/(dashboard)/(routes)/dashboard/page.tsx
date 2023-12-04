"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Image, MessageSquare, Music, Video } from "lucide-react";
import { useRouter } from "next/navigation";

import { Rubik, Open_Sans } from 'next/font/google';


const RubikFont = Rubik({
    weight: "600",
    subsets: ["hebrew"],
  });

  const OpenSans = Open_Sans({ 
    weight: "800" ,
    subsets: ["latin"]
});
  

const tools = [
  {
    label: "צ'אט עם קוואנטום",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "מייצר תמונות",
    icon: Image,
    color: "text-pink-600",
    bgColor: "bg-pink-600/10",
    href: "/image",
  },
  {
    label: "מייצר וידיאו",
    icon: Video,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    href: "/video",
  },
  {
    label: "נגן מוזיקה",
    icon: Music,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    href: "/music",
  },
  {
    label: "מתכנת קוד",
    icon: Code,
    color: "text-green-600",
    bgColor: "bg-green-600/10",
    href: "/code",
  },
];

const DashboardPage = () => {
    const router= useRouter();
  return (
    <div className={cn("text-xl", RubikFont.className)}>
      <div className={cn("mb-8 space-y-4", RubikFont.className)}>
        <h2 className={cn("text-2xl md:text-4xl font-bold text-center text-shadow",OpenSans.className)}>QuanTumMind-AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center text-shadow">נסו וגלו עולם שלם של בינה מלאכותית - הכל במקום אחד</p>
      </div>
      <div className=" p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Card
          onClick={()=> router.push(tool.href)}
          key={tool.href}
          className=" p-3 lg:p-16 border-black/5 flex items-center justify-between hover:shadow-xl hover:bg-white/50 transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
                </div>
                <div className="font-semibold">
                    {tool.label}
                </div>
            </div>
                <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
