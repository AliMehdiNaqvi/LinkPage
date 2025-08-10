"use client";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginPage() {


  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {

    if (session) {

      router.push('/')
    }


  }, [session, router])


  const providers = [
    {
      id: "google",
      name: "Google",
      icon: <FaGoogle className="text-white" size={22} />,
      bg: "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500",
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub className="text-white" size={22} />,
      bg: "bg-gray-800",
    },

  ];


  
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-800 via-indigo-900 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
      >
        <h1 className="text-3xl font-extrabold text-white text-center mb-8">
          Welcome Back 👋
        </h1>

        <p className="text-center text-sm text-white/80 mb-6">
          Sign in to continue to your dashboard
        </p>

        <div className="space-y-4">
          {providers.map((provider) => (
            <button
              key={provider.id}
              className={`w-full flex items-center justify-between px-6 py-3 text-white font-medium rounded-xl shadow-md hover:scale-[1.02] transform transition-all duration-200 ${provider.bg}`}
              onClick={() => { signIn(provider.id)}}
            >
              <div className="flex items-center gap-3">
                {provider.icon}
                <span>Continue with {provider.name}</span>
              </div>
              <span className="text-white/50">→</span>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-white/60">
          By continuing, you agree to our{" "}
          <span className="underline hover:text-white cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          .
        </div>
      </motion.div>
    </main>
  );
}

