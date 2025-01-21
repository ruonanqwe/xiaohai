"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "张三",
    role: "企业家",
    content: "小海帮我管理日程，提高了我的工作效率。非常推荐！",
    avatar: "/placeholder.svg",
  },
  {
    name: "李四",
    role: "学生",
    content: "有了小海，我的学习变得更加轻松有趣。它就像我的私人助教！",
    avatar: "/placeholder.svg",
  },
  {
    name: "王五",
    role: "自由职业者",
    content: "小海是我工作中不可或缺的助手，帮我处理各种琐事，节省了大量时间。",
    avatar: "/placeholder.svg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">用户反馈</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

