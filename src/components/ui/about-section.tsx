import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutSection: React.FC = () => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const words = textRef.current?.querySelectorAll<HTMLSpanElement>(".word");

        if (words) {
            gsap.fromTo(
                words,
                { opacity: 0.3 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
                        end: "bottom 50%",
                        scrub: 1,
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
            <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-secColor" data-aos="fade">
                About
            </h1>
            <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20" data-aos="fade-up">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <div ref={textRef}>
                        <p className="md:text-lg font-medium text">
                            {`Undergraduate Marketing Management student at University Islam Indonesia, interested in digital marketing, and can be a social media designer with a strong understanding of product value and retention time. Enjoys collaborating on developing brand value in digital marketing by implementing creative and innovative ideas with the team and influencers. Through my academic experience and hands-on projects, I have developed a keen interest in how data-driven decisions and effective content can create meaningful connections between brands and their audiences.`.split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-30">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="mt-4 md:text-lg font-medium text">
                            {`I have a strong desire to apply my knowledge of digital marketing, social media trends, and design principles to real-world challenges. By leveraging my skills in graphic design and social media management, i am especially drawn to the fast-paced, ever-evolving nature of digital marketing, where creativity and analytical thinking come together to achieve measurable results. With a strong work ethic and a drive for excellence, I am ready to take on new challenges and further develop my skills in digital marketing.`.split(" ").map((word, index) => (
                                <span key={index} className="word inline-block opacity-30">
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mx-auto">
                    <div className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-4/5">
                        <Image src="/images/profile.png" height={1000} width={1000} className="rounded-xl" alt="Rivaldo Tandoko" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
