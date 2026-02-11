import { useEffect, useRef, useState } from 'react';
import { Bot, Car, Glasses, Tv, Home, Heart, Sparkles } from 'lucide-react';

const innovations = [
  {
    category: '具身智能',
    icon: Bot,
    items: [
      { name: 'Boston Dynamics Atlas', desc: '量产版人形机器人', highlight: '工业级应用' },
      { name: 'NVIDIA GR00T', desc: '人形机器人基础模型', highlight: '通用智能' },
      { name: '现代机器人', desc: 'Edge Brain芯片驱动', highlight: '终端AI' },
      { name: '追觅/石头', desc: 'AI扫地/割草机器人', highlight: '智能避障' },
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    category: '自动驾驶',
    icon: Car,
    items: [
      { name: 'NVIDIA DRIVE', desc: 'L4级自动驾驶平台', highlight: 'Hyperion系统' },
      { name: 'Alpamayo', desc: '视觉-语言-动作模型', highlight: 'AI定义驾驶' },
      { name: '索尼AFEELA', desc: '娱乐生态系统EV', highlight: '车载AI' },
      { name: '高通Ride', desc: '数字底盘方案', highlight: '4亿辆搭载' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'AI硬件',
    icon: Glasses,
    items: [
      { name: 'AI眼镜', desc: '多模态交互终端', highlight: '实时翻译' },
      { name: '智能耳机', desc: '端侧大模型部署', highlight: '百亿参数' },
      { name: '可穿戴设备', desc: '健康监测传感器', highlight: '连续监测' },
      { name: 'AI PC', desc: 'Copilot+ PC新品', highlight: '本地推理' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: '显示技术',
    icon: Tv,
    items: [
      { name: '三星MicroLED', desc: '透明显示技术', highlight: '8K画质' },
      { name: 'LG OLED', desc: 'AI画质引擎', highlight: '新代面板' },
      { name: '海信Mini LED', desc: 'AI画质优化', highlight: '分区背光' },
      { name: 'TCL QD-Mini LED', desc: '量子点技术', highlight: '色彩精准' },
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    category: '智能家居',
    icon: Home,
    items: [
      { name: '三星Ballie', desc: 'AI机器人管家', highlight: '新一代' },
      { name: 'SmartThings', desc: '全屋智能生态', highlight: 'Matter协议' },
      { name: '联想AI Agent', desc: '个性化智能体', highlight: '混合AI' },
      { name: '绿联安防', desc: 'AI家居安防', highlight: '边缘计算' },
    ],
    color: 'from-rose-500 to-red-500',
  },
  {
    category: '数字健康',
    icon: Heart,
    items: [
      { name: 'Nutrisense', desc: '血糖监测CGM', highlight: '实时追踪' },
      { name: '智能戒指', desc: '健康数据监测', highlight: '24/7佩戴' },
      { name: '远程医疗', desc: 'AI辅助诊断', highlight: '精准医疗' },
      { name: '康复机器人', desc: '物理治疗辅助', highlight: '个性化' },
    ],
    color: 'from-teal-500 to-cyan-500',
  },
];

export function InnovationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="innovations"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/robotics.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            创新产品
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Physical AI</span>
            <span className="text-gradient"> 应用爆发</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            AI技术从概念验证加速走向实际部署，机器人、自动驾驶、智能家居全面智能化
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {innovations.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${cat.color} text-white`
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {innovations[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="group glass rounded-2xl p-6 hover:glow-cyan transition-all duration-500"
              >
                <div className={`inline-block px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${innovations[activeCategory].color} text-white mb-4`}>
                  {item.highlight}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* All Categories Overview */}
        <div className={`mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {innovations.map((cat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 text-center hover:glow-cyan transition-all duration-300 cursor-pointer"
              onClick={() => setActiveCategory(index)}
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center mb-3`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-white font-medium text-sm">{cat.category}</p>
              <p className="text-gray-500 text-xs mt-1">{cat.items.length} 款产品</p>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className={`mt-16 glass rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                从"概念"到"落地"的转折点
              </h3>
              <p className="text-gray-400 leading-relaxed">
                CES 2026标志着AI产业进入终端应用落地周期。英伟达Rubin平台、AMD Ryzen AI、
                高通Dragonwing等芯片新品，为Physical AI提供了强大的算力基础。
                机器人、自动驾驶、智能家居等领域的产品，正在从实验室走向千家万户。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '人形机器人', value: '量产元年' },
                { label: 'L4自动驾驶', value: '即将商用' },
                { label: 'AI PC', value: '全面普及' },
                { label: '智能家居', value: 'Agent时代' },
              ].map((item, index) => (
                <div key={index} className="glass rounded-xl p-4 text-center">
                  <p className="text-cyan-400 font-bold">{item.value}</p>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
