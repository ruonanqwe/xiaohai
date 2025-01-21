import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, Award, BookOpen, Users } from "lucide-react"

export default function ExpertsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">专家团队</h1>
              <p className="text-lg text-gray-600 mb-8">汇聚各领域顶尖专家，为您提供专业指导</p>
            </div>
          </div>
        </section>

        {/* Expert Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "心理咨询师", count: "20+" },
                { title: "职业规划师", count: "15+" },
                { title: "教育专家", count: "25+" },
                { title: "技术顾问", count: "30+" },
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-blue-600 text-2xl font-bold">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Experts */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">特邀专家</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "张博士",
                  title: "心理学专家",
                  description: "20年临床心理学经验，专注于压力管理和情绪调节",
                  image: "/placeholder.svg",
                  achievements: ["心理学博士", "国家注册心理咨询师", "著名高校特聘教授"],
                },
                {
                  name: "李教授",
                  title: "职业规划顾问",
                  description: "前500强HR总监，专注于职业生涯规划和领导力培养",
                  image: "/placeholder.svg",
                  achievements: ["人力资源管理专家", "职业规划师", "企业管理顾问"],
                },
                {
                  name: "王老师",
                  title: "教育专家",
                  description: "30年教育经验，擅长学习方法指导和考试技巧",
                  image: "/placeholder.svg",
                  achievements: ["特级教师", "教育学博士", "知名教育专家"],
                },
              ].map((expert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                    <p className="text-blue-600 mb-4">{expert.title}</p>
                    <p className="text-gray-600 mb-4">{expert.description}</p>
                    <div className="space-y-2">
                      {expert.achievements.map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">预约咨询</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "50000+", label: "成功案例", icon: Award },
                { number: "100+", label: "专家团队", icon: Users },
                { number: "200+", label: "专业认证", icon: BookOpen },
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

