import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({ title, description, icon: Icon, iconColor, bgColor }: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center justify-end mb-8">
      <div className="text-right">
        <h2 className="text-3xl font-bold text-shadow">{title}</h2>
        <p className="text-sm font-semibold text-muted-foreground text-shadow">{description}</p>
      </div>
      <div className={cn("mx-2 p-2 w-fit rounded-md", bgColor)}> 
             <Icon className={cn("w-10 h-10", iconColor)} />

      </div>
    </div>
  );
};
