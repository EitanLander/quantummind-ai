"use client";

import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FreeCounter } from "@/components/free-counter";
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";

const OpenSans = Open_Sans({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "הבינה המלאכותית",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "צ'אט",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "תמונות",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "וידיאו",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "מוזיקה",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "קוד",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "הגדרות",
    icon: Settings,
    href: "/settings",
    color: "text-cyan-200",
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px" />
          </div>
          <h1 className={cn("text-xl font-bold", OpenSans.className)}>QuantumMind-AI</h1>
        </Link>
        <div className={cn("space-y-1", OpenSans.className)}>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center justify-center flex-1">
                {route.label}
                <route.icon className={cn("h-5 w-5 ml-3", route.color)} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
