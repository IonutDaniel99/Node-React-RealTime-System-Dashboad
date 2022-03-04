import si from 'systeminformation';

export const get_bluetooth = async () => {
    return await si.bluetoothDevices();
}
