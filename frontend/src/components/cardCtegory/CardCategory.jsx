import React from 'react'
import img from "../../images/test.jpg"
import "./CardCategory.css";    

const CardCategory = () => {
    return (
        <div className='container-card-category'>
            
                <img src={img} alt="" className="card-category-img" />
            
            <div>
                <h3 className='card-category-title'>Main Plates</h3>
            </div>
        </div>
    )
}

export default CardCategory