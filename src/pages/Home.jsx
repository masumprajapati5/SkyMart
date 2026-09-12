import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { sortProducts } from '../utils/sort'

const Home = () => {
  const { PRODUCTS } = useContext(MyStore)
  const sortratings = sortProducts(PRODUCTS, "price-desc")


  // home page ui
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-300 bg-white overflow-hidden mb-16">
          <div className="flex flex-col justify-center items-start p-8 sm:p-14 lg:p-20 bg-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 sm:w-11 h-[1.5px] bg-neutral-800 inline-block"></span>
              <span className="text-[11px] sm:text-xs font-medium text-neutral-800 uppercase tracking-[0.2em]">
                OUR BESTSELLERS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-neutral-900 font-serif-luxury font-normal tracking-tight my-4 sm:my-6 leading-tight">
              Latest Arrivals
            </h1>

            <NavLink
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-neutral-900 uppercase tracking-[0.2em] hover:text-neutral-600 transition-colors group mt-2"
            >
              <span>SHOP NOW</span>
              <span className="w-8 sm:w-11 h-[1.5px] bg-neutral-800 group-hover:w-14 transition-all duration-300 inline-block"></span>
            </NavLink>
          </div>

          <div className="w-full h-full min-h-[360px] sm:min-h-[440px] bg-neutral-100 overflow-hidden flex items-center justify-center">
            <img
              src="/hero.jpg"
              alt="Latest Arrivals"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <section className="mb-20">
          <div className="text-center my-14">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl tracking-widest uppercase">
                <span className="text-neutral-400 font-light">LATEST</span>{' '}
                <span className="font-medium text-neutral-900">COLLECTIONS</span>
              </h2>
              <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
            </div>
            <p className="text-xs text-neutral-500 max-w-xl mx-auto mt-2 tracking-wide font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8">
            {PRODUCTS.slice(0, 10).map((p) => (
              <NavLink to={`/shop/${p.id}`} key={p.id} className="group block text-left">
                <div className="aspect-[3/4] bg-neutral-50 overflow-hidden mb-3 flex items-center justify-center p-4 border border-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-neutral-700 font-normal line-clamp-1 mb-1 group-hover:text-neutral-900 transition-colors">
                  {p.title}
                </p>
                <p className="text-xs font-medium text-neutral-900">${p.price}</p>
              </NavLink>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center my-14">
            <div className="inline-flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl tracking-widest uppercase">
                <span className="text-neutral-400 font-light">BEST</span>{' '}
                <span className="font-medium text-neutral-900">SELLERS</span>
              </h2>
              <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
            </div>
            <p className="text-xs text-neutral-500 max-w-xl mx-auto mt-2 tracking-wide font-light">
              Top-rated and most coveted pieces hand-selected for uncompromising quality and timeless style.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8">
            {sortratings.slice(0, 5).map((p) => (
              <NavLink to={`/shop/${p.id}`} key={p.id} className="group block text-left">
                <div className="aspect-[3/4] bg-neutral-50 overflow-hidden mb-3 flex items-center justify-center p-4 border border-neutral-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-neutral-700 font-normal line-clamp-1 mb-1 group-hover:text-neutral-900 transition-colors">
                  {p.title}
                </p>
                <p className="text-xs font-medium text-neutral-900">${p.price}</p>
              </NavLink>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-16 border-t border-neutral-200 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l6.73-6.19"/>
              </svg>
            </div>
            <p className="font-medium text-sm text-neutral-900">Easy Exchange Policy</p>
            <p className="text-xs text-neutral-400 mt-1 font-light">We offer hassle free exchange policy</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <p className="font-medium text-sm text-neutral-900">7 Days Return Policy</p>
            <p className="text-xs text-neutral-400 mt-1 font-light">We provide 7 days free return policy</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
            </div>
            <p className="font-medium text-sm text-neutral-900">Best Customer Support</p>
            <p className="text-xs text-neutral-400 mt-1 font-light">We provide 24/7 customer support</p>
          </div>
        </div>

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

export default Home