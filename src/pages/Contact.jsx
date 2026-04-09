import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl">宁德贝尔乐高编程中心 - 随时为您服务</p>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">联系信息</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">校区地址</h3>
                    <p className="text-gray-600">宁德市蕉城区宝信美食广场商业街2楼</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">联系电话</h3>
                    <p className="text-gray-600">13860399043</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">电子邮箱</h3>
                    <p className="text-gray-600">info@bellelego.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">营业时间</h3>
                    <p className="text-gray-600">周一至周五: 14:00 - 20:30</p>
                    <p className="text-gray-600">周六至周日: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">微信二维码</h3>
                <div className="w-48 h-48 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-gray-800">微信二维码</span>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">在线咨询</h2>
              <form className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4">
                  <label className="form-label">姓名</label>
                  <input type="text" className="form-input" placeholder="请输入您的姓名" />
                </div>
                <div className="mb-4">
                  <label className="form-label">手机号</label>
                  <input type="tel" className="form-input" placeholder="请输入您的手机号" />
                </div>
                <div className="mb-4">
                  <label className="form-label">咨询内容</label>
                  <textarea className="form-input h-32" placeholder="请输入您的咨询内容"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">提交咨询</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 地图 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">校区位置</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
            {/* 嵌入Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.046463094049!2d119.531196!3d26.651651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f155f4b9e4d94f%3A0x0!2z57uE5aSW5bGV55Sf5a2m5a625aSn5p6Q!5e0!3m2!1szh-CN!2sus!4v1678320000000!5m2!1szh-CN!2sus" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              loading="lazy" 
              title="宁德市蕉城区宝信美食广场地图"
            />
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">常见问题</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
              <h3 className="text-xl font-bold mb-2">Q: 孩子没有编程基础，能学习吗？</h3>
              <p className="text-gray-600">A: 当然可以！我们的课程是根据孩子的年龄和能力水平设计的，从零基础开始，循序渐进地学习编程知识。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
              <h3 className="text-xl font-bold mb-2">Q: 一个班有多少个学生？</h3>
              <p className="text-gray-600">A: 我们采用小班制教学，每班不超过8人，确保每个孩子都能得到充分的关注和指导。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
              <h3 className="text-xl font-bold mb-2">Q: 可以试听吗？</h3>
              <p className="text-gray-600">A: 可以！我们提供免费试听课程，您可以通过在线预约或电话联系我们安排试听。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
              <h3 className="text-xl font-bold mb-2">Q: 课程费用是多少？</h3>
              <p className="text-gray-600">A: 课程费用根据课程类型和课时不同而有所差异，具体请联系我们咨询。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
              <h3 className="text-xl font-bold mb-2">Q: 如何报名？</h3>
              <p className="text-gray-600">A: 您可以通过在线预约、电话联系或直接到校区报名。我们的工作人员会为您提供详细的报名流程和课程信息。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact