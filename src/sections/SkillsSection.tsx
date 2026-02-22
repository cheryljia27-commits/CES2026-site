import { Cpu, Brain, Zap, Globe, Shield, Layers } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'AI 智能',
    desc: '深度学习与神经网络',
    className: 'md:col-span-2 md:row-span-2',
    featured: true,
  },
  {
    icon: Cpu,
    title: '芯片架构',
    desc: '高性能计算',
    className: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: '边缘计算',
    desc: '实时响应',
    className: 'md:col-span-1',
  },
  {
    icon: Globe,
    title: '物联网',
    desc: '万物互联',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: Shield,
    title: '安全防护',
    desc: '零信任架构',
    className: 'md:col-span-1',
  },
  {
    icon: Layers,
    title: '云原生',
    desc: '弹性扩展',
    className: 'md:col-span-1',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            核心<span className="text-gradient">技术能力</span>
          </h2>
          <p className="text-gray-400 text-lg">驱动未来科技的关键领域</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] ${skill.className} ${
                skill.featured
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20'
                  : 'glass'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`relative z-10 h-full flex flex-col ${skill.featured ? 'justify-center items-center text-center' : ''}`}>
                <div className={`inline-flex items-center justify-center rounded-xl bg-cyan-500/10 mb-4 ${skill.featured ? 'w-16 h-16' : 'w-12 h-12'}`}>
                  <skill.icon className={`text-cyan-400 ${skill.featured ? 'w-8 h-8' : 'w-6 h-6'}`} />
                </div>

                <h3 className={`font-semibold text-white mb-2 ${skill.featured ? 'text-2xl' : 'text-lg'}`}>
                  {skill.title}
                </h3>
                <p className={`text-gray-400 ${skill.featured ? 'text-base' : 'text-sm'}`}>
                  {skill.desc}
                </p>
              </div>

              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
