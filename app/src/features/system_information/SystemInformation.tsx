import React from 'react';
import { useEffect, useState } from "react";
import static_data from '../../mock/static_data.json';
import dynamic_data from '../../mock/dynamic_data.json';

// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://localhost:5000";

const SystemInformation = () => {

    const [staticData] = useState(static_data);
    const [dynamicData] = useState(dynamic_data);
  
    // useEffect(() => {
    //   const socket = socketIOClient(ENDPOINT);
    //   socket.on("static_system_info", data => {
    //     setStaticData(data);
    //   });
    //   socket.on('dynamic_system_info', data => {
    //     setDynamicData(data);
    //   })
    // }, []);
  
    useEffect(() => {
      console.log("static", staticData);
      console.log("dynamic", dynamicData);
    }, [])

  return (
    <div>systemInformation</div>
  )
}

export default SystemInformation