import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MessageSquare, Zap, Shield, Download } from "lucide-react"

export default function XiaohaiAssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">小海助手</h1>
                <p className="text-lg text-gray-600 mb-8">您的智能AI助手，随时随地为您解答问题</p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-blue-600">
                    立即下载
                  </Button>
                  <Button size="lg" variant="outline">
                    了解更多
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Xiaohai Assistant"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "智能对话",
                  description: "自然语言交互，精准理解您的需求",
                },
                {
                  icon: Zap,
                  title: "快速响应",
                  description: "毫秒级响应，即时获取答案",
                },
                {
                  icon: Shield,
                  title: "安全可靠",
                  description: "数据加密存储，保护您的隐私",
                },
                {
                  icon: Download,
                  title: "离线使用",
                  description: "支持离线模式，随时随地使用",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">产品展示</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Image
                  key={index}
                  src="/placeholder.svg"
                  alt={`Screenshot ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">价格方案</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "基础版",
                  price: "免费",
                  features: ["基础对话功能", "每日使用限额", "基础客服支持"],
                },
                {
                  name: "专业版",
                  price: "￥29/月",
                  features: ["无限对话次数", "高级AI模型", "优先客服支持", "个性化定制"],
                  recommended: true,
                },
                {
                  name: "企业版",
                  price: "联系我们",
                  features: ["团队协作", "API接口", "专属客户经理", "自定义功能"],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg ${plan.recommended ? "border-2 border-blue-500" : ""}`}
                >
                  {plan.recommended && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      推荐
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">选择方案</Button>
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

