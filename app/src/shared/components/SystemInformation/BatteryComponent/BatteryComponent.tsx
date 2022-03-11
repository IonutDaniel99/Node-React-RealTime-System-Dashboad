import React, { useEffect } from 'react'
import { BatteryDataInterface } from './types'

interface BatteryProps {
  batteryData?: BatteryDataInterface
}

const BatteryComponent = ({ batteryData }: BatteryProps) => {
  useEffect(() => {
    console.log("BatteryComponent", Date.now(), batteryData);
  }, [batteryData])
  return (
    <div>BatteryComponents</div>
  )
}

export default BatteryComponent