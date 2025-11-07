import { Star, MapPin, Clock, Phone, Award, ThumbsUp, TrendingUp } from 'lucide-react';

const RecommendationsView = ({ onNavigate }) => {
  const recommendations = [
    {
      id: 1,
      name: 'Centro Médico Del Norte',
      specialty: 'Cardiología',
      location: 'Zona Norte',
      rating: 4.9,
      reviews: 189,
      hours: 'Lun-Sab 9:00-18:00',
      phone: '+1 (555) 234-5678',
      distance: '3.2 km',
      matchScore: 98,
      reasons: [
        'Alta calificación de pacientes',
        'Especialistas certificados',
        'Equipamiento moderno',
      ],
      badge: 'Mejor valorada',
      badgeColor: 'bg-yellow-500',
    },
    {
      id: 2,
      name: 'Clínica Santa María',
      specialty: 'Medicina General',
      location: 'Centro',
      rating: 4.8,
      reviews: 245,
      hours: 'Lun-Vie 8:00-20:00',
      phone: '+1 (555) 123-4567',
      distance: '2.5 km',
      matchScore: 95,
      reasons: [
        'Más cercana a tu ubicación',
        'Horario extendido',
        'Excelentes reseñas',
      ],
      badge: 'Más cercana',
      badgeColor: 'bg-matcha',
    },
    {
      id: 3,
      name: 'Clínica Infantil Alegría',
      specialty: 'Pediatría',
      location: 'Zona Sur',
      rating: 4.7,
      reviews: 312,
      hours: 'Lun-Dom 24 horas',
      phone: '+1 (555) 345-6789',
      distance: '4.1 km',
      matchScore: 92,
      reasons: [
        'Servicio 24/7',
        'Especialistas en pediatría',
        'Instalaciones para niños',
      ],
      badge: 'Disponibilidad 24/7',
      badgeColor: 'bg-sky',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Award className="h-8 w-8 text-matcha" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Recomendaciones Personalizadas
            </h1>
          </div>
          <p className="text-gray-600">
            Hemos seleccionado las mejores clínicas basándonos en tus preferencias y necesidades
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-matcha to-sky text-white rounded-lg p-6 mb-8 shadow-md">
          <div className="flex items-start space-x-4">
            <TrendingUp className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Cómo funcionan nuestras recomendaciones?
              </h3>
              <p className="text-white/90">
                Analizamos múltiples factores incluyendo calificaciones de pacientes, certificaciones, 
                ubicación, disponibilidad horaria, y especialidades para ofrecerte las mejores opciones.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendation Cards */}
        <div className="space-y-6">
          {recommendations.map((clinic, index) => (
            <div
              key={clinic.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Badge */}
              <div className={`${clinic.badgeColor} text-white px-6 py-2 flex items-center justify-between`}>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">{clinic.badge}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Compatibilidad:</span>
                  <span className="text-lg font-bold">{clinic.matchScore}%</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">
                        #{index + 1}
                      </h3>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {clinic.name}
                      </h3>
                    </div>
                    <p className="text-matcha font-semibold text-lg">{clinic.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    <span className="font-bold text-xl">{clinic.rating}</span>
                    <span className="text-gray-600">({clinic.reviews} reseñas)</span>
                  </div>
                </div>

                {/* Reasons */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <ThumbsUp className="h-5 w-5 text-matcha mr-2" />
                    Por qué recomendamos esta clínica:
                  </h4>
                  <ul className="space-y-2">
                    {clinic.reasons.map((reason, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <span className="text-matcha mt-1">✓</span>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>{clinic.location} • {clinic.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{clinic.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span>{clinic.phone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-matcha text-white py-3 rounded-lg font-semibold hover:bg-matcha/90 transition-colors">
                    Agendar Cita
                  </button>
                  <button className="flex-1 bg-sky text-white py-3 rounded-lg font-semibold hover:bg-sky/90 transition-colors">
                    Ver Perfil Completo
                  </button>
                  <button className="sm:w-auto bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Actions */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Explora más opciones o refina tu búsqueda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('search')}
                className="bg-matcha text-white px-8 py-3 rounded-lg font-semibold hover:bg-matcha/90 transition-colors"
              >
                Ver Todas las Clínicas
              </button>
              <button
                onClick={() => onNavigate('chat')}
                className="bg-sky text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky/90 transition-colors"
              >
                Hablar con Asistente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsView;
