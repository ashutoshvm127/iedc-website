"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Instagram } from "lucide-react" // Remove Mail import
import { excomData } from "@/data/data"

// Current ExCom Members Data
const currentExcomMembers = excomData.currentExcom

// Previous ExCom Members Data by Year
const previousExcomMembers = excomData.previousExcom

export default function ExcomPage() {
  const [selectedYear, setSelectedYear] = useState(Object.keys(previousExcomMembers)[0])

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Executive Committee</h1>
            <p className="mt-6 text-xl text-blue-200">
              Meet the dedicated team leading IEDC's initiatives and activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current ExCom Members */}
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
              Current Executive Committee
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">2024-2025 Academic Year</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentExcomMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{member.position}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {member.department} | {member.year}
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href={member.social?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href={member.social?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous ExCom Members */}
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
              Previous Executive Committees
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              The legacy of leadership at IEDC
            </p>
          </motion.div>

          <Tabs defaultValue={selectedYear} onValueChange={setSelectedYear} className="mx-auto max-w-5xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              {Object.keys(previousExcomMembers).map((year) => (
                <TabsTrigger key={year} value={year} className="text-lg">
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(previousExcomMembers).map(([year, members]) => (
              <TabsContent key={year} value={year}>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {members.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-darkblue-600 dark:text-darkblue-400">{member.position}</p>
                      
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Faculty Advisors */}
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
              Faculty Advisors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Guiding the IEDC initiatives
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {excomData.facultyAdvisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={advisor.image || "/placeholder.svg"} alt={advisor.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{advisor.name}</h3>
                  <p className="text-darkblue-600 dark:text-darkblue-400">{advisor.position}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{advisor.department}</p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{advisor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
