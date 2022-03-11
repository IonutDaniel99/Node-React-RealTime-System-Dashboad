import React, { useEffect } from 'react'
import { WifiDataObjInterface } from './types'

interface WifiProps {
    wifiData?: WifiDataObjInterface
}

const WifiComponent = ({ wifiData }: WifiProps) => {
    useEffect(() => {
        console.log("wifiData", Date.now(), wifiData);
    }, [wifiData])
    return (
        <div>WifiComponent</div>
    )
}

export default WifiComponent