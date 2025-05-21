"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navItems } from "@/data/data"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md dark:bg-blue-800/90" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <span
                className={cn(
                  "text-2xl font-bold",
                  scrolled ? "text-blue-600 dark:text-blue-500" : "text-white dark:text-blue-500",
                )}
              >
                IEDC ASIET
              </span>
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium",
                      scrolled
                        ? "text-blue-800 hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                        : isHomePage
                          ? "text-white hover:bg-blue-100 hover:text-blue-300 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                          : "text-black hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500",
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600",
                scrolled
                  ? "text-blue-800 hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                  : isHomePage
                    ? "text-white hover:bg-blue-100 hover:text-blue-300 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                    : "text-black hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500",
              )}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  scrolled
                    ? "text-blue-800 hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                    : isHomePage
                      ? "text-white hover:bg-blue-100 hover:text-blue-300 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500"
                      : "text-black hover:bg-blue-100 hover:text-blue-600 dark:text-white dark:hover:bg-blue-700/30 dark:hover:text-blue-500",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
