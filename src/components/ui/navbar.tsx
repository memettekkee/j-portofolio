import { useLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const lenis = useLenis();

    return (
        <div className="flex justify-end md:justify-center items-center px-6 md:px-10 xl:px-20 py-4 md:py-6 fixed w-full bg-[#A36340] backdrop-blur-md z-50 text-white" data-aos="fade-down" data-aos-delay="2800">
            {/* <div className="">
                <span className="text-xl md:text-2xl font-semibold tracking-wide" onClick={() => lenis && lenis.scrollTo("#home", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Sycle.dev
                </span>
            </div> */}

            <div className=" hidden md:flex items-center gap-10 text-lg font-semibold tracking-wide">
                <span className="hover:text-[#C3B0A5] transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    About
                </span>
                <span className="hover:text-[#C3B0A5] transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#projects", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Designs
                </span>
                <span className="hover:text-[#C3B0A5] transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#articles", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Articles
                </span>
                <span className="hover:text-[#C3B0A5] transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#technologies", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Experience
                </span>
                <span className="hover:text-[#C3B0A5] transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#contact", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Contact
                </span>
            </div>

            <div className="flex flex-col gap-[6px] md:hidden" onClick={toggleMenu}>
                <span className={`block h-[2px] w-6 bg-white ${isMenuOpen ? "-rotate-45 origin-center translate-y-[8px]" : ""} transition-all duration-200 ease-in-out`}></span>
                <span className={`block h-[2px] bg-white ${isMenuOpen ? "w-0" : "w-6"} transition-all duration-200`}></span>
                <span className={`block h-[2px] w-6 bg-white ${isMenuOpen ? "rotate-45 origin-center -translate-y-[8px]" : ""} transition-all duration-200`}></span>
            </div>

            <div className={`flex md:hidden flex-col gap-2 text-right absolute -right-[200px] top-[60px] bg-white pl-10 pr-4 py-4 text-black rounded-lg ${isMenuOpen ? "-translate-x-[224px]" : ""} transition-all duration-300 ease-in-out`}>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#about", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    About
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#projects", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Designs
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#articles", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Articles
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#technologies", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Experience
                </span>
                <span className="text-lg font-semibold tracking-wide hover:text-cyan-400 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => lenis && lenis.scrollTo("#contact", { offset: -100, easing: cubicBezier(0.65, 0, 0.35, 1), duration: 1 })}>
                    Contact
                </span>
            </div>
        </div>
    );
}