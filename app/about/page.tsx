"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { aboutData } from "@/data/data"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About IEDC</h1>
            <p className="mt-6 text-xl text-blue-200">
              Fostering innovation and entrepreneurship among students through mentorship, resources, and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/30">
                {aboutData.mission.icon}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{aboutData.mission.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{aboutData.mission.description}</p>
              <ul className="mt-6 space-y-2">
                {aboutData.mission.points.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                {aboutData.vision.icon}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{aboutData.vision.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{aboutData.vision.description}</p>
              <ul className="mt-6 space-y-2">
                {aboutData.vision.points.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-darkblue-600" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-darkblue-50 py-20 dark:bg-darkblue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Our Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              From humble beginnings to a thriving innovation hub
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200 dark:bg-blue-800"></div>

            {aboutData.journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div className="text-xl font-bold text-darkblue-600 dark:text-darkblue-400">{item.year}</div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                <div className="relative flex w-1/2 items-center justify-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-darkblue-600"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Startups - Animated Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Startups that began their journey at IEDC
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {aboutData.successStories.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-48">
                  <Image src={startup.image || "/placeholder.svg"} alt={startup.name} fill className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <div className="text-sm font-medium">Founded: {startup.year}</div>
                    <h3 className="text-xl font-bold">{startup.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400">{startup.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-darkblue-50 py-20 dark:bg-darkblue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Meet the dedicated team behind IEDC
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {aboutData.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-darkblue-600 dark:text-darkblue-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Our Achievements
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Milestones that mark our journey
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {aboutData.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                  {achievement.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
