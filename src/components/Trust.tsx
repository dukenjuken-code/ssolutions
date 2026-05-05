import { Microscope, Gauge, Package, FileCheck, TrendingUp, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Microscope,
    title: 'Лабораторный контроль на каждом этапе',
    text: 'Производственная лаборатория проводит входной контроль сырья, межоперационный контроль и приёмочные испытания готовой продукции. Аналитические методы соответствуют актуальным стандартам ГОСТ и СТБ для химической и пищевой промышленности.',
  },
  {
    icon: Gauge,
    title: 'Промышленный стандарт холдинга — не рекламный образец',
    text: 'Эффективность состава подтверждается не маркетинговыми тестами, а ежедневной работой на десятках тысяч квадратных метров производственных цехов, холодильных зон и перерабатывающих линий группы Серволюкс.',
  },
  {
    icon: Package,
    title: 'Объём — гарантия стабильности формулы',
    text: 'Годовое потребление химии внутри холдинга исчисляется сотнями тысяч литров. Это обеспечивает строжайший производственный контроль и неизменность рецептуры от партии к партии.',
  },
  {
    icon: FileCheck,
    title: 'Полный регуляторный пакет по первому запросу',
    text: 'Санитарно-гигиенические заключения, свидетельства о государственной регистрации, паспорта безопасности (SDS), протоколы испытаний эффективности — документация готова и предоставляется мгновенно.',
  },
  {
    icon: TrendingUp,
    title: 'Независимость от импорта — отечественное производство',
    text: 'Основное сырьё и производственная база — в Республике Беларусь. Никаких рисков валютных скачков или перебоев в цепочке поставок. Стабильность цены и отгрузок подкреплена ресурсами группы.',
  },
  {
    icon: Award,
    title: 'Технический сервис от разработчиков состава',
    text: 'Консультации ведут специалисты, разрабатывавшие эти рецептуры для собственного производства. Они знают ваши задачи изнутри и помогут выстроить программу мойки и дезинфекции под ваш технологический процесс.',
  },
];

const integrations = [
  {
    badge: 'Стандарт Халяль',
    title: 'Гарантия чистоты',
    desc: 'Сертификация Халяль подтверждает строжайший контроль состава и отсутствие запрещенных компонентов. Это чистота, которой доверяют на международном уровне.',
    color: 'from-blue-700 to-blue-900',
  },
  {
    badge: 'Экономика концентратов',
    title: 'B2B эффективность',
    desc: 'Мы поставляем высококонцентрированные средства. Точный расчет рабочих растворов (от 1% до 4%) позволяет вам получать минимальную стоимость готового литра при сохранении промышленной эффективности.',
    color: 'from-slate-800 to-slate-900',
  },
  {
    badge: 'Экосистема бренда',
    title: 'Визуальный брендинг экосистемы',
    desc: 'В футере и шапке — единый брендбук Серволюкс. Цветовая палитра, логотип группы, слоган «Продукт экосистемы Серволюкс» создают зрительную связь: покупатель сразу понимает масштаб стоящей за продуктом структуры, даже не читая текст.',
    color: 'from-emerald-800 to-teal-900',
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-blue-700" />
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-widest">Почему нам доверяют</span>
        </div>

        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Промышленный стандарт холдинга —{' '}
            <span className="text-blue-700">не маркетинговый термин</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            За каждым составом в нашем каталоге — реальный производственный опыт. Не испытательный стенд и не лабораторный образец: действующие цеха, жёсткие технологические регламенты и постоянный аналитический контроль группы Серволюкс.
          </p>
        </div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-7 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Servolux Integration Methods */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50">
            <span className="text-sm font-semibold text-blue-700">Профессиональные решения для вашего бизнеса: от экономии до гарантии качества</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            Профессиональные решения для вашего бизнеса: от экономии до гарантии качества
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div
              key={item.badge}
              className={`relative overflow-hidden p-7 rounded-2xl bg-gradient-to-br ${item.color} text-white`}
            >
              <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-bold uppercase tracking-widest mb-5">
                {item.badge}
              </div>
              <h4 className="text-lg font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
