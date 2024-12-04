import React from 'react';
import { Package, Truck, UserPlus } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white">
    <div className="w-12 h-12 bg-[#fbf451] rounded-full flex items-center justify-center mb-4">
      <Icon className="text-gray-800" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir eShopex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={UserPlus}
            title="Registro Gratuito"
            description="Sin costo de apertura ni mantención de tu casilla en Miami."
          />
          <FeatureCard
            icon={Package}
            title="Envíos Seguros"
            description="Seguimiento en tiempo real de tus paquetes desde Miami hasta Chile."
          />
          <FeatureCard
            icon={Truck}
            title="Soporte 24/7"
            description="Asistencia personalizada en español durante todo el proceso."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;