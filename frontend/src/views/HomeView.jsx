import { Search, MessageCircle, Star, Clock, Shield, Heart } from 'lucide-react';

const HomeView = ({ onNavigate }) => {
  const features = [
    {
      icon: Search,
      title: 'Búsqueda Fácil',
      description: 'Encuentra clínicas cercanas con filtros avanzados por especialidad y ubicación.',
      color: 'text-sky',
    },
    {
      icon: MessageCircle,
      title: 'Chat Inteligente',
      description: 'Conversa con nuestro asistente virtual para obtener recomendaciones personalizadas.',
      color: 'text-matcha',
    },
    {
      icon: Star,
      title: 'Calidad Verificada',
      description: 'Todas las clínicas están verificadas y cuentan con reseñas de pacientes reales.',
      color: 'text-yellow-500',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Accede a la información de clínicas en cualquier momento, desde cualquier lugar.',
      color: 'text-purple-500',
    },
    {
      icon: Shield,
      title: 'Seguridad y Privacidad',
      description: 'Tus datos están protegidos con los más altos estándares de seguridad.',
      color: 'text-red-500',
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Recibe recomendaciones basadas en tus necesidades específicas de salud.',
      color: 'text-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-matcha to-sky text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Conecta con la Mejor Atención Médica
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90">
              Encuentra clínicas de calidad cerca de ti con HealthConnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('search')}
                className="bg-white text-matcha px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Buscar Clínicas
              </button>
              <button
                onClick={() => onNavigate('chat')}
                className="bg-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky/90 transition-colors shadow-lg"
              >
                Hablar con Asistente
              </button>
              <button
                onClick={() => onNavigate('recommendations')}
                className="bg-white text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Ver Recomendaciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué elegir HealthConnect?
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos la mejor experiencia para encontrar atención médica de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className={`${feature.color} bg-gray-100 p-3 rounded-lg`}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Crea una cuenta gratis y comienza a buscar las mejores clínicas
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="bg-matcha text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-matcha/90 transition-colors shadow-lg"
          >
            Registrarse Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
