import React, { useEffect, useState } from 'react'
import CardRoom from '../../components/card-room/CardRoom'
import { getHomeById } from '../../services/utils';
import { useParams } from "react-router";
import Devices from '../../components/card-room/Devices';
import { useDevice } from '../../hooks/useDevice';
import { FormattedMessage } from 'react-intl';
import PieChart from '../../components/pie-chart/PieChart';

const Rooms = () => {
    let { id } = useParams();
    const [rooms, setRooms] = useState([]);
    const {deviceIndex, setNewIndex} = useDevice();
    useEffect(() => {
      getHomeById(id).then((data) => {
        setRooms(data.rooms);
      });
    }, []);
  
    return (
        <div className = "container">
          <div className = "row">
            <div className = "col-12">
            <h1>
              <FormattedMessage id="myRooms" />
            </h1>
            </div>
            <div className = "col-6">
            {rooms && rooms.map((room, idx)=> {
            return(
              <CardRoom {...room} idx = {idx} setNewIndex = {setNewIndex} />
            )
          })}
            </div>
            <div className = "col-6">
            <Devices {...rooms[deviceIndex]} />
            </div>
            <div className = "col-12" style={{textAlign:"center", marginTop: "20px"}}>
              <PieChart rooms={rooms}/>
            </div>
          </div>
        </div>
    ) 
}

export default Rooms
