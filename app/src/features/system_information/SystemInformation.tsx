import { useEffect, useState } from "react";

import socketIOClient from "socket.io-client";
import BatteryComponent from "../../shared/components/BatteryComponent/BatteryComponent";
import { BatteryData } from "../../shared/components/BatteryComponent/types";
import DiskComponent from "../../shared/components/DiskComponent/DiskComponent";
import { DiskDataObj } from "../../shared/components/DiskComponent/types";

const ENDPOINT = "http://localhost:5000";

const socket = socketIOClient(ENDPOINT);

const SystemInformation = () => {
  const [batteryData, setBatteryData] = useState<BatteryData>();
  const [diskData, setDiskData] = useState<DiskDataObj>();

  useEffect(() => {
    socket.on("send_static_data", (data) => {console.log(data);});
    socket.on('callback_server_battery', (data : BatteryData) => {setBatteryData(data)}); // Request for disk battery
    socket.on('callback_server_disk', (data : DiskDataObj) => {setDiskData(data)}); // Request for disk data
    return () => {
      socket.off('sent_static_data');
      socket.off('request_server_battery');
      socket.off('request_server_disk');
    }
  }, []);


  useEffect(()=>{
    socket.emit('request_server_battery'); // Call for Battery data
    socket.emit('request_server_disk'); // Call for Disk data

    const battery_interval = setInterval(() => {
      socket.emit('request_server_battery'); // Call for Battery data
    }, 30000);
    const server_interval = setInterval(() => {
      socket.emit('request_server_disk'); // Call for Disk data
    }, 600000);

    return () => {
      clearInterval(battery_interval);
      clearInterval(server_interval);
    }
  },[])


  return (
    <>
    <div>
      {batteryData && <BatteryComponent batteryData={batteryData} /> }
      {diskData && <DiskComponent diskData={diskData} /> }
    </div>
    </>
  )
}

export default SystemInformation