"use client"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface HoverButtonProps {
  text: string;
  href: string;
  className?: string;
}

const HoverButton = ({ text, href, className }: HoverButtonProps) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)} className={cn("group relative h-12 w-48 overflow-hidden hoverButton rounded bg-white text-lg shadow-xl",)}>
        {/* <div className="absolute left-0 top-0 h-full w-0 hoverButton bg-orange-400 transition-all duration-300 ease-out group-hover:w-full ">

        </div> */}
        
        <span className="relative z-10 font-bold text-sm text-black transition-all duration-300 group-hover:text-white">
          {text}
        </span>
      </button>
  );
};

export default HoverButton;
