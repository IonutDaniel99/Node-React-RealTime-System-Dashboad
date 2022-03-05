import si from 'systeminformation';
import _ from 'lodash';

export const get_current_load = async () => {
    return si.currentLoad().then((data) => {
        return (
            {
                currentLoad: data["currentLoad"],
                currentLoadIdle: data["currentLoadIdle"],
                currentLoadSystem: data["currentLoadSystem"],
                currentLoadUser: data["currentLoadUser"]
            }
        )
    });
}

export const get_processes = async () => {
    return si.processes().then((data) => { return data['all'] });
}