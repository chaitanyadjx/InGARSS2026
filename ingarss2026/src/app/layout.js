import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "InGARSS 2026 | IEEE Hyderabad",
  description: "IEEE India Geoscience and Remote Sensing Symposium 2026 - The Global Nexus of Earth Observation Technology and AI Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased bg-bone font-sans text-black overflow-x-hidden`}
      >
        <InitialLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
