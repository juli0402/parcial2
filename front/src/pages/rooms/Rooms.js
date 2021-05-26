import React, { useEffect, useState } from 'react'
import CardRoom from '../../components/card-room/CardRoom'
import { getHomeById } from '../../services/utils';
import { useParams } from "react-router";
import Devices from '../../components/card-room/Devices';

const Rooms = () => {
    let { id } = useParams();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      getHomeById(id).then((data) => {
        setRooms(data.rooms);
      });
    }, []);
  
    return (
        <div>
            <h1>My rooms</h1>
            {rooms && rooms.map((room)=> {
            return(
                <CardRoom {...room}/>
            )
        })}
        <Devices {...rooms[0]} />
        </div>
    )
}

export default Rooms
