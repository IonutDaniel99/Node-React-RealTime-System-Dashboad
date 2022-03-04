import si from 'systeminformation';

export const get_wifi_networks = async () => {
    return await si.wifiNetworks();
}
export const get_wifi_interfaces = async () => {
    return await si.wifiInterfaces();
}
export const get_wifi_connections = async () => {
    return await si.wifiConnections();
}