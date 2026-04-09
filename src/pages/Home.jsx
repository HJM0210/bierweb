import React, { useState, useEffect } from 'react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/pic/3.jpg",
      alt: "校区外观"
    },
    {
      image: "/pic/2.jpg",
      alt: "校区入口"
    },
    {
      image: "/pic/1.jpg",
      alt: "校区前台"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* 轮播图 */}
      <section className="relative">
        <div className="carousel-item">
          {/* 背景图 */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter blur-md"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          ></div>
          {/* 前景图 */}
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].alt} 
            className="w-full h-full object-contain relative z-10"
          />
          <div className="carousel-content relative z-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">宁德贝尔乐高编程中心</h1>
              <p className="text-xl md:text-2xl mb-8 fade-in">专注4-16岁少儿编程教育</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in">
                <a href="/course" className="btn-primary">了解课程</a>
                <a href="/contact" className="btn-secondary">预约试听</a>
              </div>
            </div>
          </div>
        </div>
        {/* 轮播指示器 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 relative z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">核心优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">宁德本土10年教学经验</h3>
              <p className="text-gray-600">深耕宁德本地教育市场，了解本地学生特点和学习需求</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">小班制教学</h3>
              <p className="text-gray-600">每班不超过8人，确保每个孩子都能得到充分的关注和指导</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">赛事指导</h3>
              <p className="text-gray-600">专业指导学生参加各类编程比赛，提升竞争力和自信心</p>
            </div>
            <div className="card text-center fade-in">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">专业服务</h3>
              <p className="text-gray-600">提供全方位的教学服务，包括课后辅导、家长沟通等</p>
            </div>
          </div>
        </div>
      </section>

      {/* 热门课程 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">热门课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="course-card fade-in">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scratch%20programming%20for%20kids%2C%20colorful%20block%20coding%2C%20children%20creating%20games&image_size=square" 
                  alt="Scratch图形化编程" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Scratch图形化编程</h3>
                <p className="text-gray-600 mb-4">通过拖拽积木块学习编程逻辑，培养孩子的创造力和思维能力</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-500 font-medium">适合年龄：6-12岁</span>
                  <span className="text-gray-600">课时：48课时</span>
                </div>
                <a href="/course" className="btn-primary w-full text-center">了解详情</a>
              </div>
            </div>
            <div className="course-card fade-in">
              <div className="h-48 bg-orange-100 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=python%20programming%20for%20teens%2C%20coding%20on%20laptop%2C%20teenager%20learning%20programming&image_size=square" 
                  alt="Python编程" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Python编程</h3>
                <p className="text-gray-600 mb-4">学习Python编程语言，开发实用应用和游戏，提升逻辑思维</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-500 font-medium">适合年龄：10-16岁</span>
                  <span className="text-gray-600">课时：60课时</span>
                </div>
                <a href="/course" className="btn-primary w-full text-center">了解详情</a>
              </div>
            </div>
            <div className="course-card fade-in">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=robot%20programming%20for%20kids%2C%20children%20building%20and%20programming%20robots%2C%20stem%20education&image_size=square" 
                  alt="机器人编程" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">机器人编程</h3>
                <p className="text-gray-600 mb-4">通过搭建和编程机器人，学习机械原理和编程逻辑</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-500 font-medium">适合年龄：8-14岁</span>
                  <span className="text-gray-600">课时：56课时</span>
                </div>
                <a href="/course" className="btn-primary w-full text-center">了解详情</a>
              </div>
            </div>
            <div className="course-card fade-in">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=informatics%20olympiad%20preparation%2C%20students%20coding%20competitively%2C%20algorithm%20learning&image_size=square" 
                  alt="信息学奥赛" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">信息学奥赛</h3>
                <p className="text-gray-600 mb-4">针对信息学奥赛进行专业训练，提升算法和编程能力</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-500 font-medium">适合年龄：12-16岁</span>
                  <span className="text-gray-600">课时：72课时</span>
                </div>
                <a href="/course" className="btn-primary w-full text-center">了解详情</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学员案例 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">学员案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="achievement-card fade-in">
              <div className="h-48 bg-white rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=student%20receiving%20award%20certificate%2C%20coding%20competition%20winner%2C%20proud%20child%20with%20trophy&image_size=square" 
                  alt="获奖证书" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">张同学</h3>
              <p className="text-gray-600 mb-2">获得2024年宁德市青少年机器人竞赛一等奖</p>
              <p className="text-gray-500 text-sm">学习课程：机器人编程</p>
            </div>
            <div className="achievement-card fade-in">
              <div className="h-48 bg-white rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=student%20showing%20scratch%20game%20project%2C%20child%20demonstrating%20coding%20project%2C%20proud%20young%20programmer&image_size=square" 
                  alt="学员作品" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">李同学</h3>
              <p className="text-gray-600 mb-2">开发了一款环保主题的Scratch小游戏</p>
              <p className="text-gray-500 text-sm">学习课程：Scratch图形化编程</p>
            </div>
            <div className="achievement-card fade-in">
              <div className="h-48 bg-white rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=student%20with%20admission%20letter%2C%20high%20school%20acceptance%2C%20proud%20teenager%20with%20certificate&image_size=square" 
                  alt="升学案例" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">王同学</h3>
              <p className="text-gray-600 mb-2">凭借编程特长被宁德一中录取</p>
              <p className="text-gray-500 text-sm">学习课程：Python编程、信息学奥赛</p>
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
                <h2 className="text-3xl font-bold mb-4">立即预约试听课程</h2>
                <p className="mb-6">让您的孩子体验专业的编程教育，开启科技探索之旅</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    专业师资团队
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    小班制教学
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    个性化学习方案
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-800 fade-in">
                <h3 className="text-xl font-bold mb-4">预约试听</h3>
                <form>
                  <div className="mb-4">
                    <label className="form-label">姓名</label>
                    <input type="text" className="form-input" placeholder="请输入您的姓名" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">孩子年龄</label>
                    <input type="number" className="form-input" placeholder="请输入孩子年龄" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">联系方式</label>
                    <input type="tel" className="form-input" placeholder="请输入您的手机号" />
                  </div>
                  <div className="mb-6">
                    <label className="form-label">意向课程</label>
                    <select className="form-input">
                      <option value="">请选择课程</option>
                      <option value="scratch">Scratch图形化编程</option>
                      <option value="python">Python编程</option>
                      <option value="robot">机器人编程</option>
                      <option value="olympiad">信息学奥赛</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-secondary w-full">提交预约</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home