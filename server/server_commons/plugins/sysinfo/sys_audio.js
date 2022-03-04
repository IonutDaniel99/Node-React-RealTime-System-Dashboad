import si from 'systeminformation';

export const get_audio = async () => {
    return await si.audio();
}