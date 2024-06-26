import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ContactPage from "@/components/ContactPage/ContactPage";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container">
          <Hero />
          <Skills />
          <WorkExperience />
          <ContactPage />
        </div>
        <Footer />
        {children}
      </body>
    </html>
  );
}
