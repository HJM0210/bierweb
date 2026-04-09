import React from 'react'

const Teachers = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">师资团队</h1>
          <p className="text-xl">专业的教师团队，为孩子提供高质量的编程教育</p>
        </div>
      </section>

      {/* 少儿校区 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">少儿校区</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 黄老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20teacher%20in%20robotics%20classroom%2C%20smiling%2C%20asian%20man%20with%20glasses&image_size=square" 
                  alt="黄老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">黄老师</h3>
                <p className="text-blue-500 font-medium mb-3">机器人编程讲师/少儿校区校长</p>
                <p className="text-gray-600 mb-4">8年机器人编程教学经验，宁德本地教师，擅长机器人竞赛指导，多次带领学生获得国家级奖项。作为少儿校区校长，负责校区的整体运营和教学管理。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">机器人编程</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">竞赛指导</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">乐高EV3</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">教育管理</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>教育部白名单赛事国奖教练</li>
                    <li>福建省科协机器人竞赛指导教练</li>
                    <li>乐高官方认证讲师</li>
                    <li>机器人竞赛优秀指导教师</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 小蓝老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20teacher%20in%20coding%20classroom%2C%20smiling%2C%20asian%20woman%20with%20glasses&image_size=square" 
                  alt="小蓝老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">小蓝老师</h3>
                <p className="text-blue-500 font-medium mb-3">Scratch编程讲师</p>
                <p className="text-gray-600 mb-4">6年Scratch编程教学经验，宁德本地教师，擅长寓教于乐的教学方式，让孩子在快乐中学习编程，培养孩子的创造力和逻辑思维。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Scratch编程</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">儿童编程教育</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">游戏设计</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">创意编程</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>国际机器人创客大赛编程组别特等奖教练</li>
                    <li>中国电子学会考级培训讲师</li>
                    <li>Scratch官方认证教师</li>
                    <li>宁德市优秀教育工作者</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 粥粥老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20teacher%20in%20coding%20classroom%2C%20smiling%2C%20asian%20man&image_size=square" 
                  alt="粥粥老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">粥粥老师</h3>
                <p className="text-blue-500 font-medium mb-3">C++编程讲师</p>
                <p className="text-gray-600 mb-4">7年C++编程教学经验，宁德本地教师，曾在知名科技公司担任软件工程师，擅长算法和数据结构教学，多次指导学生在信息学奥赛中取得优异成绩。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">C++编程</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">算法设计</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">信息学奥赛</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>教育部白名单事信息素养大赛指导教练</li>
                    <li>宁德市青少年编程教育优秀教师</li>
                    <li>中国电子学会青少年编程指导教师证书</li>
                    <li>信息学奥赛高级指导教师</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 幼儿校区 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">幼儿校区</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 林老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20teacher%20in%20kindergarten%20classroom%2C%20smiling%2C%20asian%20woman&image_size=square" 
                  alt="林老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">林老师</h3>
                <p className="text-blue-500 font-medium mb-3">幼儿校区校长</p>
                <p className="text-gray-600 mb-4">10年幼儿教育经验，宁德本地教师，负责幼儿校区的课程培训、教学质量把关和赛事培训等工作。擅长根据幼儿的认知特点设计适合的教学方案，激发孩子的学习兴趣。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">幼儿教育</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">乐高启蒙</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">教育管理</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>幼儿教育教师资格证</li>
                    <li>乐高官方认证讲师</li>
                    <li>宁德市优秀幼儿教师</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 小蕊老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20teacher%20in%20kindergarten%20classroom%2C%20smiling%2C%20asian%20woman%20young&image_size=square" 
                  alt="小蕊老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">林蕊老师</h3>
                <p className="text-blue-500 font-medium mb-3">幼儿乐高指导教师</p>
                <p className="text-gray-600 mb-4">5年幼儿乐高教学经验，宁德本地教师，擅长幼儿大颗粒乐高搭建教学，通过游戏化的教学方式，培养孩子的动手能力、空间思维和创造力。曾带领学生在宁德市幼儿乐高搭建比赛中获得团体一等奖。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">幼儿乐高</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">大颗粒搭建</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">创意启蒙</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>乐高官方认证讲师</li>
                    <li>幼儿教育教师资格证</li>
                    <li>儿童发展心理学证书</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 小乔老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20teacher%20in%20kindergarten%20classroom%2C%20smiling%2C%20asian%20woman%20friendly&image_size=square" 
                  alt="小乔老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">乔悦老师</h3>
                <p className="text-blue-500 font-medium mb-3">幼儿乐高指导教师</p>
                <p className="text-gray-600 mb-4">4年幼儿乐高教学经验，宁德本地教师，擅长通过乐高搭建培养孩子的想象力和创造力，注重孩子的个性化发展，让每个孩子都能在乐高世界中找到乐趣。曾指导学生获得福建省幼儿创意搭建大赛银奖。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">幼儿乐高</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">创意搭建</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">儿童启蒙</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>乐高官方认证讲师</li>
                    <li>幼儿教育教师资格证</li>
                    <li>早期教育指导师</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 小蔡老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20teacher%20in%20kindergarten%20classroom%2C%20smiling%2C%20asian%20man&image_size=square" 
                  alt="小蔡老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">蔡颖老师</h3>
                <p className="text-blue-500 font-medium mb-3">幼儿乐高指导教师</p>
                <p className="text-gray-600 mb-4">3年幼儿乐高教学经验，宁德本地教师，擅长通过乐高搭建培养孩子的动手能力和逻辑思维，教学风格活泼有趣，深受孩子们的喜爱。曾带领学生参加宁德市幼儿科技节乐高搭建展示活动，获得优秀指导教师奖。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">幼儿乐高</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">动手能力培养</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">游戏化教学</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>乐高官方认证讲师</li>
                    <li>幼儿教育教师资格证</li>
                    <li>儿童游戏指导师</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教务中心 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">教务中心</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 陈校长 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20school%20principal%2C%20smiling%2C%20asian%20man%20with%20glasses&image_size=square" 
                  alt="陈校长" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">陈校长</h3>
                <p className="text-blue-500 font-medium mb-3">校长</p>
                <p className="text-gray-600 mb-4">15年教育管理经验，宁德本地教育专家，负责贝尔乐高编程中心的整体运营和发展战略。致力于为宁德的孩子们提供高质量的编程教育，培养未来的科技领袖。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">教育管理</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">战略规划</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">师资培训</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>教育管理硕士</li>
                    <li>高级教育咨询师</li>
                    <li>宁德市教育系统先进工作者</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 晶晶老师 */}
            <div className="teacher-card fade-in">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20receptionist%20in%20school%20office%2C%20smiling%2C%20asian%20woman&image_size=square" 
                  alt="晶晶老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">晶晶老师</h3>
                <p className="text-blue-500 font-medium mb-3">教务前台老师</p>
                <p className="text-gray-600 mb-4">5年教务工作经验，宁德本地教师，负责前台接待、课程咨询、报名登记等工作。服务热情周到，善于与家长沟通，为家长和学生提供优质的服务。</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">擅长领域：</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">教务管理</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">客户服务</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">课程咨询</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">所获证书：</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>教育管理资格证</li>
                    <li>客户服务高级证书</li>
                    <li>普通话等级证书</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 教师团队优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">师资团队优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">本地师资</h3>
              <p className="text-gray-600">全部教师均为宁德本地居民，了解本地教育环境和学生特点</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">专业背景</h3>
              <p className="text-gray-600">教师均具有相关专业背景和丰富的教学经验，持有专业认证证书</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">持续培训</h3>
              <p className="text-gray-600">定期参加专业培训，不断更新教学理念和方法，提升教学质量</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Teachers