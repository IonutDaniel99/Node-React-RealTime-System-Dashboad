import si from 'systeminformation';

export const get_printer = async () => {
    return await si.printer();
}