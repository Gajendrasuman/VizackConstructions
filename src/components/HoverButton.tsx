"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HoverButtonProps {
  text: string;
  href: string;
}

const HoverButton = ({ text, href }: HoverButtonProps) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)} className="group relative h-12 w-48 overflow-hidden rounded bg-white text-lg shadow-xl">
        {/* Expanding background animation */}
        <div className="absolute left-0 top-0 h-full w-0 bg-orange-500 transition-all duration-300 ease-out group-hover:w-full">

        </div>
        
        {/* Text */}
        <span className="relative z-10 font-bold text-sm text-black transition-all duration-300 group-hover:text-white">
          {text}
        </span>
      </button>
  );
};

export default HoverButton;
