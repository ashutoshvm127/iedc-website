"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { galleryData } from "@/data/data"

// Gallery Images Data
const galleryImages = galleryData.images

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [showMore, setShowMore] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({})

  // Add this new helper function
  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  // Filter images based on search and category
  const filteredImages = galleryImages.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "All" || image.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Limit the number of images shown if showMore is false
  const displayedImages = showMore ? filteredImages : filteredImages.slice(0, 9)

  // Handle image click to show modal
  const handleImageClick = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{galleryData.hero.title}</h1>
            <p className="mt-6 text-xl text-blue-200">{galleryData.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search gallery..."
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
                  {galleryData.categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => handleImageClick(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredImages.length > 9 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button variant="outline" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Gallery Section */}
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
              Video Gallery
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
              Watch our latest events and activities
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryData.videos?.slice(0, showMore ? undefined : 6).map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail || "/video-placeholder.jpg"}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <p className="text-sm text-white/80">{video.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {galleryData.videos?.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Button variant="outline" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More Videos"}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-lg bg-white dark:bg-gray-800">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative aspect-video h-full w-full">
              {galleryImages.find((img) => img.id === selectedImage) && (
                <Image
                  src={galleryImages.find((img) => img.id === selectedImage)?.image || ""}
                  alt={galleryImages.find((img) => img.id === selectedImage)?.title || ""}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {galleryImages.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {galleryImages.find((img) => img.id === selectedImage)?.date} |{" "}
                {galleryImages.find((img) => img.id === selectedImage)?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
