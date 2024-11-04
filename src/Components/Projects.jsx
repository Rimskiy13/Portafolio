import React, { useState, useEffect } from 'react';
import sepci from './../Images/sepci.png';
import ccent1 from './../Images/ccent.png';
import ccent2 from './../Images/ccent2.png';
import ccent3 from './../Images/ccent3.png';
import ccent4 from './../Images/ccent4.png';
import lily1 from './../Images/lily1.png';
import lily2 from './../Images/lily2.png';
import lily3 from './../Images/lily3.png';
import lily4 from './../Images/lily4.png';

function Projects() {
  const [activeProject, setActiveProject] = useState('sepci');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = [ccent2, ccent1, ccent3, ccent4];
  const imagesLily = [lily3, lily2, lily1, lily4];

  const linkToSEPCI = () => {
    const link = document.createElement('a');
    link.href = 'https://sgi.morelia.tecnm.mx/SEPCI/index.php';
    link.target = "_blank";
    link.click();
  };

  const changeImage = (newIndex) => {
    setIsFading(true); // Inicia la transición
    setTimeout(() => {
      setCarouselIndex(newIndex);
      setIsFading(false); // Termina la transición
    }, 500); // Duración de la animación (ajusta según prefieras)
  };

  const nextImage = () => {
    changeImage((carouselIndex + 1) % images.length);
  };

  const prevImage = () => {
    changeImage((carouselIndex - 1 + images.length) % images.length);
  };

  const nextImageLily = () => {
    changeImage((carouselIndex + 1) % imagesLily.length);
  };

  const prevImageLily = () => {
    changeImage((carouselIndex - 1 + imagesLily.length) % imagesLily.length);
  };

  return (
    <div className="p-10 lg:p-20 px-5 lg:px-32 text-center">
      <div className="text-gray-900 text-3xl lg:text-5xl font-bold mb-10">Proyectos</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Opciones a la izquierda */}
        <div className="flex flex-col space-y-5">
          <button
            onClick={() => setActiveProject('sepci')}
            className={`p-5 text-xs lg:text-lg font-bold rounded-lg transition-all duration-700 ${activeProject === 'sepci' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
          >
            Buzón de Denuncias
          </button>
          <button
            onClick={() => setActiveProject('ccent')}
            className={`p-5 text-xs lg:text-lg font-bold rounded-lg transition-all duration-700 ${activeProject === 'ccent' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
          >
            Portal Web CCENT
          </button>
          <button
            onClick={() => setActiveProject('lily')}
            className={`p-5 text-xs lg:text-lg font-bold rounded-lg transition-all duration-700 ${activeProject === 'lily' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
          >
            Aplicación Web Agendas Clínica de Belleza Lily
          </button>
        </div>

        {/* Contenido a la derecha */}
        <div className="col-span-2 ring-1 ring-stone-500 rounded-3xl p-5 lg:p-8 flex flex-col gap-4 h-max">
          {activeProject === 'sepci' && (
            <>
              <img src={sepci} className="rounded-3xl w-full h-48 object-cover" alt="SEPCI" />
              <div className="text-gray-900 text-lg lg:text-2xl font-bold">Buzón de Denuncias del Instituto Tecnológico de Morelia</div>
              <div className="text-base font-semibold text-gray-600 text-justify">
                Participé en el desarrollo de la página web para la gestión del buzón de denuncias para el Subcomité de Ética y Prevención de Conflictos de Interés del Instituto Tecnológico de Morelia...
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">HTML</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">CSS</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">PHP</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">MySQL</span>
              </div>
              <div className="flex gap-2">
                <button onClick={linkToSEPCI} className="ring-1 ring-stone-500 rounded-full p-3 lg:p-4 text-md lg:text-xl hover:text-white hover:bg-gray-800 transition">
                  Mira el proyecto
                </button>
              </div>
            </>
          )}

          {activeProject === 'ccent' && (
            <>
              {/* Carrusel de imágenes con transición */}
              <div className="relative w-full h-70 overflow-hidden rounded-3xl">
                <img
                  src={images[carouselIndex]}
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
                  alt={`CCENT Imagen ${carouselIndex + 1}`}
                />

                {/* Controles de navegación */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                >
                  ❮
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                >
                  ❯
                </button>
              </div>

              <div className="text-gray-900 text-lg lg:text-2xl font-bold mt-5">Portal Web Para el Centro de Capacitación en Electrónica Nikola Tesla</div>
              <div className="text-base font-semibold text-gray-600 text-justify">
                Participé en el desarrollo del portal web del Centro de Capacitación en Electrónica Nikola Tesla, diseñado para centralizar toda la información relevante para los interesados en el proceso de inscripción.
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">HTML</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">CSS</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">PHP</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">MySQL</span>
              </div>
            </>
          )}

          {activeProject === 'lily' && (
            <>
              {/* Carrusel de imágenes con transición */}
              <div className="relative w-full h-70 overflow-hidden rounded-3xl">
                <img
                  src={imagesLily[carouselIndex]}
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
                  alt={`CCENT Imagen ${carouselIndex + 1}`}
                />

                {/* Controles de navegación */}
                <button
                  onClick={prevImageLily}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                >
                  ❮
                </button>
                <button
                  onClick={nextImageLily}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
                >
                  ❯
                </button>
              </div>

              <div className="text-gray-900 text-lg lg:text-2xl font-bold mt-5">Aplicación Web Clínica de Belleza Lily</div>
              <div className="text-base font-semibold text-gray-600 text-justify">
              Forme parte del desarrollo de una aplicación Web para dar publicidad y administrar agendas de una clínica de belleza para todos los servicios que ofrece, administrar las secciones de la pagina de publicidad y para gestionar el personal que ofrece los servicios.  
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">Ant Design</span>
                <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">CSS</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;



