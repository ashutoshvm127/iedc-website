"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { homeData } from "@/data/data"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-[url('/images/homelogo.png')] bg-center opacity-10"
            style={{ 
              backgroundImage: "url('/images/homelogo.png')",
              backgroundSize: "36%",  // Changed from 46% to 36% for smaller height
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        </div>
        <div className="container relative z-10 px-4 py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Innovation and</span>
              <span className="block text-blue-300">Entrepreneurship Development Cell</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-blue-100 sm:max-w-3xl">
              Fostering innovation, creativity, and entrepreneurial mindset among students
            </p>
            <div className="mx-auto mt-10 flex max-w-md justify-center gap-4 sm:flex-row">
              <Link
                href="/about"
                className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-700 hover:bg-blue-50 md:py-4 md:px-10 md:text-lg"
              >
                Learn More
              </Link>
              <Link
                href="/events"
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
              >
                Our Events
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <ArrowRight className="h-8 w-8 rotate-90 text-blue-300" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">What We Do</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Empowering students to innovate and build entrepreneurial ventures
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {homeData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-darkblue-50 py-20 dark:bg-darkblue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Join us for our exciting events and activities
            </p>
          </motion.div>

          <div className="grid gap-8">
            {homeData.upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 max-w-2xl mx-auto w-full"
              >
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-blue-600 dark:text-darkblue-400">{event.date}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{event.description}</p>
                  <Link
                    href="/events"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-darkblue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/events"
              className="inline-flex items-center rounded-md bg-darkblue-600 px-6 py-3 text-base font-medium text-white hover:bg-darkblue-700"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-200">
              Making a difference in the entrepreneurial ecosystem
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {homeData.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold sm:text-5xl">{stat.number}</div>
                <div className="mt-2 text-xl text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-blue-600 px-6 py-16 text-center text-white sm:px-12 md:py-20"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{homeData.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">{homeData.cta.subtitle}</p>
            <div className="mt-10">
              <Link
                href={homeData.cta.buttonLink}
                className="inline-flex items-center rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 md:py-4 md:px-10 md:text-lg"
              >
                {homeData.cta.buttonText}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
