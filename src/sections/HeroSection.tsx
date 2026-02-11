import { useEffect, useRef } from 'react';
import { Cpu, Bot, Car, Glasses, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById('theme')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-100">2026年1月6-9日 · 拉斯维加斯</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">CES</span>
          <span className="text-gradient"> 2026</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl lg:text-4xl text-cyan-100 mb-4 font-light">
          Physical AI 时代来临
        </p>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          全球4000+科技企业齐聚，芯片巨头激战、具身智能爆发、自动驾驶突破
          <br className="hidden sm:block" />
          AI从数字世界全面渗透物理世界
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-12 max-w-4xl mx-auto">
          {[
            { icon: Cpu, value: '4000+', label: '参展企业' },
            { icon: Bot, value: '6', label: '大会议程' },
            { icon: Car, value: '10x', label: '算力提升' },
            { icon: Glasses, value: 'Yotta', label: '计算时代' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-4 sm:p-6 hover:glow-cyan transition-all duration-500"
            >
              <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={scrollToContent}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-full glow-cyan transition-all duration-300"
        >
          探索大会亮点
          <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
        </Button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
