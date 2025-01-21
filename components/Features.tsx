"use client"

import { motion } from "framer-motion"
import { MessageSquare, Brain, Zap } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "智能对话",
    description: "与小海进行自然、流畅的对话，获得智能回答",
  },
  {
    icon: Brain,
    title: "多功能助手",
    description: "从日程安排到信息查询，小海都能帮您搞定",
  },
  {
    icon: Zap,
    title: "快速响应",
    description: "无论何时何地，小海都能迅速为您提供帮助",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">小海的强大功能</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

