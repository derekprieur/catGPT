'use client'

import { signIn } from "next-auth/react"
import { GiCat } from 'react-icons/gi'

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex justify-center text-white">
        <div onClick={()=>signIn('google')} className="flex flex-col items-center justify-center text-center gap-4">
            <GiCat className="w-20 h-20 cursor-pointer" />
            <button className="font-bold text-3xl animate-pulse cursor-pointer">Sign in to use CatGPT</button>
        </div>
    </div>
  )
}

export default Login