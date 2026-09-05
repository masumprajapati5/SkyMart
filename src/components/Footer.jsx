import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8 text-neutral-600 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.svg" alt="SkyMart" className="w-6 h-6 shrink-0" />
              <span className="font-semibold text-lg tracking-tight text-black">
                SKYMART<span className="text-[#e11d48]">.</span>
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed font-light">
              SkyMart is a curated modern e-commerce house offering high-caliber electronics, refined apparel, and fine jewelry with uncompromising speed and transparent integrity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-900 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light">
              <li>
                <NavLink to="/" className="hover:text-black transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-black transition-colors">About us</NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="hover:text-black transition-colors">Catalogue</NavLink>
              </li>
              <li>
                <span className="hover:text-black transition-colors cursor-pointer">Privacy policy</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-900 mb-4">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-light">
              <li>+1-212-456-7890</li>
              <li>contact@skymart.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500 font-light">
          Copyright {new Date().getFullYear()} @ skymart.com - All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer