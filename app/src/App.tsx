import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

function App() {

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("static_system_info", data => {
      console.log(data);
    });
  });



  return (
    <>
      <div className="books">

      </div>
    </>
  );
}

export default App;
