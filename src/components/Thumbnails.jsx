import React from "react"

const Thumbnails = ({ image, name, nickname, bounty }) => {
    return ( 
        <div className="thumb">
            <img src={image} alt="" className="thumb__img" />
            <div className="thumb__overlay"></div>
            <h2 className="thumb__name">{name}</h2>
            <h3 className="thumb__nickname">{nickname}</h3>
            <h4 className="thumb__bounty">{bounty}</h4>
        </div>
    )
}

export default Thumbnails