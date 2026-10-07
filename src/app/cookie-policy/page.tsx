import React from "react";
import { Metadata } from "next";
import { LegalPolicyViewer } from "@/components/legal";

export const metadata: Metadata = {
  title: "Cookie Policy | Chandni Di Foundation",
  description:
    "Learn about how cookies and tracking technologies are used on Chandni Di Foundation's website to ensure security, donation processing, and smooth browsing.",
};

export default function CookiePolicyPage() {
  return <LegalPolicyViewer initialPolicy="cookies" />;
}
