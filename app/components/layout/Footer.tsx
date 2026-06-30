export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-950 py-12 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold gradient-text">Trendline</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              پلتفرم حرفه‌ای تحلیل و سیگنال معاملاتی
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">پیوندها</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">تماس</a></li>
              <li><a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">شرایط</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">شبکه‌های اجتماعی</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-teal-600 text-white hover:bg-teal-700 flex items-center justify-center transition-colors">👨</a>
              <a href="#" className="w-8 h-8 rounded-lg bg-teal-600 text-white hover:bg-teal-700 flex items-center justify-center transition-colors">🔗</a>
              <a href="#" className="w-8 h-8 rounded-lg bg-teal-600 text-white hover:bg-teal-700 flex items-center justify-center transition-colors">📱</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Trendline. تمام حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}