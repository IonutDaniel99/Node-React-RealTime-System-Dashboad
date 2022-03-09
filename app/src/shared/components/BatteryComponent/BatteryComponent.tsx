import React, { useEffect } from 'react'
import { BatteryData } from './types'

interface BatteryProps {
  batteryData?: BatteryData
}

const BatteryComponent = ({ batteryData }: BatteryProps) => {
  console.log("BatteryComponent", Date.now(),  batteryData);
  return (
    <div>BatteryComponents</div>
  )
}

export default BatteryComponent