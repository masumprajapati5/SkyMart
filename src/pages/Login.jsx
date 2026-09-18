import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router'
import { MyStore } from '../Context/MyContext'
import { Eye, EyeOff } from "lucide-react"

const Login = ({ users }) => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onChange"
  })
  const { setUser } = useContext(MyStore)
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')

  const handleform = (data) => {
    setLoginError('')
    const isvalid = users.find(
      (ele) => ele.email === data.email && ele.password === data.password
    )

    if (!isvalid) {
      setLoginError("Invalid email or password.")
      return;
    } else {
      setUser(isvalid)
      localStorage.setItem("User", JSON.stringify(isvalid))
      navigate("/")
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 min-h-[380px] lg:min-h-screen relative bg-neutral-950 overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white">
        
        <img
          src="/auth-bg.jpg"
          alt="SkyMart Editorial Showcase"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-neutral-950/60" />

        <NavLink to="/" className="flex items-center gap-2.5 relative z-10 w-fit group">
          <img src="/favicon.svg" alt="SkyMart" className="w-7 h-7 shrink-0" />
          <span className="font-semibold text-lg tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            SKYMART<span className="text-[#e11d48]">.</span>
          </span>
        </NavLink>

        <div className="relative z-10 max-w-sm mt-auto mb-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-light mb-3">
            The Collection
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-snug">
            Curated essentials for the modern lifestyle.
          </h1>
        </div>

        <div className="relative z-10 text-[10px] text-neutral-400 uppercase tracking-widest font-light">
          © {new Date().getFullYear()} SKYMART
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-white min-h-[500px] lg:min-h-screen">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <img src="/favicon.svg" alt="SkyMart" className="w-7 h-7 shrink-0" />
            <span className="font-semibold text-lg text-neutral-900">
              SKYMART<span className="text-[#e11d48]">.</span>
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 font-serif-luxury font-normal tracking-tight">
              Login —
            </h2>
          </div>

          {loginError && (
            <div className='text-red-700 p-3 bg-red-50 border border-red-200 text-xs font-normal mb-6 text-center'>
              {loginError}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(handleform)}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                autoComplete="email"
                className="w-full bg-white border border-neutral-900 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-1 focus:ring-black transition-all font-light"
              />
              {errors.email && (
                <p className="text-red-600 text-[11px] mt-1.5 font-light">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", { required: "Password is required" })}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full bg-white border border-neutral-900 px-4 pr-11 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-1 focus:ring-black transition-all font-light"
                />
                <button
                  onClick={() => { setShowPassword(!showPassword) }}
                  type="button"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 text-[11px] mt-1.5 font-light">{errors.password.message}</p>
              )}
            </div>

            <div className="flex items-center justify-end text-xs text-neutral-500 pt-1">
              <NavLink className="text-neutral-700 hover:text-black transition-colors font-medium" to="/register">
                Create account
              </NavLink>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-neutral-900 hover:bg-black text-white text-xs font-medium px-12 py-3.5 transition-all cursor-pointer uppercase tracking-wider"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login