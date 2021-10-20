import '../stylesheets/frontsub.css'
import { FaSass } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

export const FrontSub = (props) => {
  console.log(props.fs)
  return (
    <div>
      {/* <svg
        className='front-sub-top-wave'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='var(--night-dark-primary)'
          fill-opacity='1'
          d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg> */}
      <div
        className='front-sub-full-container'
        style={{ background: props.cBk }}
      >
        <div
          className='front-sub-child-container'
          style={{ background: props.bg }}
        >
          <div
            className='front-sub-child-circle'
            style={{ background: props.fs }}
          >
            <FaReact className='front-sub-icon' />
          </div>
          <h4 className='front-sub-child-headline' style={{ color: props.fc }}>
            Frameworks
          </h4>
          <p className='front-sub-child-paragraph' style={{ color: props.fc }}>
            {' '}
            Client-side scripting and the React library for Javascript{' '}
          </p>
        </div>
        <div
          className='front-sub-child-container'
          style={{ background: props.bg }}
        >
          <div
            className='front-sub-child-circle'
            style={{ background: props.fs }}
          >
            <SiTypescript className='front-sub-icon' />
          </div>
          <h4 className='front-sub-child-headline' style={{ color: props.fc }}>
            ECMA Scripting
          </h4>
          <p className='front-sub-child-paragraph' style={{ color: props.fc }}>
            Understanding of Typescript and the latest ECMA script
            standards{' '}
          </p>
        </div>
        <div
          className='front-sub-child-container'
          style={{ background: props.bg }}
        >
          <div
            className='front-sub-child-circle'
            style={{ background: props.fs }}
          >
            <FaSass className='front-sub-icon' />
          </div>
          <h4 className='front-sub-child-headline' style={{ color: props.fc }}>
            CSS pre-processing
          </h4>
          <p className='front-sub-child-paragraph' style={{ color: props.fc }}>
            Proficient in pre-processing platforms Such as Sass and Less
          </p>
        </div>
        <div id="project"></div>
      </div>
      {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='var(--night-dark-primary'
          fill-opacity='1'
          d='M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,112C672,139,768,213,864,234.7C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg> */}
    </div>
  )
}
