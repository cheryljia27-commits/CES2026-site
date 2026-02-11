import { useEffect, useRef, useState } from 'react';
import { Brain, Factory, Car, Home, Heart, Cpu } from 'lucide-react';

const themes = [
  {
    icon: Brain,
    title: 'Physical AI',
    desc: 'AI从软件向实体世界全面渗透，具身智能成为新焦点',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Factory,
    title: '工业元宇宙',
    desc: '数字孪生技术模拟工厂与基础设施，西门子引领变革',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Car,
    title: '自动驾驶',
    desc: 'L4级自动驾驶平台成熟，AI定义驾驶功能即将落地',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Home,
    title: '智能家居',
    desc: 'AI Agent全面赋能家电，实现真正的智能生活',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Heart,
    title: '数字健康',
    desc: '可穿戴设备与远程医疗，传感器革命改变健康管理',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Cpu,
    title: '芯片战争',
    desc: '英伟达、AMD、英特尔、高通争夺AI算力霸权',
    color: 'from-indigo-500 to-violet-500',
  },
];

export function ThemeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="theme"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/physical-ai.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            核心主题
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">以人为本的</span>
            <span className="text-gradient"> 物理AI</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            CES 2026以"DIVE IN"为口号，标志着AI产业从技术展示阶段正式进入终端应用落地周期。
            技术必须服务于人的真实需求，AI正在渗透每一个生活场景。
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl p-6 sm:p-8 hover:glow-cyan transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${theme.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <theme.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {theme.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {theme.desc}
              </p>

              {/* Hover Glow */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className={`mt-16 glass rounded-3xl p-8 sm:p-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white italic">
            "AI不再局限于数据中心，而是渗透到
            <span className="text-gradient font-semibold"> 手机、PC、汽车、家电</span>
            等终端设备，形成<span className="text-gradient-gold font-semibold"> 云-边-端</span>协同的完整技术生态"
          </blockquote>
          <p className="mt-6 text-gray-400">— CES 2026 核心洞察</p>
        </div>
      </div>
    </section>
  );
}
