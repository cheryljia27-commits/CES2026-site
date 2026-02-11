import { useEffect, useRef, useState } from 'react';
import { Mic, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const speakers = [
  {
    name: '黄仁勋',
    nameEn: 'Jensen Huang',
    title: 'NVIDIA 创始人兼CEO',
    keynote: 'Rubin AI平台发布',
    highlights: [
      'Vera Rubin平台全面投产',
      '推理性能提升5倍，成本降至1/10',
      'Cosmos开放世界基础模型',
      'Alpamayo自动驾驶系统',
    ],
    date: '1月5日',
    time: '16:00 PST',
    color: 'from-green-500 to-emerald-600',
    avatar: 'JH',
  },
  {
    name: '苏姿丰',
    nameEn: 'Dr. Lisa Su',
    title: 'AMD 董事长兼CEO',
    keynote: 'AI解决方案愿景',
    highlights: [
      'Ryzen AI 400系列处理器',
      'Ryzen 9000X3D桌面处理器',
      'Zen 5 + RDNA 3.5架构',
      '统一AI架构覆盖全场景',
    ],
    date: '1月5日',
    time: '09:00 PST',
    color: 'from-red-500 to-rose-600',
    avatar: 'LS',
  },
  {
    name: '杨元庆',
    nameEn: 'Yuanqing Yang',
    title: '联想集团董事长兼CEO',
    keynote: 'AI for All 战略',
    highlights: [
      'AI-native ThinkPad新品',
      '混合式AI解决方案',
      'Yoga双屏设备',
      '企业级AI智能体',
    ],
    date: '1月6日',
    time: '17:00 PST',
    color: 'from-blue-500 to-indigo-600',
    avatar: 'YY',
  },
  {
    name: 'Roland Busch',
    nameEn: 'Dr. Roland Busch',
    title: '西门子股份公司总裁',
    keynote: '工业元宇宙',
    highlights: [
      '数字孪生工厂方案',
      'AI驱动基础设施',
      '工业元宇宙平台',
      '智能制造解决方案',
    ],
    date: '1月6日',
    time: '08:30 PST',
    color: 'from-cyan-500 to-teal-600',
    avatar: 'RB',
  },
  {
    name: 'Joe Creed',
    nameEn: 'Joe Creed',
    title: '卡特彼勒 CEO',
    keynote: '智能工程机械',
    highlights: [
      '自动驾驶矿用卡车',
      '电动挖掘机',
      '远程操作工地',
      '"大铁"变"智能铁"',
    ],
    date: '1月7日',
    time: '09:00 PST',
    color: 'from-amber-500 to-yellow-600',
    avatar: 'JC',
  },
  {
    name: '美国参议员',
    nameEn: 'U.S. Senators',
    title: '政策制定者',
    keynote: 'AI监管与治理',
    highlights: [
      'AI安全法案讨论',
      '数据隐私法规',
      '芯片制造联邦资金',
      '技术伦理框架',
    ],
    date: '1月8日',
    time: '11:00 PST',
    color: 'from-purple-500 to-violet-600',
    avatar: 'US',
  },
];

export function SpeakersSection() {
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
      id="speakers"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            <Mic className="w-4 h-4 inline mr-2" />
            重磅演讲
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">科技领袖</span>
            <span className="text-gradient"> 精彩输出</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            全球科技巨头CEO齐聚拉斯维加斯，发布重磅产品，定义AI未来走向
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group relative glass rounded-2xl p-6 sm:p-8 hover:glow-blue transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${speaker.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {speaker.avatar}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                    <span className="text-sm text-gray-500">{speaker.nameEn}</span>
                  </div>
                  <p className="text-cyan-400 text-sm mb-3">{speaker.title}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      <Mic className="w-3 h-3 mr-1" />
                      {speaker.keynote}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      {speaker.date}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
                      <Clock className="w-3 h-3 mr-1" />
                      {speaker.time}
                    </Badge>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {speaker.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${speaker.color} mt-2 flex-shrink-0`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${speaker.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Key Quote */}
        <div className={`mt-16 glass rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <blockquote className="relative text-xl sm:text-2xl lg:text-3xl font-light text-white italic leading-relaxed">
            "Rubin是英伟达首个采用极致协同设计、集成六款芯片的AI平台，
            推理性能提升<span className="text-gradient font-semibold"> 5倍</span>，
            生成token成本降至<span className="text-gradient-gold font-semibold"> 1/10</span>"
          </blockquote>
          <div className="relative mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
              JH
            </div>
            <div>
              <p className="text-white font-semibold">黄仁勋</p>
              <p className="text-gray-400 text-sm">NVIDIA 创始人兼CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
