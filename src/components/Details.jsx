import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { toast } from 'react-toastify'

const Details = () => {
  const { id } = useParams()
  const { PRODUCTS, cart, setCart, setIsCartOpen } = useContext(MyStore)
  const [curr, setCurr] = useState(null)
  const [related, setRelated] = useState([])

  const getcurrproduct = async () => {
    try {
      const res = await axios(`https://fakestoreapi.com/products/${id}`)
      setCurr(res.data)
      const newrelated = PRODUCTS.filter((ele) => {
        return ele.category === res.data.category && ele.id !== res.data.id
      })
      setRelated(newrelated)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getcurrproduct()
  }, [id, PRODUCTS])

  const isincart = curr && cart.find((ele) => Number(ele.id) === Number(curr.id))

  const addtocart = () => {
    if (!curr) return;
    setIsCartOpen(true)
    setCart((prev) => {
      const existing = prev.find((item) => Number(item.id) === Number(curr.id))
      if (existing) {
        return prev.map((item) =>
          Number(item.id) === Number(curr.id) ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...curr, quantity: 1 }]
    })
    toast.success("Added to Bag")
  }

  if (!curr) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-['Outfit',sans-serif]">
        <div className="w-8 h-8 border-2 border-black border-t-transparent animate-spin"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Product Details Section */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start mb-16">
          
          {/* Left: Main Product Image (Single Frame, No Thumbnails) */}
          <div className="w-full md:w-1/2 aspect-[4/5] bg-neutral-50 border border-neutral-100 flex items-center justify-center p-8 sm:p-14 overflow-hidden">
            <img
              src={curr.image}
              alt={curr.title}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Product Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-normal text-neutral-900 leading-tight mb-2">
                {curr.title}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-1.5 my-3">
                <div className="flex items-center text-[#ff385c]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill={i < Math.floor(curr.rating?.rate || 0) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-neutral-500 font-light">({curr.rating?.count || 122})</span>
              </div>

              {/* Price */}
              <p className="text-2xl sm:text-3xl font-medium text-neutral-900 mt-4 mb-5">
                ${curr.price}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light mb-6">
                {curr.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-2">
              <button
                onClick={addtocart}
                className="bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-widest px-10 py-3.5 transition-colors cursor-pointer"
              >
                {isincart ? 'ADD MORE TO CART' : 'ADD TO CART'}
              </button>
            </div>

            <hr className="border-neutral-200 my-2" />

            {/* Guarantees Checklist */}
            <div className="space-y-1.5 text-xs text-neutral-500 font-light">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>

            {/* Previous / Next Navigation Buttons (Boxy Minimalist Theme) */}
            <div className="flex items-center gap-3 pt-4">
              {Number(id) > 1 && (
                <NavLink
                  to={`/shop/${Number(id) - 1}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  Previous
                </NavLink>
              )}
              {Number(id) < (PRODUCTS.length || 20) && (
                <NavLink
                  to={`/shop/${Number(id) + 1}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </NavLink>
              )}
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <section className="mb-20">
            <div className="text-center my-14">
              <div className="inline-flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl tracking-widest uppercase">
                  <span className="text-neutral-400 font-light">RELATED</span>{' '}
                  <span className="font-medium text-neutral-900">PRODUCTS</span>
                </h2>
                <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8">
              {related.slice(0, 5).map((p) => (
                <NavLink to={`/shop/${p.id}`} key={p.id} className="group block text-left">
                  <div className="aspect-[3/4] bg-neutral-50 overflow-hidden mb-3 flex items-center justify-center p-4 border border-neutral-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs text-neutral-700 font-normal line-clamp-1 mb-1 group-hover:text-black transition-colors">
                    {p.title}
                  </p>
                  <p className="text-xs font-medium text-neutral-900">${p.price}</p>
                </NavLink>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}

export default Details