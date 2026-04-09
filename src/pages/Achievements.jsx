import React from 'react'

const Achievements = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">教学成果</h1>
          <p className="text-xl">宁德本地学员的优秀成绩和作品展示</p>
        </div>
      </section>

      {/* 获奖名单 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">获奖名单</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 获奖证书1 */}
            <div className="achievement-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20competition%20award%20certificate%2C%20first%20prize%2C%20colorful%20certificate%20with%20golden%20seal&image_size=landscape_4_3" 
                  alt="获奖证书" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">张同学</h3>
                <p className="text-blue-500 font-medium mb-2">2024年宁德市青少年机器人竞赛一等奖</p>
                <p className="text-gray-600 mb-4">参赛项目：智能垃圾分类机器人</p>
                <p className="text-gray-500 text-sm">学习课程：机器人编程</p>
              </div>
            </div>

            {/* 获奖证书2 */}
            <div className="achievement-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20competition%20award%20certificate%2C%20second%20prize%2C%20colorful%20certificate%20with%20silver%20seal&image_size=landscape_4_3" 
                  alt="获奖证书" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">李同学</h3>
                <p className="text-blue-500 font-medium mb-2">2024年福建省青少年Scratch编程大赛二等奖</p>
                <p className="text-gray-600 mb-4">参赛项目：环保主题小游戏</p>
                <p className="text-gray-500 text-sm">学习课程：Scratch图形化编程</p>
              </div>
            </div>

            {/* 获奖证书3 */}
            <div className="achievement-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20competition%20award%20certificate%2C%20third%20prize%2C%20colorful%20certificate%20with%20bronze%20seal&image_size=landscape_4_3" 
                  alt="获奖证书" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">王同学</h3>
                <p className="text-blue-500 font-medium mb-2">2024年宁德市青少年信息学奥赛三等奖</p>
                <p className="text-gray-600 mb-4">参赛项目：算法设计</p>
                <p className="text-gray-500 text-sm">学习课程：信息学奥赛</p>
              </div>
            </div>

            {/* 获奖证书4 */}
            <div className="achievement-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20competition%20award%20certificate%2C%20excellence%20award%2C%20colorful%20certificate&image_size=landscape_4_3" 
                  alt="获奖证书" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">陈同学</h3>
                <p className="text-blue-500 font-medium mb-2">2024年福建省青少年机器人竞赛优秀奖</p>
                <p className="text-gray-600 mb-4">参赛项目：智能避障机器人</p>
                <p className="text-gray-500 text-sm">学习课程：机器人编程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学员作品展示 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">学员作品展示</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 作品1 */}
            <div className="achievement-card fade-in">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scratch%20game%20project%2C%20colorful%20children%20game%2C%20cartoon%20style&image_size=square" 
                  alt="Scratch小游戏" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">环保小卫士</h3>
                <p className="text-gray-600 mb-4">一款教育类小游戏，玩家需要帮助角色分类垃圾，学习环保知识</p>
                <p className="text-gray-500 text-sm">作者：李同学（10岁）</p>
                <p className="text-gray-500 text-sm">使用工具：Scratch</p>
              </div>
            </div>

            {/* 作品2 */}
            <div className="achievement-card fade-in">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20web%20application%20interface%2C%20simple%20website%20design%2C%20student%20project&image_size=square" 
                  alt="Python项目" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">个人博客系统</h3>
                <p className="text-gray-600 mb-4">使用Python Flask框架开发的个人博客系统，支持文章发布和评论功能</p>
                <p className="text-gray-500 text-sm">作者：王同学（14岁）</p>
                <p className="text-gray-500 text-sm">使用工具：Python、Flask、HTML/CSS</p>
              </div>
            </div>

            {/* 作品3 */}
            <div className="achievement-card fade-in">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=robot%20project%2C%20student%20built%20robot%2C%20functional%20robot%20model&image_size=square" 
                  alt="机器人项目" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">智能避障机器人</h3>
                <p className="text-gray-600 mb-4">使用乐高EV3搭建的智能避障机器人，能够自动避开障碍物并导航</p>
                <p className="text-gray-500 text-sm">作者：张同学（12岁）</p>
                <p className="text-gray-500 text-sm">使用工具：乐高EV3、图形化编程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 升学/竞赛加分案例 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">升学/竞赛加分案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 案例1 */}
            <div className="achievement-card fade-in">
              <h3 className="text-xl font-bold mb-4">王同学 - 宁德一中录取</h3>
              <p className="text-gray-600 mb-4">王同学通过学习Python编程和信息学奥赛课程，在宁德市青少年信息学奥赛中获得三等奖，凭借编程特长被宁德一中录取。</p>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">信息学奥赛三等奖加分</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">编程特长认证</span>
              </div>
            </div>

            {/* 案例2 */}
            <div className="achievement-card fade-in">
              <h3 className="text-xl font-bold mb-4">李同学 - 宁德二中重点班</h3>
              <p className="text-gray-600 mb-4">李同学通过学习Scratch图形化编程，在福建省青少年Scratch编程大赛中获得二等奖，凭借创新能力被宁德二中重点班录取。</p>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Scratch编程大赛二等奖加分</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">创新能力认证</span>
              </div>
            </div>

            {/* 案例3 */}
            <div className="achievement-card fade-in">
              <h3 className="text-xl font-bold mb-4">张同学 - 宁德实验中学</h3>
              <p className="text-gray-600 mb-4">张同学通过学习机器人编程，在宁德市青少年机器人竞赛中获得一等奖，凭借科技特长被宁德实验中学录取。</p>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">机器人竞赛一等奖加分</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">科技特长认证</span>
              </div>
            </div>

            {/* 案例4 */}
            <div className="achievement-card fade-in">
              <h3 className="text-xl font-bold mb-4">陈同学 - 宁德五中特色班</h3>
              <p className="text-gray-600 mb-4">陈同学通过学习Python编程，开发了个人博客系统，凭借编程能力被宁德五中特色班录取。</p>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">编程项目认证</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">创新能力认证</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成果统计 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">成果统计</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">培训学员</p>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">80+</div>
              <p className="text-blue-100">获奖人次</p>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">30+</div>
              <p className="text-blue-100">省市级奖项</p>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">家长满意度</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Achievements