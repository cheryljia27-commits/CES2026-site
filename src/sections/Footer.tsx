import { Cpu, Twitter, Youtube, Globe } from 'lucide-react';

const links = [
  { label: '核心主题', href: '#theme' },
  { label: '大咖演讲', href: '#speakers' },
  { label: '芯片战争', href: '#chips' },
  { label: '创新产品', href: '#innovations' },
  { label: '大会日程', href: '#schedule' },
  { label: '总结展望', href: '#summary' },
];

const socials = [
  { icon: Globe, href: 'https://www.ces.tech', label: '官网' },
  { icon: Youtube, href: 'https://www.youtube.com/@CES', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
] as const;

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">CES 2026</h3>
                <p className="text-xs text-gray-500">Physical AI 时代</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
              全球最具影响力的消费电子与科技产业展会，
              汇聚4000+企业，展示AI、芯片、机器人、自动驾驶等前沿技术，
              定义科技产业的未来走向。
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">大会信息</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">时间:</span>
                <span>2026年1月6-9日</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">地点:</span>
                <span>美国拉斯维加斯</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">主题:</span>
                <span>DIVE IN - 以人为本</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400">规模:</span>
                <span>4000+ 参展商</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 CES Summary. 数据来源于公开报道。
          </p>
          <p className="text-gray-600 text-xs">
            本站为CES 2026大会信息汇总，非官方网站
          </p>
          <p className="text-gray-500 text-xs">
            Designed by <span className="text-cyan-400/80">檬檬</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
