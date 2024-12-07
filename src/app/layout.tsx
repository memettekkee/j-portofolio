import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";
import SmoothScrolling from "@/components/ui/smooth-scroll";

const wixMadeForDisplay = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jihan Athaaya | Social Media Specialist",
    description: "Jihan Athaaya's web portfolio",
    icons: {
        icon: "/images/logo.jpeg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="">
            <body className={`${wixMadeForDisplay.className} main-bg`}>
                <Suspense fallback={<Loading />}>
                    <SmoothScrolling>{children}</SmoothScrolling>
                </Suspense>
            </body>
        </html>
    );
}
