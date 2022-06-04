import React from 'react'
import './Rating_Component.css'
import profileimg from "../../assets/profile-img.png";


export const Rating_Component = () => {
    return (
        <div className='cont'>
            <a href="/">
                <img
                    src={profileimg}
                    alt=""
                    className="img-fluid img-fluid1" /></a>
                    <span className="title">
                        To infinity
                    </span>
                    <p className="rating">
                        *****
                    </p>
          </div>
    )
}
