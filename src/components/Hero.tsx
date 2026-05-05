import { ArrowRight, Factory, Home } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 lg:pt-40">
        {/* Верхний бейдж */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-emerald-300 tracking-wide">
            Продукт экосистемы агрохолдинга Серволюкс
          </span>
        </div>

        <div className="max-w-4xl">
          {/* Главный заголовок */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Промышленный стандарт{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              чистоты
            </span>{' '}
            — теперь для вашего бизнеса
          </h1>

          {/* Подзаголовок */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-4 leading-relaxed">
            Профессиональная и бытовая химия, рождённая на мощностях крупнейшего агрохолдинга Беларуси. Те же составы, которыми мы ежедневно обеспечиваем биобезопасность на птицефабриках и мясоперерабатывающих заводах Серволюкс.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mb-10">
            Филиал «Сервис Солюшенс» ОАО «Смолевичи Бройлер» — производственное подразделение группы компаний Серволюкс.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#catalog"
              className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 text-base"
            >
              <Factory size={18} />
              B2B — Профессиональные решения
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#catalog"
              className="group flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm text-base"
            >
              <Home size={18} />
              B2C — Линейка MyDay
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats / Trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '40+', label: 'позиций в каталоге' },
              { value: '3', label: 'направления применения' },
              { value: '100%', label: 'производство в Беларуси' },
              { value: '25+', label: 'лет в агрохолдинге' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs text-slate-400 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
        <span className="text-xs text-white tracking-widest uppercase">Листайте</span>
      </div>
    </section>
  );
}
