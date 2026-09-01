import React from 'react'
import { NavLink } from 'react-router'

const About = () => {
  const teamMembers = [
    {
      name: "Aryan Shah",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Priya Mehta",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Rohan Verma",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    },
    {
      name: "Sneha Kapoor",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Title */}
        <div className="text-center my-10">
          <div className="inline-flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl tracking-widest uppercase">
              <span className="text-neutral-400 font-light">ABOUT</span>{' '}
              <span className="font-medium text-neutral-900">US</span>
            </h1>
            <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
          </div>
        </div>

        {/* Main Split Section: Image + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center mb-24">
          <div className="w-full aspect-square overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center">
            <img
              src="/about.jpg"
              alt="About SkyMart"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">
            <p>
              SkyMart was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and electronics to jewelry and daily essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            </p>
            <div>
              <h3 className="font-medium text-sm text-neutral-900 mb-2">
                Our Mission
              </h3>
              <p>
                Our mission at SkyMart is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US Section */}
        <div className="my-10">
          <div className="inline-flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl tracking-widest uppercase">
              <span className="text-neutral-400 font-light">WHY</span>{' '}
              <span className="font-medium text-neutral-900">CHOOSE US</span>
            </h2>
            <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
          </div>
        </div>

        <div className="border border-neutral-300 grid grid-cols-1 md:grid-cols-3 mb-24 bg-white">
          <div className="border-b md:border-b-0 md:border-r border-neutral-300 p-8 sm:p-12">
            <p className="font-semibold text-xs uppercase tracking-wider text-neutral-900 mb-4">
              QUALITY ASSURANCE:
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-neutral-300 p-8 sm:p-12">
            <p className="font-semibold text-xs uppercase tracking-wider text-neutral-900 mb-4">
              CONVENIENCE:
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <p className="font-semibold text-xs uppercase tracking-wider text-neutral-900 mb-4">
              EXCEPTIONAL CUSTOMER SERVICE:
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <section className="mb-20">
          <div className="text-center my-14">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl tracking-widest uppercase">
                <span className="text-neutral-400 font-light">MEET THE</span>{' '}
                <span className="font-medium text-neutral-900">TEAM</span>
              </h2>
              <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
            </div>
            <p className="text-xs text-neutral-500 max-w-xl mx-auto mt-2 font-light tracking-wide">
              The visionaries, curators, and engineers crafting the future of luxury shopping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-[4/5] bg-neutral-100 border border-neutral-200 overflow-hidden mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-0.5">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to shop? CTA Banner */}
        <div className="border border-neutral-300 bg-white p-12 sm:p-16 text-center mb-16">
          <h3 className="font-medium text-2xl sm:text-3xl tracking-tight text-neutral-900 mb-2">
            Ready to shop?
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm font-light max-w-md mx-auto mb-6">
            Explore thousands of products at unbeatable prices.
          </p>
          <NavLink
            to="/shop"
            className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-medium uppercase tracking-widest px-10 py-3.5 transition-colors cursor-pointer"
          >
            <span>BROWSE PRODUCTS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </NavLink>
        </div>

      </div>
    </main>
  )
}

export default About