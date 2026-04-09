import React from 'react'

const Course = () => {
  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">课程体系</h1>
          <p className="text-xl">根据孩子年龄和能力水平，定制专业的乐高编程学习方案</p>
        </div>
      </section>

      {/* 课程分类 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* 幼儿段课程 - 水平滚动 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">幼儿段课程</h2>
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="flex space-x-6 min-w-max">
                {/* 小班课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-blue-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/kc_pic/小班.png" 
                      alt="小小乐高" 
                      className="w-full h-full object-cover transform -translate-y-3/5"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">小小乐高</h3>
                    <p className="text-gray-600 mb-4">通过乐高积木搭建，培养孩子的动手能力、空间思维和创造力</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>培养动手操作能力</li>
                        <li>发展空间思维能力</li>
                        <li>激发创造力和想象力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">小班</span>
                      <span className="text-blue-500 font-medium">适合年龄：3-4岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 中班课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-orange-100 flex items-center justify-center">
                    <img 
                      src="/kc_pic/中班.png" 
                      alt="百变工程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">百变工程</h3>
                    <p className="text-gray-600 mb-4">通过乐高工程套装，学习基本的机械原理和结构知识</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>了解基本机械原理</li>
                        <li>学习简单结构设计</li>
                        <li>培养解决问题的能力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">中班</span>
                      <span className="text-blue-500 font-medium">适合年龄：4-5岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-green-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20learning%20basic%20structure%20with%20lego%2C%20kids%20building%20structural%20models%2C%20lego%20structure%20classroom&image_size=landscape_4_3" 
                      alt="初始结构" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">初始结构</h3>
                    <p className="text-gray-600 mb-4">学习基本的建筑结构知识，通过乐高搭建各种建筑模型</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>了解基本建筑结构</li>
                        <li>学习平衡与稳定原理</li>
                        <li>培养空间结构思维</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">中班</span>
                      <span className="text-blue-500 font-medium">适合年龄：4-5岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 大班课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-purple-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20learning%20block%20programming%2C%20kids%20coding%20with%20visual%20blocks%2C%20elementary%20school%20coding%20classroom&image_size=landscape_4_3" 
                      alt="模块编程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">模块编程</h3>
                    <p className="text-gray-600 mb-4">通过图形化模块编程，学习基本的编程逻辑和算法</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握基本编程概念</li>
                        <li>学习逻辑思维方法</li>
                        <li>能够编写简单程序</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">大班</span>
                      <span className="text-blue-500 font-medium">适合年龄：5-6岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20building%20motorized%20lego%20models%2C%20kids%20working%20with%20lego%20technic%2C%20motorized%20lego%20classroom&image_size=landscape_4_3" 
                      alt="动力机械" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">动力机械</h3>
                    <p className="text-gray-600 mb-4">通过乐高动力机械套装，学习简单的机械原理和动力系统</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>了解动力机械原理</li>
                        <li>学习简单机械结构</li>
                        <li>培养工程设计能力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">大班</span>
                      <span className="text-blue-500 font-medium">适合年龄：5-6岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 一年级、二年级课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-orange-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20learning%20with%20lego%20wedo%202.0%2C%20kids%20programming%20robots%2C%20elementary%20school%20robotics%20classroom&image_size=landscape_4_3" 
                      alt="初级wedo2.0" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">初级wedo2.0</h3>
                    <p className="text-gray-600 mb-4">通过乐高Wedo 2.0套装，学习基础的机器人搭建和编程</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握基础机器人搭建</li>
                        <li>学习简单机器人编程</li>
                        <li>培养STEM综合能力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">一年级</span>
                      <span className="text-blue-500 font-medium">适合年龄：6-7岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-green-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20advanced%20lego%20wedo%202.0%20programming%2C%20kids%20creating%20complex%20robots%2C%20elementary%20school%20advanced%20robotics&image_size=landscape_4_3" 
                      alt="高级wedo2.0" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">高级wedo2.0</h3>
                    <p className="text-gray-600 mb-4">深入学习乐高Wedo 2.0的高级功能，制作更复杂的机器人项目</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握高级机器人搭建</li>
                        <li>学习复杂编程逻辑</li>
                        <li>培养创新思维能力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">二年级</span>
                      <span className="text-blue-500 font-medium">适合年龄：7-8岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小学初中段课程 - 水平滚动 */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">小学初中段课程</h2>
            <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="flex space-x-6 min-w-max">
                {/* 二年级下学期-四年级课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-purple-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20programming%20lego%20ev3%20robots%2C%20kids%20working%20with%20lego%20mindstorms%2C%20robotics%20competition%20preparation&image_size=landscape_4_3" 
                      alt="EV3机器人编程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">EV3机器人编程</h3>
                    <p className="text-gray-600 mb-4">通过乐高EV3机器人套装，学习高级机器人搭建和编程</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握EV3机器人搭建</li>
                        <li>学习高级编程算法</li>
                        <li>培养机器人竞赛能力</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">二年级下学期-四年级</span>
                      <span className="text-blue-500 font-medium">适合年龄：8-10岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20learning%20scratch%20programming%2C%20kids%20creating%20games%20with%20scratch%2C%20elementary%20school%20coding%20classroom&image_size=landscape_4_3" 
                      alt="Scratch图形化编程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Scratch图形化编程</h3>
                    <p className="text-gray-600 mb-4">通过Scratch图形化编程，学习编程逻辑和算法，制作各种游戏和动画</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握Scratch编程技巧</li>
                        <li>学习编程逻辑思维</li>
                        <li>能够制作复杂游戏</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">二年级下学期-四年级</span>
                      <span className="text-blue-500 font-medium">适合年龄：8-10岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 四年级-初中课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-orange-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teens%20learning%20python%20programming%2C%20students%20coding%20on%20laptops%2C%20middle%20school%20python%20classroom&image_size=landscape_4_3" 
                      alt="Python编程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Python编程</h3>
                    <p className="text-gray-600 mb-4">学习Python编程语言，掌握文本编程技能，开发各种应用和游戏</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握Python语法基础</li>
                        <li>学习算法和数据结构</li>
                        <li>能够开发实用应用</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">四年级-初中</span>
                      <span className="text-blue-500 font-medium">适合年龄：10-15岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 五年级-初中课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-green-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teens%20learning%20c%2B%2B%20programming%2C%20students%20coding%20competitively%2C%20middle%20school%20informatics%20classroom&image_size=landscape_4_3" 
                      alt="C++编程" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">C++编程</h3>
                    <p className="text-gray-600 mb-4">学习C++编程语言，为信息学奥赛做准备，提升编程能力和算法思维</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握C++语法基础</li>
                        <li>学习高级算法和数据结构</li>
                        <li>为信息学奥赛做准备</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">五年级-初中</span>
                      <span className="text-blue-500 font-medium">适合年龄：11-15岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-purple-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teens%20participating%20in%20robotics%20competition%2C%20students%20with%20whale%20robots%2C%20robotics%20competition%20preparation&image_size=landscape_4_3" 
                      alt="鲸鱼机器人竞赛班" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">鲸鱼机器人竞赛班</h3>
                    <p className="text-gray-600 mb-4">针对鲸鱼机器人竞赛进行专业训练，提升机器人搭建和编程能力</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握鲸鱼机器人搭建</li>
                        <li>学习竞赛编程技巧</li>
                        <li>培养竞赛策略思维</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">五年级-初中</span>
                      <span className="text-blue-500 font-medium">适合年龄：11-15岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teens%20learning%20arduino%20programming%2C%20students%20working%20with%20open%20source%20electronics%2C%20arduino%20workshop&image_size=landscape_4_3" 
                      alt="arduino开源班" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">arduino开源班</h3>
                    <p className="text-gray-600 mb-4">学习Arduino开源电子平台，掌握硬件编程技能，开发各种智能设备</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握Arduino基础</li>
                        <li>学习电子电路知识</li>
                        <li>能够开发智能设备</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">五年级-初中</span>
                      <span className="text-blue-500 font-medium">适合年龄：11-15岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
                
                {/* 六年级-初中课程 */}
                <div className="course-card w-80 fade-in">
                  <div className="h-48 bg-orange-100 flex items-center justify-center">
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teens%20preparing%20for%20informatics%20olympiad%2C%20students%20solving%20algorithmic%20problems%2C%20informatics%20olympiad%20training&image_size=landscape_4_3" 
                      alt="信息学奥赛班" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">信息学奥赛班</h3>
                    <p className="text-gray-600 mb-4">针对信息学奥赛进行专业训练，学习高级算法和数据结构，提升竞赛水平</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">学习目标：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>掌握高级算法和数据结构</li>
                        <li>学习竞赛解题技巧</li>
                        <li>为信息学奥赛做准备</li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                      <span className="text-blue-500 font-medium">六年级-初中</span>
                      <span className="text-blue-500 font-medium">适合年龄：12-15岁</span>
                    </div>
                    <button className="btn-primary w-full">立即报名</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 课程预约试听 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">预约试听</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="form-label">姓名</label>
                  <input type="text" className="form-input" placeholder="请输入您的姓名" />
                </div>
                <div>
                  <label className="form-label">孩子年龄</label>
                  <input type="number" className="form-input" placeholder="请输入孩子年龄" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="form-label">联系方式</label>
                  <input type="tel" className="form-input" placeholder="请输入您的手机号" />
                </div>
                <div>
                  <label className="form-label">意向课程</label>
                  <select className="form-input">
                    <option value="">请选择课程</option>
                    <option value="scratch-basic">Scratch启蒙编程（6-8岁）</option>
                    <option value="robot-basic">机器人启蒙（6-8岁）</option>
                    <option value="scratch-advanced">Scratch进阶编程（9-12岁）</option>
                    <option value="python-basic">Python基础编程（10-12岁）</option>
                    <option value="python-advanced">Python高级编程（13-16岁）</option>
                    <option value="olympiad">信息学奥赛（12-16岁）</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="form-label">校区</label>
                <select className="form-input">
                  <option value="">请选择校区</option>
                  <option value="ningde">宁德蕉城校区</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">提交预约</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Course