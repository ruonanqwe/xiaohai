import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Shield, Brain, Smile } from "lucide-react"

export default function PsychologyConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">心理健康咨询</h1>
                <p className="text-lg text-gray-600 mb-8">专业的心理咨询服务，助您保持心理健康</p>
                <Button size="lg" className="bg-blue-600">
                  立即咨询
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Psychology Consulting"
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
            <h2 className="text-3xl font-bold text-center mb-12">服务内容</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "情感咨询",
                  description: "处理情感困扰，建立健康关系",
                },
                {
                  icon: Shield,
                  title: "压力管理",
                  description: "学习压力调节，提高抗压能力",
                },
                {
                  icon: Brain,
                  title: "认知调适",
                  description: "改善认知模式，培养积极思维",
                },
                {
                  icon: Smile,
                  title: "情绪管理",
                  description: "掌握情绪管理技巧，保持心理平衡",
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

        {/* Features */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">我们的特色</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "专业团队",
                  description: "持证心理咨询师，丰富的实践经验",
                },
                {
                  title: "个性化服务",
                  description: "根据个人情况制定专属解决方案",
                },
                {
                  title: "全程保密",
                  description: "严格的隐私保护措施，安全可靠",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "咨询过程是如何保密的？",
                  answer: "我们采用严格的隐私保护措施，所有咨询内容严格保密。",
                },
                {
                  question: "一次咨询多长时间？",
                  answer: "标准咨询时长为50分钟，可根据具体情况调整。",
                },
                {
                  question: "如何预约咨询？",
                  answer: "可以通过网站预约系统或电话预约，我们会尽快安排。",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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

