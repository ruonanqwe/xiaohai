"use client"

import { motion } from "framer-motion"
import { MessageSquare, Briefcase, GraduationCap, Heart } from "lucide-react"

const services = [
  {
    icon: MessageSquare,
    title: "在线即时咨询",
    description: "随时随地与小海AI进行即时对话，获得快速、准确的咨询建议",
  },
  {
    icon: Briefcase,
    title: "职业发展规划",
    description: "根据您的背景和目标，为您制定个性化的职业发展计划",
  },
  {
    icon: GraduationCap,
    title: "学习进阶指导",
    description: "为学生和终身学习者提供学习方法指导和资源推荐",
  },
  {
    icon: Heart,
    title: "心理健康咨询",
    description: "提供初步的心理健康评估和建议，帮助您保持积极心态",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">我们的咨询服务</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

