import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">小海智能</h3>
            <p className="text-sm text-gray-400">您的智能助手，随时随地为您服务</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  主页
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-400 hover:text-white">
                  咨询服务
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-sm text-gray-400 hover:text-white">
                  小海系列
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-sm text-gray-400 hover:text-white">
                  小海博课
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">邮箱：contact@xiaohai.com</li>
              <li className="text-sm text-gray-400">电话：400-123-4567</li>
              <li className="text-sm text-gray-400">地址：北京市朝阳区科技园100号</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">{/* 这里可以添加社交媒体图标 */}</div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} 小海智能. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}

