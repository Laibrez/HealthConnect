import { useState } from 'react';
import { Search, MapPin, Filter, Star, Clock, Phone } from 'lucide-react';

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    { id: 'all', name: 'Todas las especialidades' },
    { id: 'general', name: 'Medicina General' },
    { id: 'cardiology', name: 'Cardiología' },
    { id: 'pediatrics', name: 'Pediatría' },
    { id: 'dermatology', name: 'Dermatología' },
    { id: 'orthopedics', name: 'Ortopedia' },
  ];

  const locations = [
    { id: 'all', name: 'Todas las ubicaciones' },
    { id: 'downtown', name: 'Centro' },
    { id: 'north', name: 'Zona Norte' },
    { id: 'south', name: 'Zona Sur' },
    { id: 'east', name: 'Zona Este' },
    { id: 'west', name: 'Zona Oeste' },
  ];

  const clinics = [
    {
      id: 1,
      name: 'Clínica Santa María',
      specialty: 'Medicina General',
      location: 'Centro',
      rating: 4.8,
      reviews: 245,
      hours: 'Lun-Vie 8:00-20:00',
      phone: '+1 (555) 123-4567',
      distance: '2.5 km',
    },
    {
      id: 2,
      name: 'Centro Médico Del Norte',
      specialty: 'Cardiología',
      location: 'Zona Norte',
      rating: 4.9,
      reviews: 189,
      hours: 'Lun-Sab 9:00-18:00',
      phone: '+1 (555) 234-5678',
      distance: '3.2 km',
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
    },
    {
      id: 4,
      name: 'Derma Care Center',
      specialty: 'Dermatología',
      location: 'Zona Este',
      rating: 4.6,
      reviews: 156,
      hours: 'Lun-Vie 10:00-19:00',
      phone: '+1 (555) 456-7890',
      distance: '5.3 km',
    },
    {
      id: 5,
      name: 'Ortopedia Integral',
      specialty: 'Ortopedia',
      location: 'Zona Oeste',
      rating: 4.8,
      reviews: 203,
      hours: 'Lun-Sab 8:00-17:00',
      phone: '+1 (555) 567-8901',
      distance: '3.8 km',
    },
  ];

  const filteredClinics = clinics.filter((clinic) => {
    const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            clinic.specialty.toLowerCase().includes(specialties.find(s => s.id === selectedSpecialty)?.name.toLowerCase() || '');
    const matchesLocation = selectedLocation === 'all' || 
                           clinic.location.toLowerCase().includes(locations.find(l => l.id === selectedLocation)?.name.toLowerCase() || '');
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Buscar Clínicas
          </h1>
          <p className="text-gray-600">
            Encuentra la clínica perfecta para tus necesidades
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-matcha focus:border-transparent"
                placeholder="Buscar por nombre de clínica o especialidad..."
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="inline h-4 w-4 mr-1" />
                Especialidad
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-matcha focus:border-transparent"
              >
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Ubicación
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-matcha focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredClinics.length} clínica{filteredClinics.length !== 1 ? 's' : ''} encontrada{filteredClinics.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Clinic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {clinic.name}
                  </h3>
                  <p className="text-matcha font-medium">{clinic.specialty}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{clinic.rating}</span>
                  <span className="text-gray-500 text-sm">({clinic.reviews})</span>
                </div>
              </div>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>{clinic.location} • {clinic.distance}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{clinic.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{clinic.phone}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-3">
                <button className="flex-1 bg-matcha text-white py-2 rounded-lg font-semibold hover:bg-matcha/90 transition-colors">
                  Ver Detalles
                </button>
                <button className="flex-1 bg-sky text-white py-2 rounded-lg font-semibold hover:bg-sky/90 transition-colors">
                  Contactar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredClinics.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus filtros de búsqueda
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('all');
                setSelectedLocation('all');
              }}
              className="bg-matcha text-white px-6 py-2 rounded-lg font-semibold hover:bg-matcha/90 transition-colors"
            >
              Limpiar Filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
