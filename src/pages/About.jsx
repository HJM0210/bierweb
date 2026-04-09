import React from 'react'

const About = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl">宁德贝尔乐高编程中心 - 专注少儿编程教育</p>
        </div>
      </section>

      {/* 机构简介 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">机构简介</h2>
              <p className="text-gray-600 mb-4">宁德贝尔乐高编程中心成立于2014年，是宁德本地专业的少儿编程教育机构，专注4-16岁孩子的编程教育。</p>
              <p className="text-gray-600 mb-4">我们拥有一支专业的教师团队，全部为宁德本地居民，了解本地教育环境和学生特点。教师均具有相关专业背景和丰富的教学经验，持有专业认证证书。</p>
              <p className="text-gray-600 mb-4">我们的教学理念是：通过编程教育，培养孩子的逻辑思维、创造力和解决问题的能力，为孩子的未来发展打下坚实的基础。</p>
              <p className="text-gray-600 mb-4">目前，我们在宁德市蕉城区宝信美食广场商业街2楼设有校区，教学面积达500平方米，配备了先进的教学设备和舒适的学习环境。</p>
            </div>
            <div className="fade-in">
              <div className="bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20programming%20classroom%2C%20modern%20education%20center%2C%20colorful%20coding%20school&image_size=landscape_4_3" 
                  alt="校区环境" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 校区环境 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">校区环境</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-in">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20education%20center%20reception%2C%20colorful%20children%20school%20lobby%2C%20friendly%20environment&image_size=square" 
                  alt="校区前台" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 text-gray-600">校区前台</p>
            </div>
            <div className="fade-in">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20programming%20classroom%2C%20computers%20for%20kids%2C%20colorful%20learning%20environment&image_size=square" 
                  alt="编程教室" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 text-gray-600">编程教室</p>
            </div>
            <div className="fade-in">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-64">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=robotics%20classroom%20for%20kids%2C%20lego%20robots%2C%20hands-on%20learning%20space&image_size=square" 
                  alt="机器人教室" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center mt-4 text-gray-600">机器人教室</p>
            </div>
          </div>
        </div>
      </section>

      {/* 教学理念 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">教学理念</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">以学生为中心</h3>
              <p className="text-gray-600">根据每个孩子的特点和学习能力，定制个性化的学习方案，让每个孩子都能在编程学习中获得成就感</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">实践与创新</h3>
              <p className="text-gray-600">通过项目式学习和实践操作，培养孩子的动手能力和创新思维，让孩子在实践中学习和成长</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">全面发展</h3>
              <p className="text-gray-600">不仅教授编程技能，更注重培养孩子的逻辑思维、创造力、团队协作能力和解决问题的能力</p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">发展历程</h2>
          <div className="relative">
            {/* 时间轴 */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-blue-200"></div>
            
            {/* 2014 */}
            <div className="relative mb-12 md:mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
                    <h3 className="text-xl font-bold mb-2">2014年</h3>
                    <p className="text-gray-600">宁德贝尔乐高编程中心成立，开始提供少儿编程教育服务</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
            
            {/* 2016 */}
            <div className="relative mb-12 md:mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
                    <h3 className="text-xl font-bold mb-2">2016年</h3>
                    <p className="text-gray-600">扩大校区规模，增加机器人编程课程</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2018 */}
            <div className="relative mb-12 md:mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
                    <h3 className="text-xl font-bold mb-2">2018年</h3>
                    <p className="text-gray-600">引入Python编程课程，扩展课程体系</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
            
            {/* 2020 */}
            <div className="relative mb-12 md:mb-24">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
                    <h3 className="text-xl font-bold mb-2">2020年</h3>
                    <p className="text-gray-600">开设信息学奥赛课程，培养竞赛人才</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2024 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-lg p-6 fade-in">
                    <h3 className="text-xl font-bold mb-2">2024年</h3>
                    <p className="text-gray-600">成为宁德市青少年科技教育示范基地</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">加入我们</h2>
              <p className="text-xl">让您的孩子在编程世界中探索无限可能</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">联系我们</a>
              <a href="/course" className="btn-secondary">了解课程</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About