import { get_audio } from './sys_audio';
import { get_bluetooth } from './sys_bluetooth';
import { get_cpu_info } from './sys_cpu';
import { get_gpu_info } from './sys_gpu';
import { get_system } from './sys_hw';
import { get_memory_layout } from './sys_mem';
import { get_network_interface, get_network_gateway_default, get_network_interface_default, get_network_latency, get_network_stats } from './sys_netowrk';
import { get_os_info, get_os_uuid, get_os_versions, get_os_users } from './sys_os';
import { get_printer } from './sys_printer';
import { get_usb } from './sys_usb';
import { get_wifi_interfaces, get_wifi_networks } from './sys_wifi';

export const get_static_data = async () => {
    const [
        system,
        cpu_info,
        memory,
        gpu,
        os_info, os_uuid, os_version, os_users,
        usb,
        printer,
        audio,
        networkInterfaces, networkInterfaceDefault, networkGatewayDefault, networkStats, inetLatency,
        network, inteface,
        bluetooth
    ] = await Promise.all([
        get_system(),
        get_cpu_info(),
        get_memory_layout(),
        get_gpu_info(),
        get_os_info(),
        get_os_uuid(),
        get_os_versions(),
        get_os_users(),
        get_usb(),
        get_printer(),
        get_audio(),
        get_network_interface(),
        get_network_interface_default(),
        get_network_gateway_default(),
        get_network_stats(),
        get_network_latency(),
        get_wifi_networks(),
        get_wifi_interfaces(),
        get_bluetooth()
    ]);
    return {
        system,
        cpu_info,
        memory,
        gpu,
        os: { os_info, os_uuid, os_version, os_users },
        usb,
        printer,
        audio,
        ethernet: { networkInterfaces, networkInterfaceDefault, networkGatewayDefault, networkStats, inetLatency },
        wifi: { network, inteface },
        bluetooth
    };
};


