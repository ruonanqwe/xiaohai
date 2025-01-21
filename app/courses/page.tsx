import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check, Star, Book, Users, Clock } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">小海博课</h1>
              <p className="text-lg text-gray-600 mb-8">智能学习平台，让学习更高效</p>
              <Button size="lg" className="bg-blue-600">
                开始学习
              </Button>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">课程分类</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "编程开发",
                  description: "包含Web开发、移动开发、人工智能等课程",
                  image: "/placeholder.svg",
                },
                {
                  title: "设计创作",
                  description: "UI设计、平面设计、3D建模等专业课程",
                  image: "/placeholder.svg",
                },
                {
                  title: "商业管理",
                  description: "项目管理、营销策略、财务管理等实用课程",
                  image: "/placeholder.svg",
                },
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">学习计划</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "免费版",
                  price: "¥0",
                  features: ["基础课程访问", "社区支持", "每周学习任务"],
                },
                {
                  name: "标准版",
                  price: "¥99/月",
                  features: ["全部课程访问", "作业批改", "导师答疑", "学习证书"],
                  recommended: true,
                },
                {
                  name: "专业版",
                  price: "¥299/月",
                  features: ["全部课程访问", "1对1辅导", "职业规划", "项目实战"],
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
                        <Check className="text-green-500 mr-2" />
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

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "1000+", label: "精品课程", icon: Book },
                { number: "50000+", label: "注册学员", icon: Users },
                { number: "200000+", label: "学习时长", icon: Clock },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
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

