import React from 'react'
import Devices from './Devices'

const CardRoom = (props) => {
    return (
        <>
        <div className="card card-home">
        <div className="card-home-body">
          <div className="card-home-body-description">
            <h5 className="card-home-title">{props.name}</h5>
          </div>
        </div>
          {props.type === "room" ? (
            <img src="/living-room.png" className="card-home-img-top" alt="Icon Home" />
          ) : (
            <img
              src="/kitchen.png"
              className="card-home-img-top loft"
              alt="Icon Loft"
            />
          )}
      </div>
      </>
    )
}

export default CardRoom
