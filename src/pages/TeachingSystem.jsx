import React from 'react'

const TeachingSystem = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">教学体系</h1>
          <p className="text-xl">贝尔乐高独特的小班制教学模式，为每个孩子提供个性化的学习体验</p>
        </div>
      </section>

      {/* 核心教学体系 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">核心教学体系</h2>
          
          {/* 小班制教学 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">小班制教学</h3>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">班级规模</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>幼儿段：最多7人</li>
                      <li>小学段：最多8-10人</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  我们坚持小班制教学，确保每个孩子都能得到充分的关注和个性化指导。小班制让老师能够更好地了解每个孩子的学习情况，根据孩子的特点调整教学方法，提高学习效果。
                </p>
              </div>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">能力考核测评</h3>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">定期测评</h4>
                    <p className="text-gray-600">
                      我们定期对孩子的能力进行考核测评，及时了解孩子的学习进度和掌握情况，根据测评结果调整教学计划，确保每个孩子都能在适合自己的节奏中学习和成长。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 家校反馈与赛事 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">家校反馈系统</h3>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">小麦助教平台</h4>
                    <p className="text-gray-600">
                      我们使用小麦助教平台，为家长提供每节课的课程反馈，包括孩子的课堂表现、学习内容、进步情况等。家长可以通过平台随时了解孩子的学习状态，与老师保持密切沟通。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">赛事与奖学金</h3>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">年度赛事颁奖典礼</h4>
                    <p className="text-gray-600">
                      我们每年举办年度赛事颁奖典礼，为在各类编程比赛中取得优异成绩的学生颁发证书和赛事奖学金，鼓励学生积极参与竞赛，展示自己的编程技能和创新能力。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教学优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">教学优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">专业师资</h3>
              <p className="text-gray-600">拥有经验丰富的专业教师团队，精通乐高编程教育，能够为孩子提供高质量的教学指导。</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">个性化教学</h3>
              <p className="text-gray-600">根据每个孩子的学习能力和兴趣特点，制定个性化的学习计划，让每个孩子都能在适合自己的节奏中学习。</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">实践创新</h3>
              <p className="text-gray-600">注重实践能力和创新思维的培养，通过项目式学习和竞赛活动，激发孩子的创造力和解决问题的能力。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="fade-in">
                <h2 className="text-3xl font-bold mb-4">了解更多教学体系详情</h2>
                <p className="mb-6">如果您想了解更多关于我们的教学体系，或者有任何疑问，欢迎随时联系我们。</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    专业的师资团队
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    小班制个性化教学
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    完善的家校反馈系统
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-800 fade-in">
                <h3 className="text-xl font-bold mb-4">联系我们</h3>
                <form>
                  <div className="mb-4">
                    <label className="form-label">姓名</label>
                    <input type="text" className="form-input" placeholder="请输入您的姓名" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">联系方式</label>
                    <input type="tel" className="form-input" placeholder="请输入您的手机号" />
                  </div>
                  <div className="mb-6">
                    <label className="form-label">留言</label>
                    <textarea className="form-input" rows="4" placeholder="请输入您的问题或需求"></textarea>
                  </div>
                  <button type="submit" className="btn-secondary w-full">提交</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeachingSystem