import AcercaDeMi from './../Images/Perfil2.png'

function About() {
    return (
      <div className="about px-7 lg:px-7 text-center">
        <div className="text-gray-900 text-5xl font-bold">Acerca de mí</div>
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 lg:gap-10 py-10">
          {/* Imagen con proporciones ajustadas */}
          <img src={AcercaDeMi} className="lg:h-[580px] lg:w-2/5 w-full object-cover rounded-3xl" alt="Acerca de mí" />
          
          {/* Texto con mayor espacio */}
          <div className="lg:w-3/5 py-5 flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
              <div className="ring-1 ring-stone-500 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
                <div className="text-xl font-semibold text-gray-600 text-justify">
                  Me centro en todo lo relacionado con el desarrollo web, principalmente en el área de Frontend. He utilizado React, Tailwind CSS y Material UI en distintos proyectos, siempre enfocándome en ofrecer un código limpio, legible, modular y fácil de mantener.
                  <br /><br />
                  Aunque mi enfoque principal es el Frontend, también he participado en el desarrollo Backend utilizando PHP, por lo que en el futuro me gustaría convertirme en desarrollador Full Stack.
                  <br /><br />
                  Me apasiona la programación y las tecnologías emergentes. Me encanta aprender sobre nuevas tecnologías relacionadas con el desarrollo web, el desarrollo móvil y la inteligencia artificial.
                  <br /><br />
                  En mi tiempo libre, disfruto jugando videojuegos, viendo películas (especialmente de ciencia ficción), caminando en la naturaleza, y practicando carpintería y escultura.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;
