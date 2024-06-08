import React from 'react'
import '../Css/Routingdiv.css'

export default function Routingdiv() {
  return (
    <div className='container'>
        <div className="card-div">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        <div className="graph-div">
            <div className="graph">
                <div className="sec1">heading1</div>
                <div className="sec2">--image--</div>
            </div>
            <div className="graph">
            <div className="sec1">heading2</div>
            <div className="sec2">--image--</div>
            </div>
        </div>
    </div>
  )
}