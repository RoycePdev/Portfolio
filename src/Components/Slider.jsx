import '../stylesheets/slider.css'
import "../stylesheets/variables.css"
import React, { useState, useEffect } from 'react'

export const Slider = () => {
 
const [read, setValue] = useState(273)

 useEffect(() =>  {
     document.documentElement.style.setProperty('--hue', `${read}`)
 }, [read])

 function changeSlider (e) {
     setValue(e.target.value)
 }

    return (
        <div>
            <input className="slider" value={read} onChange={changeSlider} type="range" min="0" max="360"></input>
        </div>
    )
}
