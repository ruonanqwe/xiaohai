"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "基础咨询",
    price: "¥99/次",
    features: ["30分钟在线咨询", "基础问题解答", "7天内免费跟进"],
    recommended: false,
  },
  {
    name: "深度咨询",
    price: "¥299/次",
    features: ["60分钟深度咨询", "个性化解决方案", "14天内免费跟进", "专家团队支持"],
    recommended: true,
  },
  {
    name: "企业方案",
    price: "联系我们",
    features: ["定制咨询时长", "团队培训方案", "专属客户经理", "全年无限次跟进"],
    recommended: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">选择适合您的方案</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white p-8 rounded-lg shadow-lg ${plan.recommended ? "border-2 border-blue-500" : ""}`}
            >
              {plan.recommended && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  推荐
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">立即咨询</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

