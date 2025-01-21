"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "小海助手",
    description: "智能AI助手，为您解答各种问题",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    name: "小海翻译",
    description: "精准高效的多语言翻译工具",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    name: "小海写作",
    description: "AI驱动的智能写作助手",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    name: "小海数据",
    description: "强大的数据分析和可视化工具",
    image: "/placeholder.svg",
    link: "#",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">小海系列软件</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Button asChild>
                <a href={product.link}>了解更多</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

