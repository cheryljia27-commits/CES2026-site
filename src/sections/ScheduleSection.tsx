import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Mic, Users, Lightbulb, Gavel, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const schedule = [
  {
    day: '1月4日',
    weekday: '周日',
    theme: '预热日',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    events: [
      {
        time: '18:00',
        title: 'Samsung "The First Look"',
        speaker: '三星',
        location: 'Wynn Latour Ballroom',
        highlight: '透明MicroLED、Ballie AI机器人',
      },
    ],
  },
  {
    day: '1月5日',
    weekday: '周一',
    theme: '媒体日',
    icon: Mic,
    color: 'from-green-500 to-emerald-500',
    events: [
      {
        time: '09:00',
        title: 'AMD Keynote',
        speaker: '苏姿丰博士',
        location: 'Venetian',
        highlight: 'Ryzen AI 400系列、AI PC愿景',
      },
      {
        time: '13:00',
        title: 'NVIDIA Special Address',
        speaker: '黄仁勋',
        location: 'Mandalay Bay',
        highlight: 'Rubin平台、RTX 50系列、GR00T',
      },
      {
        time: '15:00',
        title: 'Sony Honda Mobility',
        speaker: '索尼本田',
        location: 'LVCC',
        highlight: 'AFEELA电动车、娱乐生态',
      },
      {
        time: '17:00',
        title: 'LG Keynote',
        speaker: 'LG',
        location: 'Mandalay Bay',
        highlight: '新OLED TV、AI Agent',
      },
    ],
  },
  {
    day: '1月6日',
    weekday: '周二',
    theme: '开展日',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-500',
    events: [
      {
        time: '08:30',
        title: 'CTA State of the Industry',
        speaker: 'Gary Shapiro & Roland Busch',
        location: 'Venetian',
        highlight: '工业元宇宙、AI基础设施',
      },
      {
        time: '11:00',
        title: 'Havas C Space Keynote',
        speaker: 'Yannick Bolloré',
        location: 'Aria',
        highlight: 'GenAI在广告创意中的应用',
      },
      {
        time: '14:00',
        title: 'All-In Interview',
        speaker: 'Jason Calacanis等',
        location: 'Venetian',
        highlight: 'VC视角看AI boom',
      },
      {
        time: '17:00',
        title: 'Lenovo Tech World',
        speaker: '杨元庆',
        location: 'The Sphere',
        highlight: 'AI for All、ThinkPad新品',
      },
    ],
  },
  {
    day: '1月7日',
    weekday: '周三',
    theme: '行业日',
    icon: Users,
    color: 'from-purple-500 to-violet-500',
    events: [
      {
        time: '09:00',
        title: 'Caterpillar Keynote',
        speaker: 'Joe Creed',
        location: 'LVCC',
        highlight: '自动驾驶矿车、电动挖掘机',
      },
      {
        time: '10:00',
        title: 'Digital Health Summit',
        speaker: '行业专家',
        location: 'Venetian',
        highlight: '可穿戴设备、远程医疗',
      },
      {
        time: '16:30',
        title: 'CES Foundry Celebration',
        speaker: 'AI & Quantum领袖',
        location: 'Fontainebleau',
        highlight: 'AI与量子计算前沿',
      },
    ],
  },
  {
    day: '1月8日',
    weekday: '周四',
    theme: '政策日',
    icon: Gavel,
    color: 'from-rose-500 to-red-500',
    events: [
      {
        time: '11:00',
        title: 'Senate Perspectives',
        speaker: '美国参议员',
        location: 'LVCC',
        highlight: 'AI安全、数据隐私、芯片资金',
      },
      {
        time: '11:30',
        title: 'AI You Can Trust',
        speaker: '行业专家',
        location: 'Venetian',
        highlight: '企业AI使用规范',
      },
      {
        time: '13:00',
        title: 'Workforce Development',
        speaker: '行业领袖',
        location: 'LVCC',
        highlight: '自动化与就业市场',
      },
    ],
  },
  {
    day: '1月9日',
    weekday: '周五',
    theme: '创新日',
    icon: Rocket,
    color: 'from-cyan-500 to-teal-500',
    events: [
      {
        time: '10:00',
        title: 'Shark Tank Open Call',
        speaker: '初创企业',
        location: 'Eureka Park',
        highlight: '现场路演、投资机会',
      },
      {
        time: '14:00',
        title: 'Eureka Park Deep Dive',
        speaker: 'AARP合作',
        location: 'Eureka Park',
        highlight: '长寿科技创新',
      },
    ],
  },
];

export function ScheduleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeDay, setActiveDay] = useState(1);

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
      id="schedule"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 inline mr-2" />
            大会日程
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">六天</span>
            <span className="text-gradient"> 精彩议程</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            从媒体日到政策日，从芯片发布到创新路演，全方位覆盖科技产业热点
          </p>
        </div>

        {/* Day Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {schedule.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-300 min-w-[80px] ${
                activeDay === index
                  ? `bg-gradient-to-r ${day.color} text-white shadow-lg scale-105`
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xs opacity-80">{day.weekday}</span>
              <span className="font-bold">{day.day}</span>
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            {/* Day Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${schedule[activeDay].color} flex items-center justify-center`}>
                {(() => {
                  const IconComponent = schedule[activeDay].icon;
                  return <IconComponent className="w-6 h-6 text-white" />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {schedule[activeDay].day} {schedule[activeDay].weekday}
                </h3>
                <p className={`text-sm bg-gradient-to-r ${schedule[activeDay].color} bg-clip-text text-transparent font-medium`}>
                  {schedule[activeDay].theme}
                </p>
              </div>
            </div>

            {/* Events */}
            <div className="space-y-4">
              {schedule[activeDay].events.map((event, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:w-32 flex-shrink-0">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-cyan-400 font-mono">{event.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{event.speaker}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className={`bg-gradient-to-r ${schedule[activeDay].color} bg-opacity-20 text-white`}>
                      {event.highlight}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: '主题演讲', value: '20+' },
            { label: '分论坛', value: '100+' },
            { label: '参展商', value: '4000+' },
            { label: '参会者', value: '13万+' },
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
