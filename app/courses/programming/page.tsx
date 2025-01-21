import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Code, Book, Users, Clock } from "lucide-react"

export default function ProgrammingCoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">编程开发课程</h1>
                <p className="text-lg text-gray-600 mb-8">从入门到精通的编程学习之路</p>
                <Button size="lg" className="bg-blue-600">
                  立即报名
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Programming Course"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course List */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">课程列表</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web开发基础",
                  level: "入门",
                  duration: "12周",
                  image: "/placeholder.svg",
                },
                {
                  title: "Python编程",
                  level: "初级",
                  duration: "8周",
                  image: "/placeholder.svg",
                },
                {
                  title: "Java开发",
                  level: "中级",
                  duration: "16周",
                  image: "/placeholder.svg",
                },
                {
                  title: "移动应用开发",
                  level: "中级",
                  duration: "10周",
                  image: "/placeholder.svg",
                },
                {
                  title: "人工智能基础",
                  level: "高级",
                  duration: "14周",
                  image: "/placeholder.svg",
                },
                {
                  title: "区块链开发",
                  level: "高级",
                  duration: "12周",
                  image: "/placeholder.svg",
                },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>难度：{course.level}</span>
                      <span>时长：{course.duration}</span>
                    </div>
                    <Button className="w-full">课程详情</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">学习路线</h2>
            <div className="max-w-4xl mx-auto">
              {["基础知识学习", "实战项目训练", "高级特性掌握", "企业级项目实践"].map((step, index) => (
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
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "课程数量", icon: Book },
                { number: "10000+", label: "学员数量", icon: Users },
                { number: "200+", label: "项目案例", icon: Code },
                { number: "1000+", label: "课时总量", icon: Clock },
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

