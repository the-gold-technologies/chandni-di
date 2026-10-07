import { Metadata } from "next";
import { ContactHeroSection, ContactSection } from "./components";

export const metadata: Metadata = {
  title:
    "Contact Us | Chandni Di — Let's Work Together Towards a Child's Future",
  description:
    "Whether you want to support a child's education, volunteer, explore a partnership, or learn more about our work, we would love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (Landing Page style with ambient photography blend) */}
      <ContactHeroSection />

      {/* 2. Main Contact Section (Minimalist form and clean contact details) */}
      <ContactSection />
    </main>
  );
}
