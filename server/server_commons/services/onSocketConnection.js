import { get_static_data} from '../plugins/sysinfo/get_static_data';
import { get_dynamic_data} from '../plugins/sysinfo/get_dynamic_data';


let intervalsBySocketId = {};

const onSocketConnection = async (socket) => {
    const user_id = socket.id;
    console.log(`User ${user_id} has connected`)
    
    get_static_data().then((data) => {
        socket.emit('static_system_info', data)
    })

    intervalsBySocketId[user_id] = setInterval(() => {
        get_dynamic_data().then((data) => {
            socket.emit('dynamic_system_info', data);   
        })
    }, 5000);

    socket.on("disconnect", ()=> {
        clearInterval(intervalsBySocketId[user_id]);
        delete intervalsBySocketId[user_id];
    })
}



export default onSocketConnection