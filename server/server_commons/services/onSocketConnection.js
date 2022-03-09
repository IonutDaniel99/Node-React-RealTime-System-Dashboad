import { get_static_data } from '../plugins/sysinfo/get_static_data';
import { local_state } from '../state/local_state';
import { get_battery } from '../plugins/sysinfo/sys_battery';
import { get_disks } from '../plugins/sysinfo/sys_file';

import { timeLog } from '../utils/timeLog'


const onSocketConnection = async (socket) => {
    const user_id = socket.id;
    console.log(`User ${user_id} has connected`)

    if (Object.keys(local_state.static_system_information).length !== 0) {
        socket.emit('send_static_data', local_state.static_system_information)
    } else {
        get_static_data().then((data) => {
            Object.assign(local_state.static_system_information, data)
            socket.emit('send_static_data', data)
        })
    }
    socket.on("request_server_battery", () => {
        get_battery().then(data => {
            socket.emit('callback_server_battery', data)
        })
    })
    socket.on("request_server_disk", () => {
        get_disks().then(data => {
            socket.emit('callback_server_disk', data)
        })
    })
}



export default onSocketConnection