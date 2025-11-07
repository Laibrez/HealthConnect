import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatView = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '¡Hola! Soy el asistente virtual de HealthConnect. ¿En qué puedo ayudarte hoy?',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('buscar') || lowerMessage.includes('clínica') || lowerMessage.includes('médico')) {
      return '¡Perfecto! Puedo ayudarte a encontrar clínicas. ¿Qué tipo de especialidad médica necesitas? Por ejemplo: medicina general, cardiología, pediatría, etc.';
    } else if (lowerMessage.includes('cardiología') || lowerMessage.includes('cardiólogo')) {
      return 'Excelente. Encontré varias clínicas de cardiología en tu área. ¿Te gustaría ver las recomendaciones ahora? Puedo mostrarte las mejores opciones según calificaciones y ubicación.';
    } else if (lowerMessage.includes('pediatría') || lowerMessage.includes('pediatra') || lowerMessage.includes('niños')) {
      return 'Entiendo que necesitas un pediatra. Tenemos clínicas especializadas en atención infantil. ¿Prefieres una clínica con horario extendido o servicio de urgencias 24 horas?';
    } else if (lowerMessage.includes('medicina general') || lowerMessage.includes('consulta general')) {
      return 'Para medicina general, tengo varias opciones disponibles. ¿Hay alguna zona específica de la ciudad que prefieras? Puedo filtrar por ubicación para mostrarte las clínicas más cercanas.';
    } else if (lowerMessage.includes('urgencia') || lowerMessage.includes('emergencia')) {
      return 'Si es una urgencia, te recomiendo contactar inmediatamente al servicio de emergencias. También puedo mostrarte clínicas con servicio de urgencias 24/7 en tu área.';
    } else if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuánto')) {
      return 'Los precios varían según la clínica y el tipo de consulta. Las clínicas en nuestra plataforma suelen tener información de precios disponible. ¿Te gustaría ver las opciones para que compares?';
    } else if (lowerMessage.includes('horario') || lowerMessage.includes('disponibilidad')) {
      return 'Puedo ayudarte a encontrar clínicas con horarios que se ajusten a tus necesidades. ¿Prefieres horarios de mañana, tarde, o necesitas una clínica con horario extendido?';
    } else if (lowerMessage.includes('si') || lowerMessage.includes('sí') || lowerMessage.includes('claro') || lowerMessage.includes('seguro')) {
      return '¡Perfecto! Voy a preparar las recomendaciones para ti. Dame un momento para encontrar las mejores opciones...';
    } else if (lowerMessage.includes('gracias') || lowerMessage.includes('ok')) {
      return '¡De nada! ¿Hay algo más en lo que pueda ayudarte? Estoy aquí para facilitar tu búsqueda de atención médica.';
    } else {
      return 'Entiendo. Puedo ayudarte a buscar clínicas, filtrar por especialidad, ubicación, y mostrarte recomendaciones personalizadas. ¿Qué te gustaría hacer?';
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const quickActions = [
    'Buscar clínicas cerca de mí',
    'Necesito un cardiólogo',
    'Buscar pediatra',
    'Ver recomendaciones',
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-t-lg shadow-md p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-matcha p-2 rounded-full">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                Asistente Virtual
              </h1>
              <p className="text-sm text-green-600">● En línea</p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 bg-white shadow-md overflow-y-auto p-6 space-y-4" style={{ minHeight: '400px', maxHeight: '600px' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-sky' : 'bg-matcha'
                  }`}
                >
                  {message.sender === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-sky text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-sky-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2 max-w-[80%]">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-matcha">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="rounded-lg p-4 bg-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="bg-white shadow-md p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Acciones rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-matcha hover:text-white transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="bg-white rounded-b-lg shadow-md p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-matcha focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="bg-matcha text-white px-6 py-3 rounded-lg font-semibold hover:bg-matcha/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatView;
