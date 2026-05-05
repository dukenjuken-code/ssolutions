import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const catalogLinks = [
  { label: 'Бытовая химия MyDay', href: '#catalog' },
  { label: 'Линейка HoReCa (Tantum)', href: '#catalog' },
  { label: 'Производство (СервоЛайн)', href: '#catalog' },
  { label: 'Дезинфекция', href: '#catalog' },
  { label: 'Посудомоечные машины', href: '#catalog' },
  { label: 'Пароконвектоматы Rational', href: '#catalog' },
];

const companyLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Решения для отраслей', href: '#industries' },
  { label: 'Почему нам доверяют', href: '#trust' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      {/* Servolux Brand Block */}
      <div className="border-b border-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-5">
              {/* Servolux logo mark */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center border border-blue-700/50">
                <span className="text-3xl font-black text-white">S</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-0.5">
                  Продукт экосистемы
                </div>
                <div className="text-2xl font-black text-white tracking-tight">СЕРВОЛЮКС</div>
                <div className="text-xs text-slate-500 mt-0.5">Группа компаний — агрохолдинг Беларуси</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl border border-emerald-800 bg-emerald-900/30 text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                Выбор холдинга
              </div>
              <a
                href="https://servolux.by"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-800 text-xs font-medium text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
              >
                servolux.by <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <div className="text-base font-bold text-white">Сервис Солюшенс</div>
                <div className="text-xs text-slate-500">Профессиональная и бытовая химия</div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Производственное подразделение ОАО «Смолевичи Бройлер», входящее в группу компаний Серволюкс. Составы, прошедшие промышленную апробацию на мощностях холдинга.
              </p>
              <div className="space-y-2.5">
                <a href="tel:+0000000000000" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone size={13} className="text-blue-500" />
                  +000 (00) 000-00-00
                </a>
                <a href="mailto:0000@servolux.by" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={13} className="text-blue-500" />
                  0000@servolux.by
                </a>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin size={13} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Минская обл., г. Смолевичи</span>
                </div>
              </div>
            </div>

            {/* Column 2: Catalog */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">Каталог</h4>
              <ul className="space-y-2.5">
                {catalogLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-white transition-colors leading-snug block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">Компания</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-white transition-colors leading-snug block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-5">Реквизиты</h4>
              <div className="space-y-1 text-sm text-slate-500 leading-relaxed">
                <p className="text-slate-300 font-semibold">Филиал «Сервис Солюшенс»</p>
                <p>ОАО «Смолевичи Бройлер»</p>
                <p className="pt-2">УНП 600185155</p>
                <p>р/с 3012000000001</p>
                <p className="pt-2">Минская обл., Смолевичский р-н</p>
                <p className="pt-3 text-xs text-slate-600 leading-relaxed">
                  Филиал не является самостоятельным юридическим лицом. Действует на основании положения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600 text-center sm:text-left">
              © {new Date().getFullYear()} Филиал «Сервис Солюшенс» ОАО «Смолевичи Бройлер». Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
