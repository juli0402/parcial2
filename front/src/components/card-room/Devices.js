import React from 'react'

const Devices = (props) => {
    return (
        <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Device</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
            {props.devices && props.devices.map((device,i)=> {
                return( 
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.desired.value}</td>
                    </tr>
            )
        })}
            </tbody>
        </table>
        </div>
    )
}

export default Devices
