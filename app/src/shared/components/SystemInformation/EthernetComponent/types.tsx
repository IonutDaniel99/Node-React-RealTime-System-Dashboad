export type EthernetDataInterface = {
    inetLatency: number,
    networkInterfaceDefault: string,
    networkGatewayDefault: string,
    networkInterfaces: NetworkInterface,
    networkStats: NetworkStats
};

type NetworkInterface = {
    iface: string,
    ifaceName: string,
    default: true,
    ip4: string,
    ip4subnet: string,
    ip6: string,
    ip6subnet: string,
    mac: string,
    internal: false,
    virtual: false,
    operstate: string,
    type: string,
    duplex: string,
    mtu: string,
    speed: number,
    dhcp: true,
    dnsSuffix: string,
    ieee8021xAuth: string,
    ieee8021xState: string,
    carrierChanges: number
}

type NetworkStats = {
    iface: string,
    operstate: string,
    rx_bytes: number,
    rx_dropped: number,
    rx_errors: number,
    tx_bytes: number,
    tx_dropped: number,
    tx_errors: number,
    rx_sec: null | any,
    tx_sec: null | any,
    ms: number
}