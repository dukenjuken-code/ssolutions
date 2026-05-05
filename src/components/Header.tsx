import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'О компании', href: '#about' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Почему мы', href: '#trust' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Сервис Солюшенс
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                ОАО «Смолевичи Бройлер»
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-semibold text-emerald-700 tracking-wide">SERVOLUX</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+00000000000"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              <Phone size={15} />
              +000 (00) 000-00-00
            </a>
            <a
              href="#catalog"
              className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Перейти в каталог
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a href="tel:+00000000000" className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600">
                <Phone size={14} /> +000 (00) 000-00-00
              </a>
              <a
                href="#catalog"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg text-center"
              >
                Перейти в каталог
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
