import { useEffect, useState } from "react";
import static_data from '../../mock/static_data.json';
import dynamic_data from '../../mock/dynamic_data.json';

import socketIOClient from "socket.io-client";
import BatteryComponent from "../../shared/components/BatteryComponent";
import { Battery_data } from "./types";
const ENDPOINT = "http://localhost:5000";

const socket = socketIOClient(ENDPOINT);

const SystemInformation = () => {
  const [count, setCount] = useState(1);
  const [batteryData, setBatteryData] = useState<Battery_data>();

  useEffect(() => {
    socket.on("send_static_data", (data) => {console.log(data);});
    socket.on('callback_server_battery', (data : Battery_data) => {setBatteryData(data);})
    return () => {
      socket.off('sent_static_data');
      socket.off('callback_server_battery')
    }
  }, []);

  useEffect(()=>{
    setInterval(() => {
      socket.emit('request_server_battery'); // Call for Battery data
    }, 30000);
  },[])

  return (
    <>
    <div>
      {batteryData && <BatteryComponent batteryData={batteryData} /> }
    </div>
    <button onClick={() => setCount(count + 1) }>Cocostarc</button>
    </>
  )
}

export default SystemInformation