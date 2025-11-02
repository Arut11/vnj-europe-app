import { Mail, Phone, MessageCircle, FileText, Clock, Shield, CheckCircle, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ВНЖ Европа</h1>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Связаться
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              ВНЖ В ЕВРОПУ<br />В КОРОТКИЙ СРОК
            </h2>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              Профессиональная помощь в получении документов для граждан СНГ
            </p>
            <div className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl shadow-2xl">
              <p className="text-3xl font-bold">от 1900 €</p>
              <p className="text-sm text-gray-600 mt-1">Оформление под ключ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши Услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ВНЖ', desc: 'Вид на жительство в Европе' },
              { title: 'Виза D', desc: 'Долгосрочная национальная виза' },
              { title: 'Шенгенская виза', desc: 'Свободное передвижение по ЕС' },
              { title: 'Паспорт ЕС', desc: 'Европейское гражданство' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Преимущества Работы с Нами
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: 'Оформление под ключ',
                desc: 'Полное сопровождение на всех этапах получения документов'
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: 'Бесплатная консультация',
                desc: 'Первичная консультация абсолютно бесплатна'
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: 'Ускоренная подготовка',
                desc: 'Готовим документы в максимально короткие сроки'
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: 'Без вашего присутствия',
                desc: 'Подача документов без необходимости личного присутствия'
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: 'Помощь в трудоустройстве',
                desc: 'Содействие в поиске работы в Европе'
              },
              {
                icon: <FileText className="w-10 h-10" />,
                title: 'Замена водительских прав',
                desc: 'Помощь с заменой водительского удостоверения на европейское'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Свяжитесь с Нами
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Готовы начать путь к европейскому ВНЖ? Мы на связи!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:visaeurope2025@gmail.com"
              className="flex items-center space-x-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Mail className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <p className="text-gray-900 font-semibold break-all">visaeurope2025@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/4915212292765"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 font-medium">WhatsApp</p>
                <p className="text-gray-900 font-semibold">+49 152 122 927 65</p>
              </div>
            </a>

            <a
              href="viber://chat?number=37494408344"
              className="flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Phone className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Viber</p>
                <p className="text-gray-900 font-semibold">+374 94 408 344</p>
              </div>
            </a>

            <a
              href="https://t.me/+79272000444"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Telegram</p>
                <p className="text-gray-900 font-semibold">+7 927 200 04 44</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-2">© 2025 ВНЖ Европа. Профессиональная юридическая помощь.</p>
          <p className="text-gray-400 text-sm">Помогаем гражданам СНГ получить ВНЖ, визы и паспорта ЕС</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
