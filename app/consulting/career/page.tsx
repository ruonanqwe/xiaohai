import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Briefcase, Target, Users, TrendingUp } from "lucide-react"

export default function CareerConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">职业发展咨询</h1>
                <p className="text-lg text-gray-600 mb-8">专业的职业规划指导，帮助您实现职业理想</p>
                <Button size="lg" className="bg-blue-600">
                  立即预约
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Career Consulting"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "职业规划",
                  description: "制定个性化的职业发展计划",
                },
                {
                  icon: Target,
                  title: "目标设定",
                  description: "帮助您设定清晰可行的职业目标",
                },
                {
                  icon: Users,
                  title: "面试指导",
                  description: "提供专业的面试技巧和模拟训练",
                },
                {
                  icon: TrendingUp,
                  title: "能力提升",
                  description: "针对性的职业技能提升建议",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <service.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">咨询流程</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {["初步沟通", "能力评估", "制定计划", "执行指导", "定期复盘"].map((step, index) => (
                  <div key={index} className="flex items-center mb-8">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">准备好开始您的职业规划了吗？</h2>
            <Button size="lg" className="bg-blue-600">
              预约咨询
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

