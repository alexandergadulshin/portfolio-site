import { ToastContainer } from "react-toastify";
import { Inter, Jost } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import "swiper/css/bundle";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: false });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap", preload: false });

const title = `${site.name}: web design and AI tools for small businesses`;
const description = "Freelance website design and AI tool installation for small business owner-operators.";

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    openGraph: { type: "website", siteName: site.name, title, description, url: "/" },
};

export const viewport: Viewport = { themeColor: "#09090b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jost.variable}`}>
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
