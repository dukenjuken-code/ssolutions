import { useState, useMemo } from 'react';
import { Download, ShoppingCart, FlaskConical, X } from 'lucide-react';
import { allProducts, type Product, type ProductCategory, categoryLabels, subcategories } from '../data/products';

const categoryConfig: Record<ProductCategory, { color: string; dot: string; bg: string; border: string }> = {
  homecare: {
    color: 'text-emerald-700',
    dot: 'bg-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  horeca: {
    color: 'text-amber-700',
    dot: 'bg-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  industry: {
    color: 'text-blue-700',
    dot: 'bg-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
};

function ProductCard({ product }: { product: Product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cfg = categoryConfig[product.category];
  
  // Кнопка появится, если в тексте больше 90 символов
  const isLong = product.description.length > 90;

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
      {/* Область изображения */}
      <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent && !parent.querySelector('.placeholder-icon')) {
              const placeholder = document.createElement('div');
              placeholder.className = 'placeholder-icon absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200';
              placeholder.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
                <span style="font-size:11px;color:#94a3b8;font-weight:600;text-align:center;padding:0 16px;">Фото будет добавлено</span>
              `;
              parent.appendChild(placeholder);
            }
          }}
        />
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color} ${cfg.border} border`}>
          <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
          {categoryLabels[product.category]}
        </div>
        {product.badge && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white shadow-sm">
          <FlaskConical size={11} className="text-blue-600 flex-shrink-0" />
          <span className="text-[10px] font-semibold text-blue-700 leading-none">
            Протестировано в агрохолдинге Servolux
          </span>
        </div>
      </div>

      {/* Тело карточки */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">{product.subcategory}</div>
        <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">{product.name}</h3>

        {/* Описание с кнопкой */}
        <div className="flex-1">
          <p className={`text-xs text-slate-500 leading-relaxed ${!isExpanded && isLong ? 'line-clamp-3' : ''}`}>
            {product.description}
          </p>
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1.5 text-[10px] font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider block"
            >
              {isExpanded ? 'Скрыть ▲' : 'Подробнее ▼'}
            </button>
          )}
        </div>

        {/* Характеристики — теперь они всегда внизу благодаря mt-auto в блоке выше или flex-1 */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {product.ph && (
            <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wide">pH</span>
              <span className="text-xs font-bold text-slate-700">{product.ph}</span>
            </div>
          )}
          {product.concentration && (
            <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wide">Концентрация</span>
              <span className="text-xs font-bold text-slate-700">{product.concentration}</span>
            </div>
          )}
          {product.volume && (
            <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-slate-50 border border-slate-100 col-span-2">
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wide">Фасовка</span>
              <span className="text-xs font-bold text-slate-700">{product.volume}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const availableSubcategories = useMemo(() => {
    if (activeCategory === 'all') return [];
    return subcategories[activeCategory];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCat = activeCategory === 'all' || p.category === activeCategory;
      const matchesSub = activeSubcategory === 'all' || p.subcategory === activeSubcategory;
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.purpose.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSub && matchesSearch;
    });
  }, [activeCategory, activeSubcategory, searchQuery]);

  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    setActiveCategory(cat);
    setActiveSubcategory('all');
  };

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-blue-700" />
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-widest">Каталог продукции</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-2">
              {filteredProducts.length} решений{' '}
              <span className="text-blue-700">для вашей задачи</span>
            </h2>
            <p className="text-slate-500">Каждая позиция прошла апробацию на производстве группы Серволюкс</p>
          </div>
          {/* Search */}
          <div className="relative sm:w-64">
            <input
              type="text"
              placeholder="Поиск по каталогу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-700 text-white shadow-md shadow-blue-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
            }`}
          >
            Все продукты ({allProducts.length})
          </button>
          <button
            onClick={() => handleCategoryChange('homecare')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'homecare'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-700'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Бытовая химия MyDay ({allProducts.filter((p) => p.category === 'homecare').length})
          </button>
          <button
            onClick={() => handleCategoryChange('horeca')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'horeca'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-700'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            HoReCa ({allProducts.filter((p) => p.category === 'horeca').length})
          </button>
          <button
            onClick={() => handleCategoryChange('industry')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === 'industry'
                ? 'bg-blue-700 text-white shadow-md shadow-blue-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            Производство ({allProducts.filter((p) => p.category === 'industry').length})
          </button>
        </div>

        {/* Subcategory filter */}
        {availableSubcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 pl-1">
            <button
              onClick={() => setActiveSubcategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeSubcategory === 'all'
                  ? 'bg-slate-800 text-white'
                  : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-400'
              }`}
            >
              Все подгруппы
            </button>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSubcategory === sub
                    ? 'bg-slate-800 text-white'
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-400'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center text-slate-400">
            <FlaskConical size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">По вашему запросу ничего не найдено</p>
            <p className="text-sm mt-1">Попробуйте изменить фильтры или поисковый запрос</p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* B2B CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 to-blue-900 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2">Оптовые поставки</div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Нужен индивидуальный расчёт?</h3>
            <p className="text-blue-200 text-sm max-w-md">
              Для юридических лиц — персональный менеджер, технические консультации и разработка программы уборки / дезинфекции под ваше производство.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#contacts"
              className="px-7 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors text-sm text-center whitespace-nowrap"
            >
              Запросить коммерческое предложение
            </a>
            <a
              href="tel:+0000000000"
              className="px-7 py-3.5 bg-blue-700/50 border border-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm text-center whitespace-nowrap"
            >
              Позвонить напрямую
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
