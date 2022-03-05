import si from 'systeminformation';

export const get_memory = async () => {
    return si.mem().then((data) => {
        return (
            {
                total: data["total"],
                used: data["used"],
                available: data["available"],
            }
        )
    });;
}

export const get_memory_layout = async () => {
    return si.memLayout();
}
