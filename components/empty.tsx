import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
           <div className="relative h-80 w-96">
            <Image
            alt="Empty"
            fill
            src="/empty.png"
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
           </div>
           <p className="text-muted-foreground text-sm text-center">
            {label}
           </p>
        </div>
    ) ;
}