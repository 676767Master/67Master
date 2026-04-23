/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Calendar, 
  Languages, 
  Briefcase, 
  GraduationCap, 
  Code,
  Plane,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Smile,
  MousePointer2,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const InteractiveArt = () => {
  const [message, setMessage] = useState("準備好探索第 6 與 第 7 空間了嗎？");
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  const messages = [
    "準備好探索第 6 與 第 7 空間了嗎？"
  ];

  const handleInteraction = () => {
    if (isAnimating) return;
    
    // We check if the NEXT count will be 67 or if the current count is 67
    const nextCount = (clickCount + 1) % 68;
    setClickCount(nextCount);
    
    // Play sound effect
    // Use video0423 for the 67th click, otherwise use audio67
    const base = import.meta.env.BASE_URL;
    const audioSource = nextCount === 67 ? `${base}0423.mp4` : `${base}67.m4a`;
    const audio = new Audio(audioSource);
    audio.volume = 1.0;
    audio.play().catch(e => {
      console.log("Audio play failed:", e);
    });

    setIsAnimating(true);
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
    
    // Animation duration logic
    // Use 4000ms if it's the 67th click, otherwise 800ms
    const duration = nextCount === 67 ? 4000 : 800;
    setTimeout(() => setIsAnimating(false), duration);
  };

  // Cheat Code Listener
  useEffect(() => {
    const keysPressed: { [key: string]: boolean } = {};
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed[e.key] = true;
      
      // Check for Ctrl + 6 + 6
      if (keysPressed['Control'] && keysPressed['6'] && keysPressed['6']) {
        setClickCount(66);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      delete keysPressed[e.key];
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Dialogue Bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            backgroundColor: isAnimating 
              ? ["rgba(15, 23, 42, 1)", "rgba(30, 41, 59, 1)", "rgba(15, 23, 42, 1)"] 
              : "rgba(15, 23, 42, 1)",
            boxShadow: isAnimating 
              ? [
                  "0 10px 15px rgba(0, 0, 0, 0.1)", 
                  "0 0 35px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.4)", 
                  "0 10px 15px rgba(0, 0, 0, 0.1)"
                ] 
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            borderColor: isAnimating 
              ? ["rgba(51, 65, 85, 1)", "rgba(59, 130, 246, 0.8)", "rgba(51, 65, 85, 1)"] 
              : "rgba(51, 65, 85, 1)"
          }}
          transition={{ 
            duration: 0.8, 
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
          className="bg-slate-900 border border-slate-700 px-6 py-3 rounded-2xl text-xs font-bold text-blue-300 italic mb-4 relative z-20"
        >
          {message}
          {/* Pulsing Outer Glow Layer synced with rhythm */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-2xl -z-10"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div 
        onClick={handleInteraction}
        className="relative w-full aspect-[3/1] bg-black rounded-3xl border border-slate-800 overflow-hidden flex cursor-pointer group select-none shadow-2xl"
      >
        {/* Hand 6 - Now on the LEFT */}
        <motion.div 
          animate={isAnimating ? { y: [-15, 15, -15] } : { y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-1/3 h-full overflow-hidden"
        >
          <img 
            src={`${import.meta.env.BASE_URL}67.jpg`} 
            alt="Hand 6" 
            className="w-[300%] h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" 
            style={{ objectPosition: '50% 50%' }}
          />
        </motion.div>

        {/* Head - Now in the CENTER */}
        <motion.div 
          animate={clickCount === 67 && isAnimating 
            ? { scale: 6, opacity: 0, filter: "brightness(3) blur(20px)", zIndex: 50 } 
            : { scale: 1, opacity: 1, filter: "brightness(1) blur(0px)", zIndex: 10 }
          }
          transition={clickCount === 67 && isAnimating 
            ? { duration: 4, ease: "easeIn" } 
            : { duration: 0 } // Sudden reappear without animation
          }
          className="w-1/3 h-full overflow-hidden outline-none relative"
        >
          <img 
            src={`${import.meta.env.BASE_URL}67.jpg`} 
            alt="Art Face" 
            className="w-[300%] h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" 
            style={{ objectPosition: '0% 50%' }}
          />
        </motion.div>

        {/* Hand 7 - Now on the RIGHT */}
        <motion.div 
          animate={isAnimating ? { y: [15, -15, 15] } : { y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-1/3 h-full overflow-hidden"
        >
          <img 
            src={`${import.meta.env.BASE_URL}67.jpg`} 
            alt="Hand 7" 
            className="w-[300%] h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" 
            style={{ objectPosition: '100% 50%' }}
          />
        </motion.div>

        {/* Interaction hint */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
           {!isAnimating && (
             <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-[10px] tracking-widest uppercase font-bold text-white/70">
               Click to trigger
             </div>
           )}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Sparkles size={12} className="text-blue-500" />
          <span>Deep Aesthetic Lab</span>
        </div>
        
        {/* Click Counter Area */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="text-[10px] font-black uppercase tracking-tighter text-blue-400">Cycle</span>
          <motion.span 
            key={clickCount}
            initial={{ scale: 1.3, textShadow: "0 0 12px rgba(59,130,246,0.8)" }}
            animate={{ scale: 1, textShadow: "0 0 8px rgba(59,130,246,0.5)" }}
            className="text-[14px] font-black font-mono text-blue-400"
          >
            {clickCount.toString().padStart(2, '0')}
          </motion.span>
          <span className="text-[10px] font-bold text-blue-700">/ 67</span>
        </div>
      </div>
    </div>
  );
};

const SOCIAL_LINKS = [
  { icon: Mail, href: "mailto:A111182118@nkust.edu.tw", label: "Email" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const EXPERIENCES = [
  {
    period: "2024/10 - 現在",
    title: "皇茗薑母鴨 PT",
    role: "外場服務人員",
    description: "精通炭火控制與食材處理，提供高品質桌邊服務。",
    tags: ["餐飲服務", "顧客溝通"]
  },
  {
    period: "2024/07 - 2024/08",
    title: "楊家古早味",
    role: "外場人員",
    description: "熟悉店內經營流程，能快速應對高峰期顧客需求。",
    tags: ["點餐系統", "流程優化"]
  },
  {
    period: "2023/03 - 2024/06",
    title: "好想燒肉 PT",
    role: "烤肉助手/服務員",
    description: "將閒置琉璃態的不固定形體輸送至不銹鋼方形大口容器、以吸水性標籤纖維、金鋼砂具等組合而成之用品摩擦琉璃態不固定形體，負責整理環境和食材。",
    tags: ["食材處理", "環境管理"]
  }
];

const SKILLS = {
  languages: [
    { name: "英文 (English)", level: "TOEIC 990", description: "精通 (Mastery)", color: "blue" },
    { name: "日文 (Japanese)", level: "N1 高分", description: "進階 (Advanced)", color: "indigo" },
    { name: "韓文 (Korean)", level: "TOPIK I", description: "普通 (Intermediate)", color: "purple" },
    { name: "台語 (Taiwanese)", level: "精通", description: "和老人暢聊無阻", color: "slate" },
  ],
  tech: [
    { name: "Office", skills: ["Word", "Excel", "Outlook", "PowerPoint"] },
    { name: "Google Workspace", skills: ["Gmail", "Calendar", "Drive", "Meet", "Sites"] }
  ]
};

const TRAVEL_PLAN = {
  title: "山海之巔 - 雲端美學之旅",
  subtitle: "2026 清明奢華假期四天三夜行程規劃",
  itinerary: [
    { day: "Day 1", city: "台中", activity: "城市藝術復興與藝術響宴", stay: "台中勤美洲際酒店 (行政客房)", transport: "私人包車" },
    { day: "Day 2", city: "日月潭", activity: "湖光山色與身心療癒", stay: "日月潭涵碧樓 (精品套房)", transport: "私人包車" },
    { day: "Day 3", city: "台北", activity: "信義巔峰之夜與奢華美學", stay: "台北四季酒店 (奢華全景套房)", transport: "私人包車" },
    { day: "Day 4", city: "北投", activity: "溫泉巡禮與優雅歸途", stay: "溫暖的家", transport: "私人包車 (Alphard)" }
  ],
  restaurants: ["RAW", "Forchetta", "JL Studio"]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card !bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-blue-600">HUANG.</span>
          <div className="hidden md:flex gap-8">
            {['Home', 'Experience', 'Skills', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden glass-card p-2">
            <div className="w-5 h-0.5 bg-slate-900 mb-1"></div>
            <div className="w-5 h-0.5 bg-slate-900 mb-1"></div>
            <div className="w-5 h-0.5 bg-slate-900"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
                黃翰均 <span className="text-blue-600">Huang</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-500 font-medium">
                <span className="flex items-center gap-2"><Calendar size={18} /> 2006-09-26</span>
                <span className="flex items-center gap-2">天秤座 O型</span>
                <span className="flex items-center gap-2"><MapPin size={18} /> Taiwan</span>
              </div>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed mx-auto max-w-4xl">
                我的興趣是寫書法，平時樂於助人時常幫助年邁的老人和參與各種公益活動，目前就讀高雄科技大學五專部航海科四年級，曾擔任班級幹部-副班長一職，熱衷於幫助班級的大小事和解決同學們的疑難雜症，因而廢寢忘食，而這些習慣將我培養成了一位重視彼此之間互相幫助的個性。
              </p>

              {/* Pixel Character Integration */}
              <div className="mb-12 max-w-4xl mx-auto">
                <InteractiveArt />
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {SOCIAL_LINKS.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, translateY: -2 }}
                    className="p-3 glass-card rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white/50 border-y border-slate-200">
        <div className="section-padding">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">打工經驗</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-4 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                <p className="text-slate-500 font-medium mb-4">{exp.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section id="skills" className="section-padding">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <Languages size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">語言能力</h2>
            </div>
            <div className="space-y-6">
              {SKILLS.languages.map((lang, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="font-bold text-slate-800">{lang.name}</h4>
                    <span className={`text-xs font-black uppercase px-2 py-0.5 rounded-md bg-${lang.color}-100 text-${lang.color}-600`}>
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: idx === 0 ? "100%" : idx === 1 ? "90%" : "60%" }}
                      transition={{ duration: 1 }}
                      className={`h-full bg-${lang.color}-600`}
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-2 italic">{lang.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-600 rounded-lg text-white">
                  <Code size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">電腦與專業技能</h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {SKILLS.tech.map((category, idx) => (
                  <div key={idx} className="glass-card rounded-xl p-5">
                    <h4 className="font-bold text-slate-800 mb-3">{category.name}</h4>
                    <ul className="space-y-2">
                      {category.skills.map(skill => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-slate-600">
                          <ChevronRight size={14} className="text-emerald-500" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Personal Section */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-slate-800 rounded-lg text-white">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">學歷背景</h2>
              </div>
              <div className="pl-6 border-l-2 border-slate-200">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">2020/09 - 2023/06</span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">崇德國中</h3>
                  <p className="text-slate-600 font-medium">物理資優班</p>
                </div>
              </div>
            </div>

            {/* Assignments Showcase */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-600 rounded-lg text-white">
                  <ExternalLink size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">精選作品</h2>
              </div>
              <div className="grid gap-4">
                <a 
                  href="https://studio.tripo3d.ai/3d-model/f632ef4a-0b60-460e-8904-c468b9535857?invite_code=53EL2U" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl overflow-hidden group cursor-pointer block border border-slate-200 hover:border-blue-400 transition-colors"
                >
                  <div className="aspect-video bg-slate-200 relative">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" alt="3D Model Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-blue-600/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-bold flex items-center gap-2">查看 3D 模型 <ExternalLink size={16} /></span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">3D Model - Character Study</h4>
                    <p className="text-xs text-slate-500">在 Tripo3D 平台查看我的作品</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects: Travel Planning */}
      <section id="projects" className="bg-slate-900 text-white overflow-hidden">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg text-white">
                  <Plane size={24} />
                </div>
                <h2 className="text-3xl font-bold">旅遊美學規劃</h2>
              </div>
              <p className="text-slate-400 max-w-xl">
                {TRAVEL_PLAN.subtitle}：探索山與海的終極美感，結合頂級飯店與米其林餐飲，量身打造全方位的奢華假期行程。
              </p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400">
                PREMIUM TRAVEL DESIGN
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 mb-12">
            {TRAVEL_PLAN.itinerary.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -10 }}
                className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-3xl"
              >
                <span className="text-blue-400 font-black text-4xl mb-4 block">{item.day}</span>
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-blue-400" />
                  {item.city}
                </h4>
                <p className="text-sm font-medium text-slate-200 mb-6">{item.activity}</p>
                <div className="space-y-4 pt-4 border-t border-slate-700">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">住宿安排</span>
                    <span className="text-sm text-slate-300">{item.stay}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-500 mb-1">交通載具</span>
                    <span className="text-sm text-slate-300">{item.transport}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-slate-800/30 rounded-3xl border border-slate-700/30">
            <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">米其林饗宴安排</span>
            {TRAVEL_PLAN.restaurants.map(res => (
              <span key={res} className="text-xl font-serif italic text-blue-200">{res}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-2">黃翰均 Hanjun Huang</h3>
            <p className="text-sm text-slate-500">
              © 2026 Portfolio. All rights reserved.<br />
              內文引用與設計均由 Hanjun Huang 編輯整理。
            </p>
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social, idx) => (
              <a key={idx} href={social.href} className="text-slate-400 hover:text-blue-600 transition-colors">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
