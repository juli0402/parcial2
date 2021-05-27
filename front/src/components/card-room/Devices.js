import React from 'react'
import { FormattedMessage } from 'react-intl'

const Devices = (props) => {
    return (
        <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">
                        <FormattedMessage id="device" />
                    </th>
                    <th scope="col">
                        <FormattedMessage id="value" />
                    </th>
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
