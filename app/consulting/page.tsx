import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageSquare, Users, Clock, Award } from "lucide-react"

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">专业咨询服务</h1>
                <p className="text-lg text-gray-600 mb-8">
                  我们提供全方位的咨询服务，帮助您解决各种问题，实现个人和职业的成长。
                </p>
                <Button size="lg" className="bg-blue-600">
                  立即预约
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Consulting Services"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">咨询服务类型</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "职业发展咨询",
                  description: "帮助您规划职业道路，提供职业发展建议",
                  icon: Users,
                },
                {
                  title: "心理健康咨询",
                  description: "专业的心理咨询服务，帮助您保持心理健康",
                  icon: MessageSquare,
                },
                {
                  title: "学习规划咨询",
                  description: "为学生提供学习方法和规划指导",
                  icon: Clock,
                },
                {
                  title: "企业管理咨询",
                  description: "为企业提供管理优化和发展建议",
                  icon: Award,
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">咨询流程</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "预约咨询", description: "选择合适的时间和咨询类型" },
                { step: "2", title: "需求沟通", description: "与咨询师深入交流您的需求" },
                { step: "3", title: "专业分析", description: "获得专业的分析和建议" },
                { step: "4", title: "持续跟进", description: "定期回访和效果评估" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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

