import si from 'systeminformation';

export const get_network_interface = async () => {
    return await si.networkInterfaces();
}
export const get_network_interface_default = async () => {
    return await si.networkInterfaceDefault();
}
export const get_network_gateway_default = async () => {
    return await si.networkGatewayDefault();
}
export const get_network_stats = async () => {
    return await si.networkStats();
}
export const get_network_latency = async () => {
    return await si.inetLatency();
}