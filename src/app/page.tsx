import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-algeria-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between py-4 items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white bg-algeria-green flex-shrink-0">
                <img 
                  src="/profile.jpeg" 
                  alt="زينب داحاج" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 leading-tight">زينب داحاج</h1>
                <p className="text-sm text-algeria-green font-semibold">حزب جبهة التحرير الوطني</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8 items-center bg-gray-50/80 px-4 md:px-6 py-2 rounded-full border border-gray-100 text-sm md:text-base flex-wrap justify-center">
              <a href="#" className="text-gray-900 hover:text-algeria-green font-bold transition-colors">الرئيسية</a>
              <a href="#about" className="text-gray-700 hover:text-algeria-red font-medium transition-colors">عن المترشحة</a>
              <a href="#program" className="text-gray-700 hover:text-algeria-red font-medium transition-colors">البرنامج الانتخابي</a>
              <a href="#comments" className="text-gray-700 hover:text-algeria-red font-medium transition-colors">رسائل الدعم</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-algeria-green rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-algeria-red rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-algeria-green/10 text-algeria-green font-semibold mb-6">
            <span>تشريعيات 02 جويلية 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            أصالة، عصرنة وتشبيب <br/> <span className="text-algeria-green">لجزائر منتصرة</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            معاً نحو مستقبل مشرق لولاية أدرار، ندعوكم للالتفاف حول القائمة رقم 02 لدعم مسيرة التنمية والإصلاح.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-white border-2 border-algeria-green shadow-xl rounded-2xl p-6 w-full sm:w-64 transform transition hover:-translate-y-1">
              <div className="text-gray-500 text-sm font-semibold mb-1">القائمة رقم</div>
              <div className="text-6xl font-black text-algeria-red">02</div>
              <div className="mt-2 text-algeria-green font-bold">حزب جبهة التحرير الوطني</div>
            </div>
            <div className="bg-algeria-green text-white shadow-xl rounded-2xl p-6 w-full sm:w-64 transform transition hover:-translate-y-1">
              <div className="text-white/80 text-sm font-semibold mb-1">رقم المترشحة</div>
              <div className="text-6xl font-black text-white">5</div>
              <div className="mt-2 font-bold">زينب داحاج</div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section Placeholder */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex justify-center order-first md:order-last">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl shadow-2xl overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center bg-gray-100 transform transition hover:scale-[1.02]">
                <img 
                  src="/portrait.jpg" 
                  alt="صورة المترشحة" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-algeria-green pr-4">عن المترشحة</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-600 leading-relaxed text-lg italic text-center">
                  "سيتم إضافة السيرة الذاتية قريباً..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section Placeholder */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">البرنامج الانتخابي</h2>
            <div className="h-1 w-24 bg-algeria-red mx-auto rounded-full"></div>
          </div>
          <div className="bg-gray-50 p-12 rounded-3xl text-center border border-gray-100 shadow-inner">
            <p className="text-gray-600 leading-relaxed text-lg italic">
              "سيتم إضافة تفاصيل البرنامج الانتخابي قريباً..."
            </p>
          </div>
        </div>
      </section>

      {/* Support Comments Section */}
      <section id="comments" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">رسائل الدعم</h2>
            <p className="text-gray-600 text-lg">آراء ودعم سكان ولاية أدرار للمترشحة زينب داحاج</p>
            <div className="h-1 w-24 bg-algeria-green mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {[
              "1.PNG", "12147475252.PNG", "15151.PNG", "1878455.PNG", 
              "25417521.PNG", "32474151.PNG", "4184845415.PNG", "484582622.PNG", 
              "512512512521.PNG", "51251521.PNG", "5151151.PNG", "515151256.PNG", 
              "515158151.PNG", "5253533.PNG", "Capture.PNG"
            ].map((img, idx) => (
              <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 bg-white">
                <img 
                  src={`/coments/${img}`} 
                  alt="رسالة دعم" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-4 border-algeria-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">زينب داحاج</h3>
              <p className="text-gray-400">مرشحة جبهة التحرير الوطني - ولاية أدرار</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <span className="mb-3 text-gray-300">تواصلوا معنا</span>
              <a 
                href="https://www.facebook.com/zynebdhadj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                الصفحة الرسمية
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; 2026 جميع الحقوق محفوظة. تشريعيات 02 جويلية.
          </div>
        </div>
      </footer>
    </main>
  );
}
