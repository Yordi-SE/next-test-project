import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col text-white">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center relative px-4 py-16 md:py-24">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            About <span className="text-amber-500">Us</span>
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2020, Teamify was born out of necessity during a global shift to remote work. Our team
                of workplace innovation experts recognized that traditional office environments were changing forever,
                and set out to create a solution that would bridge the gap between physical and digital workspaces.
              </p>
              <p className="text-gray-300">
                Today, we serve thousands of companies worldwide, providing them with the tools they need to collaborate
                effectively, maintain company culture, and achieve their business goals in a distributed work
                environment.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image src="/office.svg" alt="Our team" fill className="object-cover" />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="w-full mt-24 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-amber-500">Our Mission</h3>
                <p className="text-gray-300">
                  To empower organizations to work effectively from anywhere by providing intuitive virtual office
                  solutions that foster collaboration, communication, and community.
                </p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold mb-4 text-amber-500">Our Vision</h3>
                <p className="text-gray-300">
                  A world where geography is no barrier to professional success, where teams can thrive regardless of
                  physical location, and where the future of work is flexible, inclusive, and productive.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="w-full mt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Leadership Team</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "CEO & Founder",
                  image: "",
                },
                {
                  name: "Jamie Chen",
                  role: "CTO",
                  image:"",
                },
                {
                  name: "Taylor Wilson",
                  role: "Head of Product",
                  image: "",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-amber-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="w-full mt-24 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your workspace?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="#demo"
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-3 rounded transition-colors"
              >
                Instant Demo
              </Link>
              <Link
                href="#setup"
                className="border border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded transition-colors"
              >
                Setup Your Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

