import React, { useEffect } from 'react'
import { Battery_data } from '../../features/system_information/types'

interface BatteryProps {
  batteryData?: Battery_data
}

const BatteryComponent = ({ batteryData }: BatteryProps) => {
  console.log("BatteryComponent", batteryData);
  return (
    <div>BatteryComponents</div>
  )
}

export default BatteryComponent