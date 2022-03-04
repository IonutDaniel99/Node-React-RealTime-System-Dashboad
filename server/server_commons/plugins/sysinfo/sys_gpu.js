import si from 'systeminformation';

export const get_gpu_info = async () => {
    return si.graphics();
}

