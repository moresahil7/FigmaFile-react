import React from 'react'
import './degree.css'
import { Degreecard } from '../../containers/import'

const Degree = () => {
  return (
   <div className="degree_container">
    <div className="degree_heading">
        <p>Courses / Degree</p>
    </div>
    <div className="degree_buttons">
        <button>B.Tech</button>
        <button>M.Tech</button>
        <button>MCA</button>
        <button>BCA</button>
        <button>BA</button>
        <button>MA</button>
        <button>BBA</button>
        <button>Fashion Designing</button>
        <button>B.Sc</button>
        <button>B.Pharm</button>
        <button>M.Pharm</button>
        <button>M.Phil</button>
    </div>
    <div className="degree_heading">
        <p>Virtual Tour</p>
    </div>
    <div className="degree_cards">
        <div>
        <Degreecard/>
        </div>
        <Degreecard/>
        <div>
        card
        </div>
    </div>
   </div>
  )
}

export default Degree