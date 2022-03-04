import si from 'systeminformation';

export const get_memory = async () => {
    return si.mem().then((data) => { return data });
}

export const get_memory_layout = async () => {
    return si.memLayout().then((data) => { return data });
}
