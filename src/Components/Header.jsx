import linkedin from './../Images/linkedin.png';
import AcercaDeMi from './../Images/Perfil2.png';
import Mail from './../Images/gmail.png';
import WhatsApp from './../Images/whatsapp.png';
import pdf from './../Images/Roman Chavez Guillen.pdf'

function Header() {

  function descargarCV() {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'Roman Chavez Guillen - CV.pdf';
    link.click();
  }

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 lg:p-32">
      {/* Imagen de perfil */}
      <div className="flex justify-center items-center px-10">
        <img src={AcercaDeMi} className="shadow-xl rounded-full " alt="Acerca de Mí" />
      </div>

      {/* Información y botones */}
      <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left py-10 lg:py-0">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">Yo soy</div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Román Chávez</div>
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700">Desarrollador Web</div>

        {/* Botones de acción */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          <button 
            onClick={descargarCV} 
            className="ring-1 ring-stone-500 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            Descargar CV
          </button>
          <button 
            className="bg-gray-800 text-white px-4 py-2 rounded-full transition"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Información de Contacto
          </button>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex justify-center lg:justify-start gap-5 mt-4">
          <a target='_blank' href='https://www.linkedin.com/in/roman-chavez-677887291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <img src={linkedin} className="h-8 sm:h-10" alt="LinkedIn" />
          </a>
          <a target='_blank' href='mailto:romanch422@gmail.com'>
            <img src={Mail} className="h-8 sm:h-10" alt="Email" />
          </a>
          <a target='_blank' href='https://wa.me/524433456956'>
            <img src={WhatsApp} className="h-8 sm:h-10" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
