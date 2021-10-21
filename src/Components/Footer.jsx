import '../stylesheets/footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export const Footer = (props) => {
  return (
    <div className='footer-main-container' style={{ background: props.bg }}>
      <div className='footer-sub-container'>
        <div className='footer-icon-container'>
          <a href='https://twitter.com/bschaferwebdev' target='_blank'>
            <FaTwitter className='footer-icon footer-tweet' />
          </a>
          <a href='https://github.com/roycepdev' target='blank'>
            <FaGithub className='footer-icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/brian-schafer-b90353221/'
            target='blank'
          >
            <FaLinkedin className='footer-icon footer-in' />
          </a>
        </div>
      </div>
    </div>
  )
}
