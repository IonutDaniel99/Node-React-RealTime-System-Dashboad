import si from 'systeminformation';

export const get_system = async () => {
    return si.system();
}


