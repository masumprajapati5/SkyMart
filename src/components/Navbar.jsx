import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import Cart from './Cart'
import { MyStore } from '../Context/MyContext'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { isCartOpen, setIsCartOpen, user, setUser, cart } = useContext(MyStore)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handlelogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.removeItem("User");
    toast.success("Logged out successfully")
  }

  const cartItemCount = cart.reduce((ele, item) => { return ele + item.quantity }, 0)

  return (
    <>
      <header className="sticky top-0 z-30 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          
          <NavLink className="flex items-center gap-1 shrink-0" to="/">
            <span className="font-semibold text-xl tracking-tight text-neutral-900">
              SKYMART<span className="text-[#e11d48]">.</span>
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs font-medium uppercase tracking-widest transition-colors py-1 ${
                  isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <p>HOME</p>
                  <span className={`w-1/2 h-[1.5px] bg-neutral-900 mt-1 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs font-medium uppercase tracking-widest transition-colors py-1 ${
                  isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <p>SHOP</p>
                  <span className={`w-1/2 h-[1.5px] bg-neutral-900 mt-1 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex flex-col items-center text-xs font-medium uppercase tracking-widest transition-colors py-1 ${
                  isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <p>ABOUT</p>
                  <span className={`w-1/2 h-[1.5px] bg-neutral-900 mt-1 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </>
              )}
            </NavLink>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            
            {user && (
              <div className="flex items-center gap-1.5 text-neutral-800" title={user.name}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="hidden sm:inline text-xs font-normal max-w-[100px] truncate text-neutral-800">
                  {user.name}
                </span>
              </div>
            )}

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-neutral-800 hover:text-black transition-colors cursor-pointer p-1"
              title="Shopping Bag"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[9px] font-medium rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button
              onClick={handlelogout}
              title="Logout"
              className="hidden md:block text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-neutral-800 cursor-pointer p-1"
              title="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 px-4 sm:px-6 py-4 flex flex-col gap-1 bg-white">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase font-medium tracking-wider py-3 px-4 transition-colors ${
                  isActive ? "text-neutral-900 bg-neutral-100" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase font-medium tracking-wider py-3 px-4 transition-colors ${
                  isActive ? "text-neutral-900 bg-neutral-100" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`
              }
            >
              SHOP
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase font-medium tracking-wider py-3 px-4 transition-colors ${
                  isActive ? "text-neutral-900 bg-neutral-100" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`
              }
            >
              ABOUT
            </NavLink>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                handlelogout();
              }}
              className="text-left text-xs uppercase font-medium tracking-wider py-3 px-4 text-neutral-500 hover:text-red-600 hover:bg-neutral-50 transition-colors flex items-center justify-between cursor-pointer w-full mt-1 border-t border-neutral-100 pt-3"
            >
              <span>LOGOUT</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
            </button>
          </div>
        )}
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} setIsCartOpen={setIsCartOpen} />
    </>
  )
}

export default Navbar