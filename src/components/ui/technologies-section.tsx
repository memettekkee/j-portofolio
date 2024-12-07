import { ReactNode } from "react";

export default function TechnologiesSection() {
    return (
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="technologies">
            <h1 className="mt-20 text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-secColor" data-aos="fade">
                Experiences
            </h1>

            <div className="mt-20 flex justify-center">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-32 md:gap-52 xl:gap-52 space-y-8" data-aos="fade-up">
                    {skills.map((skills) => (
                        <a className="flex items-center gap-4" href={skills.link} key={skills.name}>
                            <span className="font-semibold md:text-lg">{skills.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

const skills: { name: string; link: string }[] = [
    {
        name: "SAP Certification",
        link: 'http://check.upp-sap.com:88/validasi%20sertifikat/hasil%20query.php?id=30303030303130343333303030313133&view=View'
    },
    {
        name: "Certificate Angle of Developing an Entrepreneurial Mindset",
        link: 'https://vle.angel-project.eu/certificates/527caecd09a64b7fb6f1f01d30ce0f18'
    },
    {
        name: "BPSOM Certification",
        link: ''
    },
    {
        name: "Head of Public Relations - Kopma FBE UII",
        link: 'https://kopmafeuii.com/'
    },
    {
        name: "Staff Journalism and Communication - Kopma FBE UII",
        link: 'https://kopmafeuii.com/'
    },
    {
        name: "PDD RAT - Kopma FBE UII",
        link: 'https://kopmafeuii.com/'
    },
    {
        name: "Staff Public Relations - Entrepreneur Community",
        link: 'https://www.instagram.com/p/C60oUULuLaT/?img_index=3&igsh=MXE2YTg4Z3V2enc5YQ=='
    },
    {
        name: "Staff K&K",
        link: 'https://www.instagram.com/p/Cow2jsXBoYo/?img_index=1&igsh=MXByY2ZwN2Uwa3RiYw=='
    },
];
