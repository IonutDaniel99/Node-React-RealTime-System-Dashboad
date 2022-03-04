import { get_cpu_info } from '../plugins/sysinfo/sys_cpu';
import { get_memory } from '../plugins/sysinfo/sys_mem';
import { get_os_info, get_os_uuid, get_os_versions, get_os_users } from '../plugins/sysinfo/sys_os';

const onSocketConnection = async (socket) => {
    console.log(`User ${socket.id} has connected`)
    //Send only 1 time
    const object = {
        cpu_info: await get_cpu_info(),
        memory_info: {
            memory: await get_memory(),
        },
        os: {
            os_info: await get_os_info(),
            os_uuid: await get_os_uuid(),
            os_version: await get_os_versions(),
            os_users: await get_os_users(),
        }
    }
    socket.emit('static_system_info', object)



    //Send multipme time
    // layout: await get_memory_layout(),
    // battery: await get_battery(),
    // gpu: await get_gpu()


    // async function tempCpu(socket) {
    //     // const objectData = {

    //     //     load: {
    //     //         currentLoad: await si.currentLoad().then(data => { return data }),
    //     //         fullLoad: await si.fullLoad().then(data => { return data }),
    //     //         processes: await si.processes().then(data => { return data }),
    //     //         services: await si.services().then(data => { return data }),
    //     //         processLoad: await si.processLoad().then(data => { return data }),
    //     //     },
    //     //     filesystem: {
    //     //         disk: await si.diskLayout().then(data => { return data }),
    //     //         blocked_device: await si.blockDevices().then(data => { return data }),
    //     //         disksIO: await si.disksIO().then(data => { return data }),
    //     //         fsSize: await si.fsSize().then(data => { return data }),
    //     //         fsOpenFiles: await si.fsOpenFiles().then(data => { return data }),
    //     //         fsStats: await si.fsStats().then(data => { return data }),
    //     //     },
    //     //     usb: await si.usb().then(data => { return data }),
    //     //     printer: await si.printer().then(data => { return data }),
    //     //     audio: await si.audio().then(data => { return data }),
    //     //     network: {
    //     //         networkInterfaces: await si.networkInterfaces().then(data => { return data }),
    //     //         networkInterfaceDefault: await si.networkInterfaceDefault().then(data => { return data }),
    //     //         networkGatewayDefault: await si.networkGatewayDefault().then(data => { return data }),
    //     //         networkStats: await si.networkStats().then(data => { return data }),
    //     //         networkConnections: await si.networkConnections().then(data => { return data }),
    //     //         inetChecksite: await si.inetChecksite().then(data => { return data }),
    //     //         inetChecksite: await si.inetLatency().then(data => { return data }),
    //     //     },
    //     //     wifi: {
    //     //         wifiNetworks: await si.wifiNetworks().then(data => { return data }),
    //     //         wifiInterfaces: await si.wifiInterfaces().then(data => { return data }),
    //     //         wifiConnections: await si.wifiConnections().then(data => { return data }),
    //     //     },
    //     //     bluetooth: await si.bluetoothDevices().then(data => { return data }),
    //     //     system_info: await si.system().then(data => { return data }),
    //     // };
    //     const x = await si.getStaticData().then(data => { return data });
    //     socket.emit("FromAPI", x);

    // }


    //Sned Periodicaly
}



export default onSocketConnection