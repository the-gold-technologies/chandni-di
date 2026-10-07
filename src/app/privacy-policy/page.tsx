import React from "react";
import { Metadata } from "next";
import { LegalPolicyViewer } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Chandni Di Foundation",
  description:
    "Learn how Chandni Di Foundation safeguards donor information, student data, and visitor privacy in compliance with Indian non-profit and IT regulations.",
};

export default function PrivacyPolicyPage() {
  return <LegalPolicyViewer initialPolicy="privacy" />;
}
