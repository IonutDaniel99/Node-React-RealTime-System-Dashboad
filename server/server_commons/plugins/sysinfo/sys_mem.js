import si from 'systeminformation';

export const get_memory = async () => {
    return si.mem();
}

export const get_memory_layout = async () => {
    return si.memLayout();
}
