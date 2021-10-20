import "../stylesheets/services.css"
import {ReactComponent as Html} from "../images/html.svg"
import {ReactComponent as Css} from "../images/css.svg"
import {ReactComponent as Javascript} from "../images/javascript.svg"
import {ReactComponent as Redux} from "../images/redux.svg"
import {ReactComponent as Node} from "../images/node.svg"
import {ReactComponent as Express} from "../images/express.svg"
import {ReactComponent as Skills} from "../images/skills.svg"
import {ReactComponent as Sass} from "../images/sass.svg"
import {ReactComponent as Typescript} from "../images/typescript.svg"
import Reactp from "../images/react.png"


export const Services = (props) => {

    return (
        <div className="services-main-container" style={{background: props.bg}} >
            <div id="services"></div>
            <div className="service-info-container">
                <h3 className="section-title service-section-header">Services</h3>
                <ul className="employment-container">
                    <li className="service-listed" style={{color: props.fc}}>🖥️ Full Time Employment</li>
                    <li className="service-listed" style={{color: props.fc}}>💻 Contract Work</li>
                </ul>
            </div>
            <div className="services-items-container">
                        <Html className="service-svg html-f"/>
                        <Css className="service-svg css-i" />
                        <Sass className="service-svg" />
                        <Javascript className="service-svg js" />
                        <img className="service-svg" src={Reactp} />
                        <Redux className="service-svg js" />
                        <Node className="service-svg js" />
                        <Express className="service-svg js" style={{ background:"white"}} />
                        <Typescript className="service-svg js" />
            </div>
        </div>
    )
}
