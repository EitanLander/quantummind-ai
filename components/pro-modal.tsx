"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "@/hooks/use-pro-model";
import { Badge } from "@/components/ui/badge";
import { Code, MessageSquare, Music, Video , Image, Check, Zap} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tools = [
    {
      label: "צ'אט עם קוואנטום",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "מייצר תמונות",
      icon: Image,
      color: "text-pink-600",
      bgColor: "bg-pink-600/10",
    },
    {
      label: "מייצר וידיאו",
      icon: Video,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
    },
    {
      label: "נגן מוזיקה",
      icon: Music,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      label: "מתכנת קוד",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
  ];

export const ProModal = () => {

    const proModal = useProModal();
    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2 text-black">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                    <Badge className="uppercase text-sm py-1" variant="premium">
                    pro
                    </Badge>   
                        שדרגו לגרסא קוואנטום פרו
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                    {tools.map((tool) => (
                        <Card
                        key={tool.label}
                        className="p-3 border-black/5 flex items-center justify-between">
                            <Check className="text-primary w-8 h-8"/>
                        <div className="flex items-center gap-x-4">
                        <div className="font-semibold text-sm">
                           {tool.label} 
                        </div>
                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                        <tool.icon className={cn("w-6 h-6",tool.color)}/>
                        </div>
                        </div>
                        </Card>
                    ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter >
                    <Button
                    size="lg"
                    variant="premium"
                    className="w-full">
                        <Zap className="w-4 h-4 mr-2 fill-white"/>
                            שדרג לי את הקוואנטום
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
    }