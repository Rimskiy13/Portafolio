import gmail from './../Images/gmail.png'
import linkedin from './../Images/linkedin.png'
import WhatsApp from './../Images/whatsapp.png'

function Contact() {
    return (
      <div className="about py-5 lg:p-32 pb-0 text-center">
        <div className="text-gray-900 text-5xl font-bold">Contáctame</div>
        <div className="flex justify-center items-center p-10 w-max">
          <div className="ring-1  rounded-3xl p-10 flex gap-10 bg-gray-100 ring-stone-500">
            <div className="flex justify-center items-center">
                <a target='_blank' href='https://www.linkedin.com/in/roman-chavez-677887291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <img src={linkedin} className="h-5 lg:h-10" /> </a>
              <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold px-2">Román Chávez</div>
            </div>
            <div className="flex justify-center items-center">
                <a target='_blank' href='mailto:romanch422@gmail.com'> <img src={gmail} className="h-5 lg:h-10" /> </a>
              <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold px-2">romanch422@gmail.com</div>
            </div>
            <div className="flex justify-center items-center">
                <a target='_blank' href='https://wa.me/524433456956'> <img src={WhatsApp} className="h-5 lg:h-10" /> </a>
              <div className="hover:text-red-700 transition text-xl lg:text-3xl text-semi-bold px-2">+52 443 345 6956</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Contact;