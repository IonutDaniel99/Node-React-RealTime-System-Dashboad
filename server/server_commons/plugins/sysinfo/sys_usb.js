import si from 'systeminformation';

export const get_usb = async () => {
    return await si.usb();
}