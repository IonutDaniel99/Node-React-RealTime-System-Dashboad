import si from 'systeminformation';

export const get_current_load = async () => {
    return si.currentLoad();
}
export const get_full_load = async () => {
    return si.fullLoad().then((data) => { return data });
}
export const get_processes = async () => {
    return si.processes().then((data) => { return data['all'] });
}
export const get_services = async () => {
    return si.services().then((data) => { return data });
}