import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">联系我们</h1>
              <p className="text-lg text-gray-600">如果您有任何问题或建议，请随时与我们联系</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">电话</h3>
                      <p className="text-gray-600">400-123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">邮箱</h3>
                      <p className="text-gray-600">contact@xiaohai.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold mb-1">地址</h3>
                      <p className="text-gray-600">北京市朝阳区科技园100号</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">工作时间</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                    <p className="text-gray-600">周六至周日: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">姓名</label>
                    <Input type="text" placeholder="请输入您的姓名" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">邮箱</label>
                    <Input type="email" placeholder="请输入您的邮箱" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">电话</label>
                    <Input type="tel" placeholder="请输入您的电话号码" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">消息内容</label>
                    <Textarea placeholder="请输入您的消息内容" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    发送消息
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6 text-center">我们的位置</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg">
              {/* Map placeholder - You would integrate an actual map here */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">地图加载中...</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

