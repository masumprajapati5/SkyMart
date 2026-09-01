import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { toast } from 'react-toastify'

const Cart = ({ isOpen, onClose, setIsCartOpen }) => {
  const { cart, setCart } = useContext(MyStore)
  const navigate = useNavigate()

  const browse = () => {
    setIsCartOpen(false)
    navigate('/shop')
  }

  const increment = (id) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrement = (id) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = total > 0 ? 10.00 : 0.00

  const handlecheckout = () => {
    clearCart();
    setIsCartOpen(false)
    navigate('/shop')
    toast.success("Order Placed Successfully")
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      ></div>
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] bg-white border-l border-neutral-200
                    z-50 flex flex-col transition-transform duration-300 ease-out shadow-2xl font-['Outfit',sans-serif]
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-white">
          <div className="inline-flex items-center gap-2">
            <h2 className="text-base sm:text-lg tracking-widest uppercase">
              <span className="text-neutral-400 font-light">YOUR</span>{' '}
              <span className="font-medium text-neutral-900">CART</span>
            </h2>
            <span className="w-8 sm:w-10 h-[2px] bg-neutral-800 inline-block"></span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-black cursor-pointer"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        {/* Empty State or Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-4 text-center py-16">
              <div className="w-16 h-16 bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-300">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-sm uppercase tracking-wider">Your Cart is Empty</p>
                <p className="text-neutral-400 text-xs mt-1 font-light">Discover luxury items in our curated collection.</p>
              </div>
              <button
                onClick={browse}
                className="bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 mt-2 transition-colors cursor-pointer"
              >
                Explore Catalogue
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-2 divide-y divide-neutral-200 bg-white">
              {cart.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  
                  {/* Left: Image & Info */}
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-14 h-16 bg-neutral-50 border border-neutral-100 overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-normal text-neutral-800 truncate leading-snug">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs font-semibold text-neutral-900">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Stepper box */}
                  <div className="flex items-center border border-neutral-300 bg-white shrink-0">
                    <button
                      onClick={() => decrement(item.id)}
                      className="px-2 py-1 hover:bg-neutral-100 text-neutral-600 text-xs transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-2 py-1 text-xs font-semibold text-neutral-900 min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increment(item.id)}
                      className="px-2 py-1 hover:bg-neutral-100 text-neutral-600 text-xs transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Right: Trash icon */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer p-1 shrink-0"
                    title="Remove item"
                  >
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
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>

                </div>
              ))}
            </div>

            {/* Bottom: Cart Totals & Checkout */}
            <div className="px-6 py-5 border-t border-neutral-200 bg-white">
              <div className="inline-flex items-center gap-2 mb-3">
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-900 font-['Outfit',sans-serif]">
                  <span className="text-neutral-400 font-light">CART</span>{' '}
                  <span className="font-medium text-neutral-900">TOTALS</span>
                </h3>
                <span className="w-6 h-[1.5px] bg-neutral-800 inline-block"></span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-1.5 border-b border-neutral-100 font-light text-neutral-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-neutral-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100 font-light text-neutral-500">
                  <span>Shipping Fee</span>
                  <span className="font-medium text-neutral-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-medium text-neutral-900">
                  <span>Total</span>
                  <span>${(total + shipping).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handlecheckout}
                className="w-full bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-widest py-3.5 mt-3 transition-colors cursor-pointer text-center"
              >
                PROCEED TO CHECKOUT
              </button>

              <button
                onClick={clearCart}
                className="w-full text-center text-[11px] uppercase tracking-widest text-neutral-400 hover:text-red-600 transition-colors pt-2.5 cursor-pointer font-light"
              >
                Empty Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default Cart