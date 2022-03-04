import si from 'systeminformation';

export const get_battery = async () => {
    return si.battery();
}

