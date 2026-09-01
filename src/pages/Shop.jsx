import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { getProductsByCategory } from '../utils/Category'
import { sortProducts } from '../utils/sort'
import { filterByName } from '../utils/search'
import { toast } from 'react-toastify'

const Shop = () => {
  const { PRODUCTS, cart, setCart, setIsCartOpen, filtered, setfiltered } = useContext(MyStore)

  const addtocart = (e, p) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCartOpen(true);
    setCart((prev) => [...prev, { ...p, quantity: 1 }])
    toast.success("Added to Bag")
  }

  const [searched, setSearched] = useState("")
  const [category, setCategory] = useState("all")
  const [sortType, setSortType] = useState("default")

  const recompute = (nextSearch, nextCategory, nextSortType) => {
    let result = nextCategory === "all" ? PRODUCTS : getProductsByCategory(PRODUCTS, nextCategory)
    if (nextSearch.trim()) {
      result = filterByName(result, nextSearch)
    }
    result = sortProducts(result, nextSortType)
    setfiltered(result)
  }

  const handlesort = (e) => {
    const sortVal = e.target.value;
    setSortType(sortVal)
    recompute(searched, category, sortVal)
  }

  const handleinput = (e) => {
    const value = e.target.value
    setSearched(value)
    recompute(value, category, sortType)
  }

  const handlefilter = (e) => {
    const value = e.target.value;
    setCategory(value)
    recompute(searched, value, sortType)
  }

  const selectCategory = (cat) => {
    setCategory(cat)
    recompute(searched, cat, sortType)
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Full-Width Top Searchbar (Boxy Style) */}
        <div className="w-full mb-10">
          <div className="flex items-center border border-neutral-300 bg-white px-4 py-1 w-full">
            <input
              value={searched}
              onChange={handleinput}
              type="text"
              placeholder="Search products..."
              className="w-full py-3 text-xs outline-none bg-transparent placeholder-neutral-400 text-neutral-900 font-normal"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500 shrink-0 ml-2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>

        {/* Main Content Layout (Left Filters + Right Cards) */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar: Filters & Dropdowns */}
          <aside className="w-full md:w-60 lg:w-68 shrink-0 space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
              FILTERS
            </h2>

            {/* Box 1: Categories Box */}
            <div className="border border-neutral-300 p-5 bg-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">
                CATEGORIES
              </p>
              <div className="space-y-3 text-xs text-neutral-600 font-light">
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                  <input
                    type="checkbox"
                    checked={category === "all"}
                    onChange={() => selectCategory("all")}
                    className="accent-black w-3.5 h-3.5 cursor-pointer rounded-none"
                  />
                  <span>All Categories</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                  <input
                    type="checkbox"
                    checked={category === "men's clothing"}
                    onChange={() => selectCategory("men's clothing")}
                    className="accent-black w-3.5 h-3.5 cursor-pointer rounded-none"
                  />
                  <span>Men's Clothing</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                  <input
                    type="checkbox"
                    checked={category === "women's clothing"}
                    onChange={() => selectCategory("women's clothing")}
                    className="accent-black w-3.5 h-3.5 cursor-pointer rounded-none"
                  />
                  <span>Women's Clothing</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                  <input
                    type="checkbox"
                    checked={category === "electronics"}
                    onChange={() => selectCategory("electronics")}
                    className="accent-black w-3.5 h-3.5 cursor-pointer rounded-none"
                  />
                  <span>Electronics</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors">
                  <input
                    type="checkbox"
                    checked={category === "jewelery"}
                    onChange={() => selectCategory("jewelery")}
                    className="accent-black w-3.5 h-3.5 cursor-pointer rounded-none"
                  />
                  <span>Jewelry</span>
                </label>
              </div>
            </div>

            {/* Box 2: Dropdown Selects (All Departments + Sort) */}
            <div className="space-y-3">
              <div className="relative border border-neutral-300 bg-white">
                <select
                  value={category}
                  onChange={handlefilter}
                  className="w-full px-4 py-3 text-xs font-medium uppercase tracking-wider appearance-none cursor-pointer outline-none bg-transparent text-neutral-900 pr-8"
                >
                  <option value="all">ALL DEPARTMENTS</option>
                  <option value="electronics">ELECTRONICS</option>
                  <option value="men's clothing">MEN'S CLOTHING</option>
                  <option value="jewelery">JEWELRY</option>
                  <option value="women's clothing">WOMEN'S CLOTHING</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>

              <div className="relative border border-neutral-300 bg-white">
                <select
                  value={sortType}
                  onChange={handlesort}
                  className="w-full px-4 py-3 text-xs font-medium uppercase tracking-wider appearance-none cursor-pointer outline-none bg-transparent text-neutral-900 pr-8"
                >
                  <option value="default">SORT: FEATURED</option>
                  <option value="price-asc">SORT: LOW TO HIGH</option>
                  <option value="price-desc">SORT: HIGH TO LOW</option>
                  <option value="rating-desc">SORT: TOP RATED</option>
                  <option value="rating-asc">SORT: LOWEST RATED</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>

          </aside>

          {/* Right Main Area: Product Grid */}
          <div className="flex-1 min-w-0 w-full">
            
            {/* Heading */}
            <div className="flex items-center justify-between mb-8 pb-3">
              <div className="inline-flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl tracking-widest uppercase">
                  <span className="text-neutral-400 font-light">ALL</span>{' '}
                  <span className="font-medium text-neutral-900">COLLECTIONS</span>
                </h1>
                <span className="w-8 sm:w-12 h-[2px] bg-neutral-800 inline-block"></span>
              </div>
              <span className="text-xs text-neutral-400 font-light tracking-wider">
                {filtered.length} products found
              </span>
            </div>

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div className="border border-neutral-300 p-16 text-center bg-white">
                <p className="font-medium text-sm uppercase tracking-wider text-neutral-900">No Products Found</p>
                <p className="text-neutral-400 text-xs mt-2 font-light">Try adjusting your filters or search keywords.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8">
                {filtered.map((p) => {
                  const isincart = cart.find((ele) => Number(ele.id) === Number(p.id))
                  return (
                    <NavLink
                      to={`/shop/${p.id}`}
                      key={p.id}
                      className="group block text-left"
                    >
                      <div className="aspect-[3/4] bg-neutral-50 overflow-hidden mb-3 flex items-center justify-center p-4 border border-neutral-100 relative">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                        />
                        <button
                          onClick={(e) => addtocart(e, p)}
                          className={`absolute bottom-2 right-2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs ${
                            isincart
                              ? 'bg-neutral-900 text-white'
                              : 'bg-black hover:bg-neutral-800 text-white opacity-90 group-hover:opacity-100'
                          }`}
                        >
                          {isincart ? 'In Bag' : '+ Add'}
                        </button>
                      </div>
                      <p className="text-xs text-neutral-700 font-normal line-clamp-1 mb-1 group-hover:text-neutral-900 transition-colors">
                        {p.title}
                      </p>
                      <p className="text-xs font-medium text-neutral-900">${p.price}</p>
                    </NavLink>
                  )
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  )
}

export default Shop