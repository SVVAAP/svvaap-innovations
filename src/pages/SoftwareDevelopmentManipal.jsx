import React from "react";
import LocalLandingPage from "../components/LocalLandingPage.jsx";

export default function SoftwareDevelopmentManipal() {
  return (
    <LocalLandingPage
      title="Software Development Company in Manipal"
      description="Svvaap Innovations is a software development company serving Manipal, Karnataka with affordable website, app, and custom software development services."
      path="/software-development-company-manipal"
      keywords="software development company in manipal, software company in manipal, web developers manipal, app developers manipal, budget friendly software company manipal"
      intro="Businesses in Manipal searching for a dependable software development company can work with Svvaap Innovations for clean websites, scalable apps, and practical software solutions that support growth and conversions."
      highlights={[
        {
          title: "Built for business growth",
          description: "We create digital products that support enquiries, sales, bookings, and streamlined operations.",
        },
        {
          title: "Affordable for startups",
          description: "Our delivery model keeps the project efficient so startups and small businesses can move faster.",
        },
        {
          title: "Support across the full cycle",
          description: "From discovery to launch, we stay involved so the product is easier to maintain and improve.",
        },
      ]}
      services={[
        "Corporate website development",
        "Startup MVP development",
        "Mobile app development",
        "E-commerce stores",
        "Product design and UX",
        "Maintenance and support",
      ]}
      process={[
        {
          title: "Research the market",
          description: "We review your business position in Manipal and define the right digital approach.",
        },
        {
          title: "Design for clarity",
          description: "We build interfaces that explain your offer quickly and make it easy for visitors to act.",
        },
        {
          title: "Deploy and iterate",
          description: "We launch the product and keep improving it using business feedback and performance signals.",
        },
      ]}
      faqs={[
        {
          question: "Can you work with colleges, startups, and local businesses in Manipal?",
          answer: "Yes. We build software for a range of organizations, from startup founders to service businesses and institutional teams.",
        },
        {
          question: "Do you offer budget-friendly app development in Manipal?",
          answer: "Yes. Our projects are structured to stay practical and affordable while still delivering professional quality.",
        },
        {
          question: "Can you improve our local visibility on Google?",
          answer: "Yes. We design pages, content, and metadata with local SEO signals to support search visibility over time.",
        },
        {
          question: "Do you provide ongoing support after launch?",
          answer: "Yes. We can handle support, updates, and future feature improvements after the initial release.",
        },
      ]}
      ctaTitle="Manipal software partner"
      ctaText="Build a faster, clearer, and more affordable digital presence."
      faqSchemaId="manipal-faq"
    />
  );
}
