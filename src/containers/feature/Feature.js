import React from 'react'
import { HiDownload } from "react-icons/hi";
import "./feature.css"


const Feature = () => {
  return (
    <div className="feature_card">
        <div className="feature_content">
            <p>Delhi University</p>
            <p>Delhi</p>
            <p>Fee:  60k to 1 Lacs (Yearly)</p>
            <p>Courses: 32 Courses</p>
        </div>

        <div className="feature_buttons">
            <button>Brochure</button>
            <button>Apply</button>
        </div>
        
    </div>
  )
}

export default Feature