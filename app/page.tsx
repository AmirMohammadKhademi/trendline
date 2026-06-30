import Button from "./components/ui/button";
import Card from "./components/ui/card";
import Container from "./components/layout/Container";

export default function Home() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          {/* Header */}
          <div className="space-y-2 mb-6">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Trendline
              </span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              پلتفرم حرفه‌ای تحلیل و سیگنال معاملاتی
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <h2 className="text-lg font-semibold">خوش‌آمدید</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              یک پلتفرم مدرن و قدرتمند برای تحلیل بازار و دریافت سیگنال‌های معاملاتی.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">100%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">رایگان</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-green-600 dark:text-green-400">⚡</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">سریع</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-amber-600 dark:text-amber-400">🔒</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">امن</p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <Button className="w-full">ورود به پنل</Button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              حساب کاربری ندارید؟{" "}
              <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
                ثبت‌نام کنید
              </a>
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
}