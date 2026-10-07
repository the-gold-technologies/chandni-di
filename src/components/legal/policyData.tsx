import React from "react";
import Link from "next/link";
import { ShieldCheck, FileCheck, Cookie } from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
}

export interface LegalSectionData {
  id: string;
  number: string;
  title: string;
  callout?: {
    type: "info" | "warning" | "success";
    title: string;
    text: string;
  };
  content: React.ReactNode;
}

export interface PolicyDocument {
  id: "privacy" | "terms" | "cookies";
  name: string;
  href: string;
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  readingTime: string;
  icon: typeof ShieldCheck;
  tocItems: TOCItem[];
  sections: LegalSectionData[];
}

export const POLICIES: Record<string, PolicyDocument> = {
  privacy: {
    id: "privacy",
    name: "Privacy Policy",
    href: "/privacy-policy",
    badge: "Privacy Policy",
    title: "Privacy & Data Protection Policy",
    subtitle:
      "Chandni Di Foundation is committed to transparency, donor trust, and the utmost protection of children and community beneficiaries.",
    lastUpdated: "October 2026",
    readingTime: "7 min",
    icon: ShieldCheck,
    tocItems: [
      { id: "introduction", title: "Introduction & Commitment" },
      { id: "information-collected", title: "Information We Collect" },
      { id: "child-safeguarding", title: "Child & Beneficiary Protection" },
      { id: "how-we-use-data", title: "How We Use Your Data" },
      { id: "financial-security", title: "Payment Security & 80G Receipts" },
      { id: "data-sharing", title: "Third-Party & Regulatory Disclosure" },
      { id: "cookies-tracking", title: "Cookies & Usage Analytics" },
      { id: "data-retention", title: "Data Storage & Retention" },
      { id: "your-rights", title: "Your Rights & Choices" },
      { id: "grievance-officer", title: "Grievance Redressal Mechanism" },
    ],
    sections: [
      {
        id: "introduction",
        number: "01",
        title: "Introduction & Commitment to Privacy",
        callout: {
          type: "info",
          title: "Statutory Framework",
          text: "This Privacy Policy is formulated in accordance with the Information Technology Act, 2000, the Digital Personal Data Protection Act (DPDPA), 2023, and applicable Non-Profit regulations in India.",
        },
        content: (
          <>
            <p>
              Chandni Di Foundation (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;the Organisation&rdquo;) is a registered non-profit trust
              operating educational centres, bridge schooling, and career
              sponsorship programmes across Delhi-NCR. We hold our donors,
              volunteers, partners, and the children we support in the highest
              esteem.
            </p>
            <p>
              This policy outlines the principles governing how personal
              information is gathered, managed, secured, and utilised when you
              visit <strong>chandnidi.org</strong>, make a charitable donation,
              volunteer for our activities, or communicate with our team.
            </p>
          </>
        ),
      },
      {
        id: "information-collected",
        number: "02",
        title: "Information We Collect",
        content: (
          <>
            <p>
              We only collect information necessary to fulfil our charitable
              objectives, process donations legally, coordinate volunteers, and
              provide transparent programmatic reporting:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>Donor Information:</strong> Full name, email address,
                mobile phone number, billing address, and Permanent Account
                Number (PAN) which is mandated under Section 80G of the Indian
                Income Tax Act for tax exemption certificates.
              </li>
              <li>
                <strong>Volunteer &amp; Partner Details:</strong> Academic
                background, areas of interest (mentoring, teaching, community
                drives), organisation name (for CSR partners), and communication
                records.
              </li>
              <li>
                <strong>Technical Browsing Data:</strong> Anonymised IP
                addresses, browser types, device categories, operating systems,
                and page interaction timestamps collected via cookies to
                optimize site performance.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "child-safeguarding",
        number: "03",
        title: "Child & Beneficiary Safeguarding Policy",
        callout: {
          type: "warning",
          title: "Strict Minor Protection Protocol",
          text: "Photographs, academic journey records, and testimonials of minors are published strictly with verified written guardian consent and child rights safeguards. We never publish sensitive home addresses or direct contact details of minors.",
        },
        content: (
          <>
            <p>
              As an organization working directly with vulnerable children from
              street and slum communities, child protection is our paramount
              responsibility.
            </p>
            <p>
              All student case studies, academic milestones, and media presented
              on this website are shared solely to demonstrate impact and
              advocate for educational access. Direct, unmonitored communication
              between external visitors and enrolled children is strictly
              prohibited to ensure child safety in compliance with the POCSO Act
              and child welfare protocols.
            </p>
          </>
        ),
      },
      {
        id: "how-we-use-data",
        number: "04",
        title: "How We Use Your Personal Data",
        content: (
          <>
            <p>
              The information we collect is utilized exclusively for genuine
              organizational activities:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                Issuing official tax receipts and filing Form 10BE with the
                Income Tax Department for donor 80G compliance.
              </li>
              <li>
                Sharing periodic student progress updates, annual impact
                reports, and foundation newsletters (donors may unsubscribe at
                any time).
              </li>
              <li>
                Reviewing volunteer applications, scheduling weekend tutoring
                sessions, and coordinating field campaigns.
              </li>
              <li>
                Facilitating CSR compliance documentation, project proposals,
                and institutional partner reviews.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "financial-security",
        number: "05",
        title: "Payment Security & 80G Tax Exemption",
        callout: {
          type: "success",
          title: "Zero Card Data Storage",
          text: "Chandni Di Foundation never stores card CVVs, PINs, bank credentials, or full card numbers on our servers. All financial operations are processed via RBI-licensed, PCI-DSS Level 1 compliant payment gateways.",
        },
        content: (
          <>
            <p>
              Online contributions are processed through encrypted, trusted
              payment gateways (such as Razorpay). Transmission of financial
              credentials is protected end-to-end using industry-standard TLS
              1.3 cryptographic protocols.
            </p>
            <p>
              In compliance with the Central Board of Direct Taxes (CBDT)
              notifications, donor PAN numbers are securely utilized to file
              official donation statements so that tax exemptions reflect
              seamlessly in the donor&apos;s Annual Information Statement (AIS)
              and Form 26AS.
            </p>
          </>
        ),
      },
      {
        id: "data-sharing",
        number: "06",
        title: "Third-Party Sharing & Strict Non-Sale Policy",
        content: (
          <>
            <p>
              <strong>
                We will never sell, rent, trade, or commercially monetize donor
                or volunteer databases.
              </strong>
            </p>
            <p>
              Personal data is only disclosed under the following strictly
              regulated circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>Statutory Requirements:</strong> When mandated by Indian
                laws, court orders, or statutory filings with the Income Tax
                Department or NGO Darpan.
              </li>
              <li>
                <strong>Verified Service Providers:</strong> Trusted technical
                partners (e.g., transactional email systems, payment gateways,
                cloud hosting) bound by strict confidentiality non-disclosure
                agreements.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "cookies-tracking",
        number: "07",
        title: "Cookies & Analytics Usage",
        content: (
          <>
            <p>
              Our platform uses essential and analytical cookies to ensure safe
              navigation, facilitate secure donation transactions, and
              understand user traffic patterns.
            </p>
            <p>
              For complete technical details on how to manage, view, or disable
              cookies, please refer to our dedicated{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-brand-700 hover:underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        id: "data-retention",
        number: "08",
        title: "Data Storage & Retention",
        content: (
          <>
            <p>
              Donor records, contribution amounts, and receipt copies are
              maintained for a minimum of 7 (seven) financial years to comply
              with Indian non-profit audit laws, trust regulations, and the
              Income Tax Act, 1961.
            </p>
            <p>
              Non-statutory information (such as newsletter subscriptions or
              general inquiries) can be updated or deleted upon verified written
              request.
            </p>
          </>
        ),
      },
      {
        id: "your-rights",
        number: "09",
        title: "Your Rights & Control",
        content: (
          <>
            <p>
              Under Indian data protection frameworks, you have the right to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                Access and review the personal information held by our
                foundation.
              </li>
              <li>
                Request corrections of any inaccurate or outdated contact
                information.
              </li>
              <li>
                Opt out of marketing communications or newsletter mailings at
                any time via the &ldquo;Unsubscribe&rdquo; link in emails.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "grievance-officer",
        number: "10",
        title: "Grievance Redressal Mechanism",
        content: (
          <p>
            In compliance with the Information Technology (Intermediary
            Guidelines and Digital Media Ethics Code) Rules, 2021, and DPDPA
            2023, the contact details of the Grievance Officer for Chandni Di
            Foundation are provided below.
          </p>
        ),
      },
    ],
  },
  terms: {
    id: "terms",
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
    badge: "Terms & Conditions",
    title: "Terms of Use & Donation Agreement",
    subtitle:
      "These terms govern your access to the Chandni Di Foundation digital platform, donation processes, and community engagement.",
    lastUpdated: "October 2026",
    readingTime: "6 min",
    icon: FileCheck,
    tocItems: [
      { id: "acceptance", title: "Acceptance of Terms" },
      { id: "nonprofit-scope", title: "Non-Profit Scope & Mission" },
      { id: "donation-terms", title: "Donation Terms & Allocation" },
      { id: "tax-exemption", title: "80G Tax Exemption & Form 10BE" },
      { id: "refund-policy", title: "Refund & Cancellation Policy" },
      { id: "intellectual-property", title: "Intellectual Property & Media" },
      { id: "visitor-conduct", title: "User Conduct & Child Safeguards" },
      { id: "external-services", title: "Third-Party Gateways & Links" },
      { id: "disclaimers", title: "Disclaimers & Liability" },
      { id: "governing-law", title: "Governing Law & Jurisdiction" },
    ],
    sections: [
      {
        id: "acceptance",
        number: "01",
        title: "Acceptance of Terms",
        callout: {
          type: "info",
          title: "Binding Legal Agreement",
          text: "By accessing or using this website (chandnidi.org), making a contribution, or signing up as a volunteer, you agree to be bound by these Terms and Conditions and our Privacy Policy.",
        },
        content: (
          <>
            <p>
              Please read these Terms &amp; Conditions carefully before
              utilizing the online services offered by Chandni Di Foundation
              (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
              Organisation&rdquo;).
            </p>
            <p>
              If you do not agree with any part of these terms, please refrain
              from accessing the website or utilizing our digital donation
              facilities.
            </p>
          </>
        ),
      },
      {
        id: "nonprofit-scope",
        number: "02",
        title: "Non-Profit Scope & Mission",
        content: (
          <>
            <p>
              Chandni Di Foundation is registered as an Indian non-profit public
              charitable trust dedicated to educating street and underprivileged
              children, running bridge schools, and providing youth vocational
              training across Delhi-NCR.
            </p>
            <p>
              All digital services, campaigns, and donation collection channels
              are operated solely in furtherance of our non-profit educational
              and social welfare objectives.
            </p>
          </>
        ),
      },
      {
        id: "donation-terms",
        number: "03",
        title: "Charitable Donations & Fund Allocation",
        callout: {
          type: "success",
          title: "100% Program Allocation Integrity",
          text: "All donations received are directed towards classroom instruction, teaching aids, nutrition supplements, uniform kits, and formal schooling enrollment drives.",
        },
        content: (
          <>
            <p>When you donate to Chandni Di Foundation through our website:</p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                You confirm that you are an Indian citizen or authorized entity
                using legitimate Indian payment instruments (UPI, Net Banking,
                Debit/Credit Card) in Indian National Rupees (INR).
              </li>
              <li>
                You certify that funds contributed are from legitimate personal
                or corporate sources and not derived from any unlawful
                activities.
              </li>
              <li>
                Contributions are classified as voluntary charitable donations
                and do not entitle the donor to commercial consideration or
                equity.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "tax-exemption",
        number: "04",
        title: "Section 80G Tax Exemption & Form 10BE",
        content: (
          <>
            <p>
              Donations to Chandni Di Foundation are eligible for 50% tax
              exemption under Section 80G of the Indian Income Tax Act, 1961.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>PAN Requirement:</strong> To receive an 80G certificate,
                donors must furnish their valid Permanent Account Number (PAN)
                and postal address during donation checkout.
              </li>
              <li>
                <strong>Form 10BE Generation:</strong> In compliance with
                statutory Central Board of Direct Taxes (CBDT) guidelines, we
                file annual statements of donations in Form 10BD, enabling
                donors to download Form 10BE directly.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "refund-policy",
        number: "05",
        title: "Donation Refund & Cancellation Policy",
        callout: {
          type: "warning",
          title: "Voluntary Contribution Policy",
          text: "As charitable donations are immediately committed to ongoing community educational programs, donations are generally non-refundable once processed.",
        },
        content: (
          <>
            <p>
              We maintain clear policies regarding transaction rectifications:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>Technical Errors or Erroneous Charges:</strong> In cases
                of verified technical errors (such as duplicate transaction
                deductions due to banking gateway timeouts), donors must notify
                our team within 7 (seven) business days at{" "}
                <strong>contact@chandnidi.org</strong> with transaction
                reference numbers and bank proof.
              </li>
              <li>
                <strong>Rectification Process:</strong> Verified erroneous
                deductions will be reviewed and refunded to the original payment
                method within 10 to 14 working days after gateway
                reconciliation.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "intellectual-property",
        number: "06",
        title: "Intellectual Property & Media Use",
        content: (
          <>
            <p>
              All materials published on this website—including the Chandni Di
              Foundation emblem, curriculum materials, photographs, case
              studies, and visual assets—are protected intellectual property of
              the foundation.
            </p>
            <p>
              No person or entity may copy, reproduce, repurpose, or distribute
              photographs of enrolled children or organisation assets for
              commercial purposes without written authorization from the Board
              of Trustees.
            </p>
          </>
        ),
      },
      {
        id: "visitor-conduct",
        number: "07",
        title: "User Conduct & Child Safeguards",
        content: (
          <>
            <p>When accessing our platform or volunteering, you agree to:</p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                Respect child safeguarding principles and refrain from any
                unauthorized contact or exploitation of enrolled beneficiaries.
              </li>
              <li>
                Not engage in automated scraping, denial-of-service attempts, or
                unauthorized vulnerability probing of our servers.
              </li>
              <li>
                Provide truthful information when registering as a volunteer or
                CSR partner.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "external-services",
        number: "08",
        title: "Third-Party Services & Payment Gateways",
        content: (
          <>
            <p>
              Our website interfaces with third-party payment gateways (such as
              Razorpay) to process financial contributions securely.
            </p>
            <p>
              Your interactions with payment gateways are governed by their
              respective security terms and privacy policies. Chandni Di
              Foundation is not liable for temporary gateway downtime or
              banking-side network failures.
            </p>
          </>
        ),
      },
      {
        id: "disclaimers",
        number: "09",
        title: "Disclaimers & Limitation of Liability",
        content: (
          <>
            <p>
              While Chandni Di Foundation strives to ensure complete accuracy of
              all materials, information is provided on an &ldquo;as is&rdquo;
              basis without warranties of any kind.
            </p>
            <p>
              To the fullest extent permissible by Indian law, Chandni Di
              Foundation and its trustees shall not be held liable for indirect,
              incidental, or consequential damages resulting from website access
              or downtime.
            </p>
          </>
        ),
      },
      {
        id: "governing-law",
        number: "10",
        title: "Governing Law & Jurisdiction",
        content: (
          <p>
            These Terms &amp; Conditions are governed by and construed in
            accordance with the substantive laws of India. Any legal dispute or
            claim arising out of website usage or donations shall be subject to
            the exclusive jurisdiction of the competent courts in New Delhi,
            India.
          </p>
        ),
      },
    ],
  },
  cookies: {
    id: "cookies",
    name: "Cookie Policy",
    href: "/cookie-policy",
    badge: "Cookie Policy",
    title: "Cookie & Tracking Technologies Policy",
    subtitle:
      "This policy details how Chandni Di Foundation utilizes cookies to maintain website integrity, ensure secure donation processing, and enhance user experience.",
    lastUpdated: "October 2026",
    readingTime: "5 min",
    icon: Cookie,
    tocItems: [
      { id: "what-are-cookies", title: "What Are Cookies?" },
      { id: "why-we-use", title: "Why We Use Cookies" },
      { id: "cookie-categories", title: "Categories of Cookies We Use" },
      { id: "donation-security", title: "Donation & Session Security" },
      {
        id: "third-party-cookies",
        title: "Third-Party Media & Embedded Content",
      },
      { id: "manage-cookies", title: "How to Manage & Disable Cookies" },
      { id: "policy-updates", title: "Policy Revisions" },
      { id: "contact-inquiries", title: "Inquiries & Contact" },
    ],
    sections: [
      {
        id: "what-are-cookies",
        number: "01",
        title: "What Are Cookies?",
        callout: {
          type: "info",
          title: "Browser Storage Files",
          text: "Cookies are small alphanumeric text files stored on your computer or mobile device when you browse websites. They help the platform remember your browser preferences and ensure smooth navigation.",
        },
        content: (
          <>
            <p>
              When you visit <strong>chandnidi.org</strong>, small data files
              known as cookies or browser local storage entries may be stored on
              your web browser.
            </p>
            <p>
              These files enable the website to function smoothly, recognize
              your device across subsequent visits, and help us understand which
              educational campaigns resonate most with visitors.
            </p>
          </>
        ),
      },
      {
        id: "why-we-use",
        number: "02",
        title: "Why We Use Cookies",
        content: (
          <>
            <p>Chandni Di Foundation uses cookies for key purposes:</p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>Security &amp; Integrity:</strong> Protecting forms from
                spam submissions and authenticating donation checkout sessions.
              </li>
              <li>
                <strong>Smooth Browsing:</strong> Remembering language, banner
                dismissals, and interface preferences.
              </li>
              <li>
                <strong>Anonymous Analytics:</strong> Measuring page load
                speeds, popular story reads, and donor journey paths to improve
                outreach.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "cookie-categories",
        number: "03",
        title: "Categories of Cookies We Use",
        content: (
          <div className="space-y-4">
            <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4">
              <h4 className="font-semibold text-neutral-900">
                1. Strictly Necessary Cookies
              </h4>
              <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
                Essential for core website operation, CSRF protection, and
                enabling payment gateways during donations. The platform cannot
                function properly without these.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4">
              <h4 className="font-semibold text-neutral-900">
                2. Functional Preference Cookies
              </h4>
              <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
                Store user preferences such as dismissed announcement banners or
                selected viewing tabs, enhancing your browsing comfort.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4">
              <h4 className="font-semibold text-neutral-900">
                3. Performance &amp; Analytical Cookies
              </h4>
              <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
                Gather aggregated, anonymized metrics on traffic sources, page
                bounce rates, and browser versions. No personally identifiable
                information is transmitted to ad networks.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "donation-security",
        number: "04",
        title: "Donation & Session Security",
        callout: {
          type: "success",
          title: "No Ad Retargeting",
          text: "We do not sell your browsing habits or deploy intrusive commercial remarketing trackers. Any third-party cookies are strictly limited to payment processing security and embedded educational media.",
        },
        content: (
          <p>
            When a donor proceeds to make a contribution, secure encrypted
            session identifiers are utilized by licensed payment gateways to
            prevent fraud and ensure that donation tokens match the donor&apos;s
            active session.
          </p>
        ),
      },
      {
        id: "third-party-cookies",
        number: "05",
        title: "Third-Party Media & Embedded Content",
        content: (
          <>
            <p>
              Some pages may feature embedded documentary videos (e.g., YouTube)
              or interactive maps showing our learning centre locations.
            </p>
            <p>
              These external providers may place cookies when you play embedded
              videos. We recommend reviewing the privacy and cookie policies of
              those external platforms directly.
            </p>
          </>
        ),
      },
      {
        id: "manage-cookies",
        number: "06",
        title: "How to Manage & Disable Cookies",
        content: (
          <>
            <p>
              Most web browsers permit you to manage or block cookies through
              their settings panel:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-neutral-700">
              <li>
                <strong>Google Chrome:</strong> Settings &gt; Privacy and
                Security &gt; Cookies and other site data.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp;
                Security &gt; Cookies and Site Data.
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferences &gt; Privacy &gt;
                Manage Website Data.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings &gt; Cookies and site
                permissions.
              </li>
            </ul>
            <p className="text-xs text-neutral-500">
              Please note that disabling strictly necessary cookies may impact
              the functionality of online donation processing.
            </p>
          </>
        ),
      },
      {
        id: "policy-updates",
        number: "07",
        title: "Policy Revisions",
        content: (
          <p>
            Chandni Di Foundation may periodically update this Cookie Policy to
            reflect changes in technical protocols or regulatory requirements.
            The revised version will be published here with an updated revision
            date.
          </p>
        ),
      },
      {
        id: "contact-inquiries",
        number: "08",
        title: "Inquiries & Contact",
        content: (
          <p>
            For questions or technical clarifications regarding our use of
            cookies and tracking technologies, please contact our administrative
            team:
          </p>
        ),
      },
    ],
  },
};
