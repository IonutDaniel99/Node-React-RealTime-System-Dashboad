import si from 'systeminformation';

export const get_disks = async () => {
    return si.fsSize();
}
