import { useEffect, useState } from "react";

import socketIOClient from "socket.io-client";
import BatteryComponent from "../../shared/components/SystemInformation/BatteryComponent/BatteryComponent";
import { BatteryDataInterface } from "../../shared/components/SystemInformation/BatteryComponent/types";

import CurrentLoadComponent from "../../shared/components/SystemInformation/CurrentLoadComponent/CurrentLoadComponent";
import { CurrentLoadDataInterface } from "../../shared/components/SystemInformation/CurrentLoadComponent/types";

import DiskComponent from "../../shared/components/SystemInformation/DiskComponent/DiskComponent";
import { DiskDataObjInterface } from "../../shared/components/SystemInformation/DiskComponent/types";

import MemoryComponent from "../../shared/components/SystemInformation/MemoryComponent/MemoryComponent";
import { MemoryDataInterface } from "../../shared/components/SystemInformation/MemoryComponent/types";

import { WifiDataObjInterface } from "../../shared/components/SystemInformation/WifiComponent/types";
import WifiComponent from "../../shared/components/SystemInformation/WifiComponent/WifiComponent";

const ENDPOINT = "http://localhost:5000";

const socket = socketIOClient(ENDPOINT);

const SystemInformation = () => {
  const [isServerOnline, setIsServerOnline] = useState<boolean>(true);
  const [staticData, setStaticData] = useState<any>();

  const [batteryData, setBatteryData] = useState<BatteryDataInterface>();
  const [diskData, setDiskData] = useState<DiskDataObjInterface>();
  const [currentLoadData, setCurrentLoadData] = useState<CurrentLoadDataInterface>();
  const [memoryData, setMemoryData] = useState<MemoryDataInterface>();
  const [wifiData, setWifiData] = useState<WifiDataObjInterface>();

  useEffect(() => {
    socket.on("connect", () => {
      setIsServerOnline(true);
      console.log("connect");
    });

    socket.on("connect_error", (reason) => {
      setIsServerOnline(false);
      console.log("error", reason);
    });

    socket.on("disconnect", (err) => {
      setIsServerOnline(false);
      console.log("disconnect", err);
    });

    socket.on("send_static_data", (data) => { setStaticData(data); console.log(data) });
    socket.on('callback_server_battery', (data: BatteryDataInterface) => { setBatteryData(data) }); // Request for disk battery
    socket.on('callback_server_disk', (data: DiskDataObjInterface) => { setDiskData(data) }); // Request for disk data
    socket.on('callback_server_current_load', (data: CurrentLoadDataInterface) => { setCurrentLoadData(data) }); // Request for disk data
    socket.on('callback_server_memory', (data: MemoryDataInterface) => { setMemoryData(data) }); // Request for Memory data
    socket.on('callback_server_wifi', (data: WifiDataObjInterface) => { setWifiData(data) }); // Request for Wifi data
    return () => {
      socket.off('sent_static_data');
      socket.off('request_server_battery');
      socket.off('request_server_disk');
      socket.off('request_server_current_load');
      socket.off('request_server_memory');
      socket.off('request_server_wifi');
    }
  }, []);


  useEffect(() => {

    socket.emit('request_server_battery'); // Call for Battery data
    socket.emit('request_server_disk'); // Call for Disk data
    socket.emit('request_server_current_load'); // Call for CPU data
    socket.emit('request_server_memory'); // Call for Memory data
    socket.emit('request_server_wifi'); // Call for Wifi data

    const battery_interval = setInterval(() => {
      socket.emit('request_server_battery'); // Call for Battery data
    }, 30000);
    const server_interval = setInterval(() => {
      socket.emit('request_server_disk'); // Call for Disk data
    }, 600000);
    const current_load_interval = setInterval(() => {
      socket.emit('request_server_current_load'); // Call for Disk data
    }, 10000);
    /**
     * DONT FORGET PROCESSES
     */
    const memory_interval = setInterval(() => {
      socket.emit('request_server_memory'); // Call for Memory data
    }, 20000);
    const wifi_interval = setInterval(() => {
      socket.emit('request_server_wifi'); // Call for wifi data
    }, 30000);


    return () => {
      clearInterval(battery_interval);
      clearInterval(server_interval);
      clearInterval(current_load_interval);
      clearInterval(memory_interval);
      clearInterval(wifi_interval);
    }
  }, [])


  return (
    <>
      {isServerOnline === true ?
        <div>
          Merge
          {/* {batteryData && <BatteryComponent batteryData={batteryData} />}
          {diskData && <DiskComponent diskData={diskData} />}
          {currentLoadData && <CurrentLoadComponent currentLoadData={currentLoadData} />}
          {memoryData && <MemoryComponent memoryData={memoryData} />}
          {wifiData && <WifiComponent wifiData={wifiData} />} */}
        </div> : "test"
      }
    </>
  )
}

export default SystemInformation