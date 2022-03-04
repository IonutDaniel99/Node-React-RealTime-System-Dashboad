import { get_audio } from '../plugins/sysinfo/sys_audio';
import { get_battery } from '../plugins/sysinfo/sys_battery';
import { get_bluetooth } from '../plugins/sysinfo/sys_bluetooth';
import { get_cpu_info } from '../plugins/sysinfo/sys_cpu';
import { get_disks } from '../plugins/sysinfo/sys_file';
import { get_gpu_info } from '../plugins/sysinfo/sys_gpu';
import { get_system } from '../plugins/sysinfo/sys_hw';
import { get_current_load, get_full_load, get_processes, get_services } from '../plugins/sysinfo/sys_load';
import { get_memory, get_memory_layout } from '../plugins/sysinfo/sys_mem';
import { get_network_interface, get_network_gateway_default, get_network_interface_default, get_network_latency, get_network_checksite, get_network_stats } from '../plugins/sysinfo/sys_netowrk';
import { get_os_info, get_os_uuid, get_os_versions, get_os_users } from '../plugins/sysinfo/sys_os';
import { get_printer } from '../plugins/sysinfo/sys_printer';
import { get_usb } from '../plugins/sysinfo/sys_usb';
import { get_wifi_connections, get_wifi_interfaces, get_wifi_networks } from '../plugins/sysinfo/sys_wifi';

const onSocketConnection = async (socket) => {
    console.log(`User ${socket.id} has connected`)
    //Send only 1 time
    const object_one_time = {
        system: await get_system(),
        cpu_info: await get_cpu_info(),
        gpu: await get_gpu_info(),
        os: {
            os_info: await get_os_info(),
            os_uuid: await get_os_uuid(),
            os_version: await get_os_versions(),
            os_users: await get_os_users(),
        },
        usb: await get_usb(),
        printer: await get_printer(),
        audio: await get_audio(),
        network: {
            networkInterfaces: await get_network_interface(),
            networkInterfaceDefault: await get_network_interface_default(),
            networkGatewayDefault: await get_network_gateway_default(),
            networkStats: await get_network_stats(),
            inetLatency: await get_network_latency(),
        },
        wifi: {
            network: await get_wifi_networks(),
            inteface: await get_wifi_interfaces(),
        },
        bluetooth: await get_bluetooth(),

    }
    socket.emit('static_system_info', object_one_time)

    // Send multiple times
    const object_multiple_time = {
        layout: await get_memory_layout(),
        battery: await get_battery(),
        disks: await get_disks(),
        load: {
            current_load: await get_current_load(),
            full_load: await get_full_load(),
            processes: await get_processes(),   ///aici ia doar all sau [0]
        },
        memory_info: await get_memory(),
        wifi: await get_wifi_connections(),
    }
    setInterval(function () {
        socket.emit('dynamic_system_info', object_multiple_time);
    }, 1000);
}

export default onSocketConnection