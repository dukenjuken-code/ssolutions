import { CheckCircle2, Building2, FlaskConical, Layers } from 'lucide-react';

const bullets = [
  {
    icon: FlaskConical,
    title: 'Лабораторный контроль каждой партии',
    desc: 'Каждый состав проходит многоступенчатый контроль в производственной лаборатории, соответствующей требованиям ISO к аналитическим лабораториям пищевой промышленности.',
  },
  {
    icon: Building2,
    title: 'Промышленная апробация на действующих мощностях',
    desc: 'Формулы разработаны и отработаны в реальных условиях птицефабрик и мясоперерабатывающих производств холдинга — не на тестовых стендах.',
  },
  {
    icon: Layers,
    title: 'Масштаб группы — гарантия стабильности',
    desc: 'Входя в группу Серволюкс — одного из крупнейших агрохолдингов Беларуси, — мы обеспечиваем стабильность поставок и производственной базы для любых объёмов.',
  },
  {
    icon: CheckCircle2,
    title: 'Соответствие регуляторным требованиям',
    desc: 'Вся продукция зарегистрирована, сопровождается паспортами безопасности и соответствует санитарно-эпидемиологическим нормам Республики Беларусь и ЕАЭС.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-blue-700" />
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-widest">О компании</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Рождены внутри{' '}
              <span className="text-blue-700">производства,</span>{' '}
              а не в маркетинге
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-slate-900">Филиал «Сервис Солюшенс»</strong> — производственное подразделение ОАО «Смолевичи Бройлер», входящее в группу компаний{' '}
                <strong className="text-blue-700">Серволюкс</strong>.
              </p>
              <p>
                Наши формулы работают там, где требования к чистоте критичны: на птицефабриках, мясоперерабатывающих заводах и в ритейле холдинга. Задолго до того, как продукт попадает к вам, он уже прошёл тысячи циклов реальной промышленной эксплуатации.
              </p>
              <p>
                Это принципиально отличает нас от дистрибьюторов: мы не перепродаём чужие составы — мы поставляем вам{' '}
                <em className="not-italic font-semibold text-slate-900">то же самое</em>, чем обеспечиваем биобезопасность на собственных мощностях. Стандарты группы Серволюкс — это ваши стандарты.
              </p>
            </div>

            {/* Servolux badge */}
            <div className="mt-8 p-5 rounded-2xl bg-blue-950 text-white">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-700/50 flex items-center justify-center">
                  <span className="text-xl font-black text-white">S</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-1">Выбор холдинга</div>
                  <div className="font-bold text-white text-lg leading-snug mb-1">Группа компаний Серволюкс</div>
                  <div className="text-sm text-blue-200">
                    Агрохолдинг, объединяющий производство, переработку и ритейл полного цикла. Наша продукция — внутренний стандарт всей цепочки.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bullets */}
          <div className="space-y-5">
            {bullets.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                    <div className="text-sm text-slate-600 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent: 5 Trust Bullets */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Пять причин, почему нам доверяют производственные предприятия
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', text: 'Формулы разработаны и тестируются в собственной производственной лаборатории аккредитованного уровня' },
              { num: '02', text: 'Промышленная апробация: каждый состав прошёл не менее 12 месяцев эксплуатации на живом производстве холдинга' },
              { num: '03', text: 'Объём собственного потребления в холдинге — сотни тысяч литров в год. Вы работаете с тем же составом' },
              { num: '04', text: 'Регуляторное соответствие: санитарные свидетельства, паспорта безопасности, протоколы испытаний — по первому запросу' },
              { num: '05', text: 'Стабильность поставок обеспечена производственной базой группы Серволюкс — без зависимости от импорта' },
            ].map((b) => (
              <div key={b.num} className="flex flex-col gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-900 text-white">
                <span className="text-3xl font-black text-blue-400 opacity-60">{b.num}</span>
                <p className="text-sm leading-relaxed text-blue-100">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
