import gmail from './../Images/ggmail.png';
import linkedin from './../Images/linkedin.png';
import WhatsApp from './../Images/whatsapp.png';

function Contact() {
  return (
    <div className="about py-5 lg:p-32 pb-0 text-center">
      <div className="text-gray-900 text-4xl sm:text-5xl font-bold">Contáctame</div>
      <div className="flex justify-center items-center p-5 sm:p-10 w-full sm:w-auto">
        <div className="ring-1 rounded-3xl p-5 sm:p-10 flex flex-col sm:flex-row gap-5 sm:gap-10 bg-gray-100 ring-stone-500 w-max">
          
          {/* LinkedIn */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center">
            <a target='_blank' href='https://www.linkedin.com/in/roman-chavez-677887291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <img src={linkedin} className="h-8 sm:h-10" alt="LinkedIn" />
            </a>
            <div className="hover:text-red-700 transition text-lg sm:text-xl lg:text-3xl font-semibold px-2">Román Chávez</div>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center">
            <a target='_blank' href='mailto:romanch422@gmail.com'>
              <img src={gmail} className="h-8 sm:h-10" alt="Gmail" />
            </a>
            <div className="hover:text-red-700 transition text-lg sm:text-xl lg:text-3xl font-semibold px-2">romanch422@gmail.com</div>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center">
            <a target='_blank' href='https://wa.me/524433456956'>
              <img src={WhatsApp} className="h-8 sm:h-10" alt="WhatsApp" />
            </a>
            <div className="hover:text-red-700 transition text-lg sm:text-xl lg:text-3xl font-semibold px-2">+52 443 345 6956</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
