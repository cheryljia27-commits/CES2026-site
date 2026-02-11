import { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, TrendingUp, Server, Smartphone, Bot } from 'lucide-react';

const chipData = [
  {
    company: 'NVIDIA',
    product: 'Vera Rubin 平台',
    tagline: '六芯片协同AI超级计算机',
    metrics: [
      { label: '推理性能提升', value: 5, unit: 'x', max: 5 },
      { label: '训练性能提升', value: 3.5, unit: 'x', max: 5 },
      { label: '成本降低', value: 90, unit: '%', max: 100 },
    ],
    features: [
      '50 Petaflops NVFP4推理性能',
      'Vera CPU + Rubin GPU + DPU',
      '上下文存储平台优化',
      'Cosmos开放世界模型',
    ],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    icon: Server,
  },
  {
    company: 'AMD',
    product: 'Ryzen AI 系列',
    tagline: '精准打击全场景覆盖',
    metrics: [
      { label: 'NPU算力', value: 50, unit: 'TOPS', max: 60 },
      { label: '功耗降低', value: 40, unit: '%', max: 100 },
      { label: '架构统一', value: 100, unit: '%', max: 100 },
    ],
    features: [
      'Ryzen AI 400系列移动端',
      'Ryzen 9000X3D桌面端',
      'Zen 5 + RDNA 3.5 + XDNA 2',
      '汽车/工业嵌入式方案',
    ],
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    icon: Cpu,
  },
  {
    company: '高通',
    product: 'Dragonwing IQ10',
    tagline: '机器人专用AI芯片',
    metrics: [
      { label: '端侧AI性能', value: 45, unit: 'TOPS', max: 60 },
      { label: '汽车搭载量', value: 4, unit: '亿辆', max: 5 },
      { label: '能效比', value: 85, unit: '%', max: 100 },
    ],
    features: [
      '机器人AI任务专用',
      '骁龙数字底盘平台',
      'Ride Flex混合关键性',
      'Ride Elite智能体AI',
    ],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: Bot,
  },
  {
    company: '现代汽车',
    product: 'Edge Brain',
    tagline: '机器人终端侧AI芯片',
    metrics: [
      { label: '功耗优化', value: 95, unit: '%', max: 100 },
      { label: '响应速度', value: 10, unit: 'x', max: 10 },
      { label: '离线能力', value: 100, unit: '%', max: 100 },
    ],
    features: [
      '与DEEPX联合开发',
      '实时识别与决策',
      '无网络环境适用',
      '空间机器人化愿景',
    ],
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    icon: Smartphone,
  },
];

export function ChipWarSection() {
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
      id="chips"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/chip-war.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 inline mr-2" />
            芯片战争
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Yotta时代的</span>
            <span className="text-gradient"> 算力争霸</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            全球步入Yotta级（每秒一亿亿亿次浮点运算）计算时代，
            芯片巨头围绕AI展开激烈角逐，争夺利润丰厚的AI市场
          </p>
        </div>

        {/* Chip Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {chipData.map((chip, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl overflow-hidden hover:glow-cyan transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className={`p-6 ${chip.bgColor} border-b ${chip.borderColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${chip.color} flex items-center justify-center`}>
                      <chip.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{chip.company}</h3>
                      <p className={`text-sm bg-gradient-to-r ${chip.color} bg-clip-text text-transparent font-medium`}>
                        {chip.product}
                      </p>
                    </div>
                  </div>
                  <TrendingUp className={`w-5 h-5 text-gradient-to-r ${chip.color}`} />
                </div>
                <p className="text-gray-400 text-sm">{chip.tagline}</p>
              </div>

              {/* Metrics */}
              <div className="p-6 space-y-4">
                {chip.metrics.map((metric, mIndex) => (
                  <div key={mIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className={`font-bold bg-gradient-to-r ${chip.color} bg-clip-text text-transparent`}>
                        {metric.value}{metric.unit}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${chip.color} rounded-full transition-all duration-1000`}
                        style={{ 
                          width: isVisible ? `${(metric.value / metric.max) * 100}%` : '0%',
                          transitionDelay: `${500 + mIndex * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {chip.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className={`px-3 py-1 rounded-full text-xs ${chip.bgColor} text-gray-300 border ${chip.borderColor}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${chip.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: '参展芯片企业', value: '50+' },
            { label: '新品发布', value: '100+' },
            { label: '算力提升', value: '10x' },
            { label: '成本降低', value: '90%' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
