import '../stylesheets/contact.css'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_zsgISciK5A6fJqLXvCWiK')

export const Contact = (props) => {
  const [showSent, setShowSent] = useState(false)

  function displayM() {
    setShowSent(true)
    setTimeout(() => setShowSent(false), 5000)
  }

  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_1h7zz9b',
        'template_jepjpmd',
        e.target,
        'user_zsgISciK5A6fJqLXvCWiK'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className='wave-container' style={{ background: props.dbg }}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill={props.cBk}
            fillOpacity='1'
            d='M0,224L26.7,213.3C53.3,203,107,181,160,154.7C213.3,128,267,96,320,101.3C373.3,107,427,149,480,186.7C533.3,224,587,256,640,261.3C693.3,267,747,245,800,229.3C853.3,213,907,203,960,213.3C1013.3,224,1067,256,1120,245.3C1173.3,235,1227,181,1280,154.7C1333.3,128,1387,128,1413,128L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='contact-main-container' style={{ background: props.cBk }}>
        <div id='contact'></div>
        <div className='contact-items-container'>
          <h3 className='contact-section-title section-title'>Contact</h3>
          <div className='form-container'>
            <form className='form-container' onSubmit={sendEmail}>
              <label className='contact-label label' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='form-name form'
                name='name'
                style={{ background: props.lbg, color: props.fc }}
              />
              <label className='contact-label label' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='form-email form'
                name='email'
                style={{ background: props.lbg, color: props.fc }}
              />
              <label className='contact-label label' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                className='form-message form'
                name='message'
                style={{ background: props.lbg, color: props.fc }}
              />
              <input
                type='submit'
                className='form-submit'
                onClick={displayM}
                value='Send'
              />
            </form>
            <div
              className={`thank-you-container ${
                showSent && 'message-display-none'
              }`}
            >
              <p className='contact-sent'>
                Thanks for getting in touch. I will reply to your message as
                soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
