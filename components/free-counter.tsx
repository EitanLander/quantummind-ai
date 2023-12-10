"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constant";
import { Progress } from "@/components/ui/progress";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-model";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export const FreeCounter = ({ apiLimitCount = 0, isPro= false }: FreeCounterProps) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if(isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm mb-4 text-white space-y-2">
            <p>
              נסיונות בחינם {apiLimitCount} / {MAX_FREE_COUNTS}
            </p>

            <Progress className="h-3 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={proModal.onOpen} className="w-full" variant="premium">
            <Zap className="w-4 h-4 mr-2 fill-white" />
            שדרגו לקוואנטום פרו
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
