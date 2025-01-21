"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "首页", href: "#" },
  { name: "咨询服务", href: "#services" },
  { name: "小海系列", href: "#products" },
  { name: "小海博课", href: "#courses" },
  { name: "专家团队", href: "#experts" },
  { name: "联系我们", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white fixed w-full z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-2xl font-bold">
              小海智能
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={item.href} className="hover:text-blue-200 transition duration-300">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block py-2 hover:text-blue-200 transition duration-300">
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}

