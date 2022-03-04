import si from 'systeminformation';

export const get_gpu = async () => {
    return si.graphics();
}

