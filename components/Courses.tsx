"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    name: "免费版",
    price: "¥0",
    features: ["基础课程访问", "每周1小时在线学习", "社区论坛支持"],
    link: "#",
  },
  {
    name: "进阶版",
    price: "¥99/月",
    features: ["所有基础课程", "高级课程访问", "每周5小时在线学习", "1对1导师指导（每月1次）"],
    link: "#",
    recommended: true,
  },
  {
    name: "专业版",
    price: "¥299/月",
    features: ["所有课程无限制访问", "每周不限时在线学习", "1对1导师指导（每周1次）", "专属学习计划"],
    link: "#",
  },
]

export function Courses() {
  return (
    <section id="courses" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">小海博课</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-lg shadow-lg ${course.recommended ? "border-2 border-blue-500" : ""}`}
            >
              {course.recommended && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  推荐
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{course.name}</h3>
              <p className="text-4xl font-bold mb-6">{course.price}</p>
              <ul className="mb-8">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <a href={course.link}>立即订阅</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

