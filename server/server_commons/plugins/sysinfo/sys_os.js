import si from 'systeminformation';

export const get_os_info = async () => {
    return si.osInfo();
}
export const get_os_uuid = async () => {
    return si.uuid();
}
export const get_os_versions = async () => {
    return si.versions();
}
export const get_os_users = async () => {
    return si.users();
}

