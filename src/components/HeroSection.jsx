import { useEffect, useState } from 'react';

const HeroSection = () => {
 const [scrolled, setScrolled] = useState(false);
 const [parallaxOffset, setParallaxOffset] = useState(0);

 useEffect(() => {
   const handleScroll = () => {
     // Detectar scroll para efectos
     const isScrolled = window.scrollY > 50;
     setScrolled(isScrolled);

     // Calcular offset para parallax
     setParallaxOffset(window.scrollY * 0.5);
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
   <>
     <div className="relative overflow-hidden min-h-screen">
       {/* Efecto de partículas de fondo */}
       <div className="hidden lg:block absolute inset-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(191,184,0,0.3),rgba(218,209,0,0.2),rgba(246,234,0,0.1))]" />
         {[...Array(20)].map((_, i) => (
           <div
             key={i}
             className="absolute rounded-full bg-yellow-200 opacity-20"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               width: `${Math.random() * 20 + 10}px`,
               height: `${Math.random() * 20 + 10}px`,
               transform: `translateY(${parallaxOffset * (Math.random() + 0.5)}px)`,
               transition: 'transform 0.3s ease-out'
             }}
           />
         ))}
       </div>

       {/* Fondo con gradiente */}
       <div className="absolute inset-0 bg-gradient-to-br from-[#bfb800] via-[#f6ea00] to-[#ffff7d] opacity-90" />
       
       {/* Contenido principal */}
       <div 
         className={`relative z-20 max-w-7xl mx-auto px-4 pt-24 pb-32 transition-all duration-700 ${
           scrolled ? 'opacity-80 transform -translate-y-4' : ''
         }`}
       >
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Columna de texto */}
           <div className="text-center lg:text-left">
             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-transform duration-700 ${
               scrolled ? 'transform -translate-x-4' : ''
             }`}>
               Compra en Amazon desde Chile con tu casilla eShopex
             </h1>
             <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto lg:mx-0">
               Accede a todos los productos que NO tienen despacho a Chile usando tu casilla eShopex como dirección de envío.
             </p>
             <a 
               href="#registro" 
               className="group inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold 
                        hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl
                        border-2 border-transparent hover:border-gray-700"
             >
               <span>Comenzar Gratis</span>
               <svg 
                 className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24"
               >
                 <path 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   strokeWidth={2} 
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </a>
           </div>

           {/* Columna de imagen */}
           <div className="flex justify-center items-center">
             <div className="relative w-full max-w-lg xl:max-w-xl">
               {/* Círculo negro detrás de la imagen */}
               <div className="absolute inset-0 bg-black rounded-full transform scale-90" />
               {/* Efecto de brillo */}
               <div 
                 className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-400 opacity-30 blur-3xl rounded-full"
                 style={{
                   transform: `rotate(-6deg)`,
                   transition: 'transform 0.3s ease-out'
                 }}
               />
               {/* Contenedor circular para la imagen */}
               <div className="relative z-10 rounded-full overflow-hidden aspect-square bg-black">
                 <img 
                   src="/images/ShoppingImg.png" 
                   alt="Shopping Experience" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* División moderna */}
       <div className="absolute bottom-0 left-0 right-0 z-10">
         <div className="relative h-40">
           {/* Capa de ondas con animación */}
           <div className="absolute bottom-0 w-full overflow-hidden">
             <svg 
               viewBox="0 0 1200 120" 
               preserveAspectRatio="none"
               className="w-full h-40"
               style={{
                 transform: `translateY(${parallaxOffset * 0.15}px)`,
                 transition: 'transform 0.3s ease-out'
               }}
             >
               <path 
                 d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                 className="fill-white opacity-20"
               />
               <path 
                 d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                 className="fill-white opacity-50 translate-y-2"
               />
               <path 
                 d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                 className="fill-white translate-y-4"
               />
             </svg>
           </div>
         </div>
       </div>
     </div>

     {/* Cajas informativas con efectos */}
     <div className="bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 py-20">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
           ¿Por qué elegir eShopex?
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Caja 1 */}
           <div className="group relative p-8 rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#bfb800] via-[#dad100] to-[#f6ea00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#ffff7d] group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
                 <svg 
                   className="w-8 h-8 text-[#bfb800] group-hover:text-[#dad100]" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                 Registro Gratuito
               </h3>
               <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                 Sin costo de apertura ni mantención de tu casilla en Miami. ¡Comienza a comprar hoy mismo!
               </p>
             </div>
           </div>

           {/* Caja 2 */}
           <div className="group relative p-8 rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-bl from-[#dad100] via-[#f6ea00] to-[#ffff7d] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#f6ea00] group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
                 <svg 
                   className="w-8 h-8 text-[#dad100] group-hover:text-[#f6ea00]" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                 Envíos Seguros
               </h3>
               <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                 Seguimiento en tiempo real de tus paquetes desde Miami hasta Chile con actualizaciones constantes.
               </p>
             </div>
           </div>

           {/* Caja 3 */}
           <div className="group relative p-8 rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#f6ea00] via-[#ffff7d] to-[#dad100] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-14 h-14 mb-6 rounded-full bg-[#dad100] group-hover:bg-white transition-colors duration-300 flex items-center justify-center">
                 <svg 
                   className="w-8 h-8 text-[#f6ea00] group-hover:text-[#bfb800]" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                 </svg>
               </div>
               <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors">
                 Soporte 24/7
               </h3>
               <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                 Asistencia personalizada en español durante todo el proceso. Estamos aquí para ayudarte.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </>
 );
};

export default HeroSection;