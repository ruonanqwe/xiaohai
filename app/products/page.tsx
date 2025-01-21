import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Download, Users, Zap } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">小海系列产品</h1>
              <p className="text-lg text-gray-600 mb-8">智能化解决方案，提升您的工作和学习效率</p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "小海助手",
                  description: "智能AI助手，为您解答各种问题，提供全天候服务",
                  features: ["智能对话", "多场景应用", "持续学习进化"],
                  image: "/placeholder.svg",
                },
                {
                  name: "小海翻译",
                  description: "专业的多语言翻译工具，支持实时语音翻译",
                  features: ["多语言支持", "实时翻译", "离线使用"],
                  image: "/placeholder.svg",
                },
                {
                  name: "小海写作",
                  description: "AI驱动的智能写作助手，提供专业写作建议",
                  features: ["智能纠错", "风格优化", "多种模板"],
                  image: "/placeholder.svg",
                },
                {
                  name: "小海数据",
                  description: "强大的数据分析和可视化工具，让数据更直观",
                  features: ["数据分析", "可视化图表", "实时监控"],
                  image: "/placeholder.svg",
                },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <Star className="w-5 h-5 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <Button className="flex-1">免费试用</Button>
                      <Button variant="outline" className="flex-1">
                        了解更多
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "100万+", label: "用户数量", icon: Users },
                { number: "50万+", label: "下载量", icon: Download },
                { number: "98%", label: "满意度", icon: Zap },
              ].map((stat, index) => (
                <div key={index}>
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

