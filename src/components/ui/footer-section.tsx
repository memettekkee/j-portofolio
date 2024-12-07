import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function FooterSection() {
    return (
        <div className="mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto text-center lg:text-left overflow-y-hidden" id="footer">
            <div className="mb-10 text-gray-500 flex flex-col lg:flex-row justify-between text-sm md:text-base" data-aos="fade-up" data-aos-offset="0">
                <div>
                    <p className="hidden lg:block">
                        Coded in Visual Studio Code by{" "}
                        <Link href="https://www.linkedin.com/in/muhammad-met/" target="_blank" className="text-secColor font-medium hover:text-mainColor transition-all duration-150 ease-in-out">
                            Muhammad.
                        </Link>
                    </p>
                

                    <p className="mt-4">
                        Inspired by{" "}
                        <Link href="https://github.com/rtrivaldo/portfoliov2" target="_blank" className="text-secColor font-medium hover:text-mainColor transition-all duration-150 ease-in-out">
                                Rivaldo Tandoko
                        </Link>
                        .
                    </p>
                </div>
                <div className="">
                    <p>© 2024 Jihan Athaaya -- Yogyakarta, Indonesia</p>

                    <div className="mt-4 flex items-center gap-6 text-xl lg:text-2xl justify-center lg:justify-start">
                        <Link href="https://www.linkedin.com/in/jihanathaaya/" className="hover:text-secColor transition-all duration-150 ease-in-out">
                            <FaLinkedin />
                        </Link>
                        <Link href="https://www.instagram.com/jihan_al_idrus/profilecard/?igsh=MWl2dG0xdjhreXZrZw==" className="hover:text-secColor transition-all duration-150 ease-in-out">
                            <FaInstagram />
                        </Link>
                        <Link href="mailto:athaayajihan@gmail.com" className="hover:text-secColor transition-all duration-150 ease-in-out">
                            <IoMdMail />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
