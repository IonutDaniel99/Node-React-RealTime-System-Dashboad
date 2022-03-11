export type WifiDataInterface = {
    id: string,
    iface: string,
    model: string,
    ssid: string,
    bssid: string,
    channel: number,
    frequency: number,
    type: string,
    security: string,
    signalLevel: string,
    txRate: number
  };
  
  export type WifiDataObjInterface = WifiDataInterface[];