import React, { useState } from 'react'

export const useDevice = (initial=0) => {
    const [deviceIndex, setDeviceIndex] = useState(initial)
    const setNewIndex=(value)=>{
        setDeviceIndex(value)
    }
    return {
        deviceIndex,
        setNewIndex
    }
}
