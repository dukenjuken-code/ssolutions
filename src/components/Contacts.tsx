import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+000 (00) 000-00-00',
    sub: 'Пн–Пт, 8:00–17:00',
    href: 'tel:+0000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@servolux.by',
    sub: 'Ответим в течение 1 рабочего дня',
    href: 'mailto:000000@servolux.by',
  },
  {
    icon: MapPin,
    label: 'Адрес производства',
    value: 'Минская обл., г. Смолевичи',
    sub: 'ОАО «Смолевичи Бройлер»',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Режим работы',
    value: 'Пн–Пт: 8:00–17:00',
    sub: 'Сб–Вс: выходной',
    href: '#',
  },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-20 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-emerald-400" />
          <span className="text-sm font-semibold text-emerald-400 uppercase tracking-widest">Контакты</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Обсудим вашу задачу
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Оставьте заявку — наш технический специалист подберёт оптимальную программу мойки и дезинфекции, рассчитает стоимость и подготовит коммерческое предложение.
            </p>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-slate-800 bg-slate-900 hover:border-slate-600 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-700/20 flex items-center justify-center">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-500 mb-0.5">{c.label}</div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                        {c.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Legal note */}
            <div className="mt-8 p-5 rounded-2xl border border-slate-800 bg-slate-900">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Юридическое лицо</div>
              <div className="text-sm text-slate-300 leading-relaxed">
                Филиал «Сервис Солюшенс»<br />
                ОАО «Смолевичи Бройлер»<br />
                УНП 600185155<br />
                Минская обл., Смолевичский р-н
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-500">
                Входит в группу компаний <span className="text-blue-400 font-semibold">Серволюкс</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Send size={28} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Наш специалист свяжется с вами в течение 1 рабочего дня. Спасибо за обращение!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-5 py-2 text-sm text-slate-400 hover:text-white border border-slate-700 rounded-lg transition-colors"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-1">Запрос коммерческого предложения</h3>
                <p className="text-sm text-slate-400 mb-6">Заполните форму — ответим за 1 рабочий день</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Компания / Организация
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="ООО «Ваша компания»"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+375 __ ___ __ __"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
                      Сообщение / Задача
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Опишите вашу задачу: тип производства, объёмы, интересующие продукты..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/40"
                  >
                    <Send size={16} />
                    Отправить заявку
                  </button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных ОАО «Смолевичи Бройлер».
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
