"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { eventsData } from "@/data/data"

// Current Events Data
const currentEvents = eventsData.currentEvents

// Previous Events Data
const previousEvents = eventsData.previousEvents

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [showMorePrevious, setShowMorePrevious] = useState(false)

  // Filter previous events based on search and category
  const filteredPreviousEvents = previousEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "All" || event.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Limit the number of previous events shown if showMorePrevious is false
  const displayedPreviousEvents = showMorePrevious ? filteredPreviousEvents : filteredPreviousEvents.slice(0, 6)

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{eventsData.hero.title}</h1>
            <p className="mt-6 text-xl text-blue-200">
              {eventsData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Events */}
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
              Upcoming Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Register now and be a part of these exciting opportunities
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-darkblue-600 px-3 py-1 text-xs font-semibold text-white">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="mr-2 h-4 w-4 text-darkblue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="mr-2 h-4 w-4 text-darkblue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="mr-2 h-4 w-4 text-darkblue-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{event.description}</p>
                  <Button asChild className="w-full">
                    <Link href={event.registrationLink}>Register Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Events */}
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
              Previous Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Explore our past events and activities
            </p>
          </motion.div>

          {/* Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Filter by:</span>
              <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {eventsData.categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayedPreviousEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-darkblue-600 px-3 py-1 text-xs font-semibold text-white">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="mr-2 h-4 w-4 text-darkblue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="mr-2 h-4 w-4 text-darkblue-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredPreviousEvents.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button variant="outline" onClick={() => setShowMorePrevious(!showMorePrevious)} className="gap-2">
                {showMorePrevious ? "Show Less" : "Show More"}
                <ArrowRight className={`h-4 w-4 ${showMorePrevious ? "rotate-90" : ""}`} />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Event Calendar */}
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
              Event Calendar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Stay updated with our upcoming events
            </p>
          </motion.div>

          <Tabs defaultValue="upcoming" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
                <div className="space-y-6">
                  {currentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col border-b border-gray-200 pb-6 last:border-0 last:pb-0 sm:flex-row"
                    >
                      <div className="mb-4 sm:mb-0 sm:w-1/4">
                        <div className="font-medium text-gray-900 dark:text-white">{event.date}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{event.time}</div>
                      </div>
                      <div className="sm:w-3/4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
                        <div className="mb-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="mr-1 h-4 w-4 text-darkblue-600" />
                          {event.location}
                        </div>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">{event.description}</p>
                        <Button asChild size="sm">
                          <Link href={event.registrationLink}>Register</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ongoing">
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
                <p className="text-center text-gray-600 dark:text-gray-400">No ongoing events at the moment.</p>
              </div>
            </TabsContent>
            <TabsContent value="past">
              <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800">
                <div className="space-y-6">
                  {previousEvents.slice(0, 200).map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col border-b border-gray-200 pb-6 last:border-0 last:pb-0 sm:flex-row"
                    >
                      <div className="mb-4 sm:mb-0 sm:w-1/4">
                        <div className="font-medium text-gray-900 dark:text-white">{event.date}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{event.category}</div>
                      </div>
                      <div className="sm:w-3/4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
                        <div className="mb-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="mr-1 h-4 w-4 text-darkblue-600" />
                          {event.location}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {previousEvents.length > 10 && (
                  <div className="mt-6 text-center">
                    <Link
                      href="#previous-events"
                      className="inline-flex items-center text-sm text-darkblue-600 hover:text-darkblue-700"
                    >
                      View all past events
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Want to Organize an Event?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-200">
              If you have an idea for an event or workshop that aligns with our mission, we'd love to hear from you!
            </p>
            <div className="mt-10">
              <Button asChild variant="outline" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
