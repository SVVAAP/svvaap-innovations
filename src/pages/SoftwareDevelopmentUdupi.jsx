import React from "react";
import LocalLandingPage from "../components/LocalLandingPage.jsx";

export default function SoftwareDevelopmentUdupi() {
  return (
    <LocalLandingPage
      title="Software Development Company in Udupi"
      description="Svvaap Innovations is a software development company in Udupi, Karnataka, building budget-friendly websites, mobile apps, and custom software for local businesses."
      path="/software-development-company-udupi"
      keywords="software development company in udupi, software company in udupi, web developers udupi, app developers udupi, budget friendly software company udupi"
      intro="If you are searching for a software development company in Udupi, Svvaap Innovations builds affordable websites, mobile apps, and business software that help local companies grow online without unnecessary complexity."
      highlights={[
        {
          title: "Local expertise",
          description: "We understand the needs of Udupi businesses, from small service brands to growth-stage startups and institutions.",
        },
        {
          title: "Budget-friendly delivery",
          description: "Our approach is practical and cost-aware, making us a strong fit for companies that want measurable outcomes.",
        },
        {
          title: "Fast communication",
          description: "You get direct collaboration, clear timelines, and a delivery process that stays easy to track.",
        },
      ]}
      services={[
        "Custom website development",
        "Mobile app development",
        "E-commerce development",
        "Business software and CRM",
        "UI/UX design",
        "SEO-ready landing pages",
      ]}
      process={[
        {
          title: "Discovery",
          description: "We understand your business, target users, competitors, and the exact outcome you want to reach.",
        },
        {
          title: "Build",
          description: "We design and develop the website or app with SEO-friendly structure and modern performance standards.",
        },
        {
          title: "Launch and support",
          description: "After launch, we help with improvements, maintenance, and long-term optimization when needed.",
        },
      ]}
      faqs={[
        {
          question: "Why choose Svvaap Innovations in Udupi?",
          answer: "We combine local accessibility with practical development skills, so businesses get a responsive partner and a solution that fits their budget.",
        },
        {
          question: "Do you build both websites and mobile apps?",
          answer: "Yes. We develop business websites, e-commerce platforms, and Android/iOS mobile applications.",
        },
        {
          question: "Can you help with SEO too?",
          answer: "Yes. Our pages and site structure are built with local SEO in mind, and we can help improve content and technical visibility.",
        },
        {
          question: "Are you suitable for small businesses?",
          answer: "Yes. We work with small businesses, startups, and established companies that want professional output without enterprise-level overhead.",
        },
      ]}
      ctaTitle="Udupi web and app developers"
      ctaText="Let us build your next website, app, or software product."
      faqSchemaId="udupi-faq"
    />
  );
}
