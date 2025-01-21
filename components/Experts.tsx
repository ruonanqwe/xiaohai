"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const experts = [
  {
    name: "张博士",
    role: "心理学专家",
    image: "/placeholder.svg",
    description: "拥有20年临床心理学经验，专注于压力管理和情绪调节",
  },
  {
    name: "李教授",
    role: "职业规划顾问",
    image: "/placeholder.svg",
    description: "曾辅导过1000+职场人士，擅长职业转型和领导力培养",
  },
  {
    name: "王老师",
    role: "教育咨询专家",
    image: "/placeholder.svg",
    description: "在教育领域工作30年，精通学习方法指导和考试技巧",
  },
  {
    name: "刘博士",
    role: "AI研究员",
    image: "/placeholder.svg",
    description: "人工智能领域的先驱，致力于将AI技术应用于教育和咨询",
  },
  {
    name: "陈教授",
    role: "企业管理顾问",
    image: "/placeholder.svg",
    description: "帮助众多企业实现转型升级，擅长组织变革和战略规划",
  },
]

export function Experts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextExpert = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= experts.length ? 0 : prevIndex + 1))
  }

  const prevExpert = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? experts.length - 1 : prevIndex - 1))
  }

  return (
    <section id="experts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">我们的专家团队</h2>
        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={experts[currentIndex].image || "/placeholder.svg"}
                alt={experts[currentIndex].name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{experts[currentIndex].name}</h3>
              <p className="text-blue-600 mb-4">{experts[currentIndex].role}</p>
              <p className="text-gray-600">{experts[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevExpert}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-lg"
            aria-label="Previous expert"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextExpert}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-lg"
            aria-label="Next expert"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

