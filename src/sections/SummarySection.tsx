import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Globe, Cpu, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insights = [
  {
    icon: Cpu,
    title: '算力民主化',
    desc: 'Rubin平台将AI推理成本降低90%，让更多企业能够负担AI应用开发',
  },
  {
    icon: Globe,
    title: 'Physical AI元年',
    desc: 'AI从数字世界走向物理世界，机器人、自动驾驶、智能制造全面爆发',
  },
  {
    icon: Users,
    title: '端侧AI普及',
    desc: 'AI PC、AI手机、可穿戴设备让每个人都能享受AI带来的便利',
  },
  {
    icon: TrendingUp,
    title: '产业重构',
    desc: '芯片、软件、硬件、服务深度融合，构建全新的AI产业生态',
  },
];

const trends = [
  'Yotta级计算时代来临',
  '具身智能成为新赛道',
  'AI Agent重塑交互方式',
  '工业元宇宙加速落地',
  '数字健康深度融合',
  '自动驾驶 nearing 商用',
];

export function SummarySection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="summary"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            总结展望
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">AI</span>
            <span className="text-gradient"> 新纪元</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            CES 2026不仅是科技产品的展示，更是AI从概念走向落地的转折点
          </p>
        </div>

        {/* Core Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-6 hover:glow-cyan transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <insight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{insight.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{insight.desc}</p>
            </div>
          ))}
        </div>

        {/* Trends & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trends */}
          <div className={`glass rounded-2xl p-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              2026科技趋势
            </h3>
            <div className="space-y-3">
              {trends.map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs text-white font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div className={`glass rounded-2xl p-8 relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-6xl text-cyan-500/30 font-serif mb-4">"</div>
              <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed -mt-8">
                我们正站在AI革命的<span className="text-gradient font-semibold">转折点</span>。
                从数据中心到个人设备，从虚拟世界到物理世界，
                AI正在<span className="text-gradient-gold font-semibold">重新定义</span>一切。
              </blockquote>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  CES 2026 展示了技术如何服务于人的真实需求，
                  标志着AI产业从概念验证正式进入终端应用落地周期。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-3xl p-8 sm:p-12 inline-block max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              准备好迎接 Physical AI 时代了吗？
            </h3>
            <p className="text-gray-400 mb-8">
              从CES 2026出发，见证AI如何改变世界
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 rounded-full glow-cyan"
                onClick={() => window.open('https://www.ces.tech', '_blank')}
              >
                访问CES官网
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                回到顶部
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
