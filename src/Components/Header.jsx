import linkedin from './../Images/linkedin.png'
import AcercaDeMi from './../Images/Perfil2.png'
import Mail from './../Images/gmail.png'
import WhatsApp from './../Images/whatsapp.png'

function Header() {

  function descargarCV(){
    const link = document.createElement('a');
    link.href = './../Images/Román Chávez Guillén - cv.pdf';
    link.download = 'Román Chávez Guillén - CV.pdf';
    link.click();
  }

  return (
    <header className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-5 lg:p-32 flex justify-center items-center">
        <img src={AcercaDeMi} className="shadow-xl rounded-full" />
      </div>
      <div className=" py-32 flex justify-center items-center flex-col gap-5">
        <div className="text-4xl font-bold text-gray-700">Yo soy</div>
        <div className="text-6xl font-bold text-gray-900">Román Chávez</div>
        <div className="text-3xl font-bold text-gray-700">Desarrollador Web</div>
        <div className="flex gap-3">
          <button onClick={descargarCV} className="ring-1 ring-stone-500 p-3 rounded-full px-6 hover:bg-gray-800 hover:text-white transition">Descargar CV</button>
          <div className="bg-gray-800  ring-stone-500 text-white p-3 rounded-full px-6 transition">Información de Contacto</div>
        </div>
        <div className="flex gap-5">
          <a target='_blank' href='https://www.linkedin.com/in/roman-chavez-677887291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <img src={linkedin} className="h-10" /> </a>
          <a target='_blank' href='mailto:romanch422@gmail.com'> <img src={Mail} className="h-10"/> </a>
          <a target='_blank' href='https://wa.me/524433456956'> <img src={WhatsApp} className="h-10"/> </a>
        </div>
      </div>
    </header>
  )
}
export default Header;