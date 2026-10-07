import React from "react";
import { Metadata } from "next";
import { LegalPolicyViewer } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chandni Di Foundation",
  description:
    "Read the terms and conditions governing website use, charitable donations, volunteer engagement, and 80G tax exemptions for Chandni Di Foundation.",
};

export default function TermsAndConditionsPage() {
  return <LegalPolicyViewer initialPolicy="terms" />;
}
