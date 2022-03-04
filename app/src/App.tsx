import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function App() {
  const [staticData, setStaticData] = useState();
  const [dynamicData, setDynamicData] = useState();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("static_system_info", data => {
      setStaticData(data);
    });
    socket.on('dynamic_system_info', data => {
      setDynamicData(data);
    })
  }, []);

  useEffect(() => {
    console.log(dynamicData);
  }, [dynamicData])


  return (
    <>
      <pre>
        {JSON.stringify(dynamicData, null, 2)}
      </pre>
    </>
  );
}

export default App;
