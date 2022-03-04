import si from 'systeminformation';

export const get_cpu_info = async () => {
    return si.cpu();
}

export const get_cpu_speed = async () => {
    return si.cpuCurrentSpeed();
}

export const get_cpu_temp = async () => {
    return si.cpuTemperature();
}
