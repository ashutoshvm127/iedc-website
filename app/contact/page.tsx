"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin } from "lucide-react"
import { contactData, uiData } from "@/data/data"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{contactData.hero.title}</h1>
            <p className="mt-6 text-xl text-blue-200">{contactData.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20"
                >
                  {contactData.contactForm.success.icon}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {contactData.contactForm.success.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{contactData.contactForm.success.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {contactData.contactForm.fields.map((field) =>
                    field.type === "select" ? (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.label}
                        </label>
                        <Select value={formState.subject} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactData.formSubjects.map((subject) => (
                              <SelectItem key={subject} value={subject}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ) : field.type === "textarea" ? (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.label}
                        </label>
                        <Textarea
                          id={field.id}
                          name={field.id}
                          value={formState[field.id as keyof typeof formState]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          rows={field.rows}
                          required={field.required}
                        />
                      </div>
                    ) : (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {field.label}
                        </label>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          value={formState[field.id as keyof typeof formState]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      </div>
                    ),
                  )}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {contactData.contactForm.submitButton.icon}
                        {contactData.contactForm.submitButton.text}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                      {uiData.icons.contact.email}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a
                          href={`mailto:${contactData.contactInfo.email}`}
                          className="hover:text-darkblue-600 dark:hover:text-darkblue-400"
                        >
                          {contactData.contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                      {uiData.icons.contact.phone}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <a
                          href={`tel:${contactData.contactInfo.phone}`}
                          className="hover:text-darkblue-600 dark:hover:text-darkblue-400"
                        >
                          {contactData.contactInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 dark:bg-darkblue-900/30">
                      {uiData.icons.contact.address}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contactData.contactInfo.address[0]}
                        <br />
                        {contactData.contactInfo.address[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Office Hours</h2>
                <div className="space-y-2">
                  {contactData.officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">{hours.days}</span>
                      <span className="font-medium text-gray-900 dark:text-white">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a
                    href={contactData.socialMedia.links.find(link => link.name === "Facebook")?.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 text-darkblue-600 hover:bg-blue-200 dark:bg-darkblue-900/30 dark:text-darkblue-400 dark:hover:bg-blue-800/50"
                  >
                    {/* Facebook icon */}
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={contactData.socialMedia.links.find(link => link.name === "Youtube")?.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 text-darkblue-600 hover:bg-blue-200 dark:bg-darkblue-900/30 dark:text-darkblue-400 dark:hover:bg-blue-800/50"
                  >
                    {/* YouTube icon */}
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href={contactData.socialMedia.links.find(link => link.name === "Instagram")?.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 text-darkblue-600 hover:bg-blue-200 dark:bg-darkblue-900/30 dark:text-darkblue-400 dark:hover:bg-blue-800/50"
                  >
                    {/* Instagram icon */}
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.012-3.96-.058-.976-.045-1.505-.207-1.858-.344-.466-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={contactData.socialMedia.links.find(link => link.name === "LinkedIn")?.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-darkblue-100 text-darkblue-600 hover:bg-blue-200 dark:bg-darkblue-900/30 dark:text-darkblue-400 dark:hover:bg-blue-800/50"
                  >
                    {/* LinkedIn icon */}
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-darkblue-50 dark:bg-darkblue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {contactData.mapSection.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              {contactData.mapSection.subtitle}
            </p>
          </motion.div>

          <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <div className="absolute inset-0">
                {contactData.mapSection.mapEmbed}
              </div>
            </div>
            <div className="p-4 text-center">
              <a
                href={contactData.mapSection.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Find answers to common questions about IEDC
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-6">
            {contactData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
