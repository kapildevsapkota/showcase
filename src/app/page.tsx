import WebsiteBox from "@/components/WebsiteBox"
import Image from "next/image"

const websites = [
  {
    name: "BIRAT EXPO",
    logo: "/BE.png",
    description: "Additional services and solutions for your needs.",
    url: "https://biratexpo.cim.org.np/",
  },
  {
    name: "JOB BRIZ",
    logo: "/jobbriz.png",
    description: "Your gateway to career opportunities and professional growth.",
    url: "https://jobbriz-fe.vercel.app/",
  },
  {
    name: "B2B",
    logo: "/b2b.svg",
    description: "Connecting businesses for successful partnerships and growth.",
    url: "https://b2b-fe-eta.vercel.app/",
  },
  {
    name: "BUSINESSCLIINC",
    logo: "/bc.png",
    description: "Expert business consulting for sustainable success.",
    url: "https://businessclinic.vercel.app/",
  },
  {
    name: "QHSEF",
    logo: "/logo.png",
    description: "Quality, Health, Safety, and Environmental solutions.",
    url: "https://qhsef.vercel.app/",
  },
  {
    name: "VOTING",
    logo: "/cc.png",
    description: "Secure and transparent digital voting solutions.",
    url: "https://voting-cim.vercel.app/",
  },
  
]

export default function Home() {
  return (
    <div>
      <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">Our Platforms</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {websites.map((website) => (
          <WebsiteBox
            key={website.name}
            name={website.name}
            logo={website.logo}
            description={website.description}
            url={website.url}
          />
        ))}
      </div>
    </div>
  )
}

