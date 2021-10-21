import '../stylesheets/logsub.css'
import { BiDevices } from 'react-icons/bi'
import { GoBrowser } from 'react-icons/go'
import { FaGithub } from 'react-icons/fa'
import { CgPerformance } from 'react-icons/cg'
import { AiTwotoneApi } from 'react-icons/ai'
import '../stylesheets/services.css'

export const LogSub = (props) => {
  return (
    <div className='log-sub-full-container' style={{ background: props.lt }}>
      <div className='log-sub-items-container'>
        <div className='log-sub-header-container'>
          <h3 className='log-sub-main-header section-title'>
            Front-End Engineering
          </h3>
          <p className='log-sub-header-paragraph'>
            Advanced knowledge of front end technologies to build and enhance
            scalable web applications and an understanding of the software
            engineering lifecycle. Able to contribute to planning,
            implementation, testing, operations and improvement.{' '}
          </p>
        </div>
        {/* <h3 className="log-sub-h3">log sub h3</h3>
        <p className="log-sub-h3-paragraph">log sub paragraph</p> */}
        <div className='log-sub-diamonds-container'>
          <div
            className='diamond log-sub-response'
            style={{ background: props.bg, color: props.fc }}
          >
            <div
              className='log-sub-icon-triangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-rectangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-circle'
              style={{ background: props.cBk }}
            >
              <BiDevices className='log-sub-icon' style={{ color: props.bg }} />
            </div>
            <h4 className='log-sub-header response-header'>Response</h4>
            <p className='log-sub-paragraph'>
              Responsive websites that adapt to modern devices
            </p>
          </div>
          <div
            className='diamond log-sub-compatibility'
            style={{ background: props.bg, color: props.fc }}
          >
            <div
              className='log-sub-icon-triangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-rectangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-circle'
              style={{ background: props.cBk }}
            >
              <GoBrowser className='log-sub-icon' style={{ color: props.bg }} />
            </div>
            <h4 className='log-sub-header compatibility-header'>
              Compatibility
            </h4>
            <p className='log-sub-paragraph'>
              Understanding of cross-browser and device compatibility
            </p>
          </div>
          <div
            className='diamond log-sub-api'
            style={{ background: props.bg, color: props.fc }}
          >
            <div
              className='log-sub-icon-triangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-rectangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-circle'
              style={{ background: props.cBk }}
            >
              <AiTwotoneApi
                className='log-sub-icon'
                style={{ color: props.bg }}
              />
            </div>
            <h4 className='log-sub-header api-header'>API</h4>
            <p className='log-sub-paragraph'>
              Experience in REST API design and implementation
            </p>
          </div>
          <div
            className='diamond log-sub-performance'
            style={{ background: props.bg, color: props.fc }}
          >
            <div
              className='log-sub-icon-triangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-rectangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-circle'
              style={{ background: props.cBk }}
            >
              <CgPerformance
                className='log-sub-icon'
                style={{ color: props.bg }}
              />
            </div>
            <h4 className='log-sub-header performance-header'>Performance</h4>
            <p className='log-sub-paragraph'>
              {' '}
              Optimization of applications for maximum speed and scalability
            </p>
          </div>
          <div
            className='diamond log-sub-collaborate'
            style={{ background: props.bg, color: props.fc }}
          >
            <div
              className='log-sub-icon-triangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-rectangle'
              style={{ background: props.cBk }}
            ></div>
            <div
              className='log-sub-icon-circle'
              style={{ background: props.cBk }}
            >
              <FaGithub className='log-sub-icon' style={{ color: props.bg }} />
            </div>
            <h4 className='log-sub-header collaborate-header'>Collaborate</h4>
            <p className='log-sub-paragraph'>
              Collaboration with teams using GIT and GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
