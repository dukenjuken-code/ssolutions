import { Utensils, Factory, Home, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    color: 'blue',
    label: 'Пищевые производства',
    tag: 'Food Industry',
    headline: 'CIP-мойка, дезинфекция, биобезопасность',
    items: [
      'Мойка технологического оборудования',
      'CIP-системы (безразборная мойка)',
      'Дезинфекция тары и инвентаря',
      'Обработка коптильных и варочных камер',
      'Дезинфекция поверхностей и транспорта',
    ],
    products: 'СервоЛайн 100–1000, Вирутек, ДезОксиПлюс, НУК марки А',
    bgFrom: 'from-blue-950',
    bgTo: 'to-blue-900',
    accent: 'text-blue-300',
    border: 'border-blue-800',
    badgeBg: 'bg-blue-700/40',
  },
  {
    icon: Utensils,
    color: 'amber',
    label: 'HoReCa',
    tag: 'Рестораны / Отели',
    headline: 'Профессиональные средства для кухонь и залов',
    items: [
      'Мытьё посуды и кухонного инвентаря',
      'Очистка пароконвектоматов (Rational)',
      'Посудомоечные машины (Торнадо ПМ/Блик)',
      'Дезинфекция поверхностей и санузлов',
      'Гигиена рук персонала и посетителей',
    ],
    products: 'Tantum 101–901, Серводез-Р, Чик Протект, Мыло Фламенко',
    bgFrom: 'from-amber-950',
    bgTo: 'to-orange-950',
    accent: 'text-amber-300',
    border: 'border-amber-900',
    badgeBg: 'bg-amber-700/30',
  },
  {
    icon: Home,
    color: 'emerald',
    label: 'Бытовая химия',
    tag: 'Линейка MyDay',
    headline: 'Промышленная эффективность — для каждого дома',
    items: [
      'Мытьё посуды (гель с алоэ вера)',
      'Удаление нагара с кухонной посуды',
      'Уход за стёклами и зеркалами',
      'Чистящее для санитарных комнат',
      'Средство для полов и прочистки труб',
    ],
    products: 'Гель MyDay, Антинагар, Блеск, BLIK, Для полов, Для труб',
    bgFrom: 'from-emerald-950',
    bgTo: 'to-teal-950',
    accent: 'text-emerald-300',
    border: 'border-emerald-900',
    badgeBg: 'bg-emerald-700/30',
  },
];

const quickGuide = [
  { icon: Droplets, q: 'Чем мыть посуду на кухне завода?', a: 'Tantum 101 / 102', cat: 'HoReCa' },
  { icon: ShieldCheck, q: 'Дезинфекция рук персонала?', a: 'Серводез-Р', cat: 'Оба сегмента' },
  { icon: Factory, q: 'CIP-мойка трубопроводов?', a: 'СервоЛайн 200 / 600', cat: 'Производство' },
  { icon: Sparkles, q: 'Удаление нагара дома?', a: 'MyDay Антинагар', cat: 'MyDay' },
  { icon: Utensils, q: 'Пароконвектомат Rational?', a: 'Таблетки Rational', cat: 'HoReCa' },
  { icon: Droplets, q: 'Борьба с АЧС на производстве?', a: 'Вирутек (АЧС)', cat: 'Производство' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800">
            <span className="text-sm font-medium text-slate-300 tracking-wide">Решения для отраслей</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Один клик — и понятно,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              что подходит именно вам
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Подберите направление и узнайте, какие из наших составов решают именно ваши задачи.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.label}
                className={`relative flex flex-col p-8 rounded-3xl bg-gradient-to-br ${ind.bgFrom} ${ind.bgTo} border ${ind.border} overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
              >
                {/* Icon + label */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${ind.badgeBg} flex items-center justify-center`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${ind.accent} px-3 py-1 rounded-full border border-current opacity-70`}>
                    {ind.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{ind.label}</h3>
                <p className={`text-sm ${ind.accent} mb-5 font-medium`}>{ind.headline}</p>

                {/* Item list */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {ind.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${ind.accent}`} />
                      <span className="text-sm text-slate-300 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Products hint */}
                <div className={`pt-4 border-t ${ind.border}`}>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Ключевые продукты</div>
                  <div className={`text-xs font-semibold ${ind.accent} leading-relaxed`}>{ind.products}</div>
                </div>

                {/* CTA */}
                <a
                  href="#catalog"
                  className="mt-5 w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold text-center transition-colors"
                >
                  Смотреть продукты →
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Guide */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-lg font-bold text-white mb-2">Быстрый гид: частые вопросы</h3>
          <p className="text-slate-400 text-sm mb-6">Один клик — найдите нужный продукт под конкретную задачу</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickGuide.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.q}
                  href="#catalog"
                  className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-700/50 flex items-center justify-center">
                    <Icon size={16} className="text-blue-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">{item.q}</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.a}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.cat}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
