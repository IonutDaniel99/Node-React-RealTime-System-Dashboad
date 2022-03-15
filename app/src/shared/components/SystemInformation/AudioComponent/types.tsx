export type AudioDataInterface = {
    id: string,
    name: string,
    manufacturer: string,
    revision: null | any,
    driver: null | any,
    default: null | any,
    channel: null | any,
    type: string,
    in: null | any,
    out: null | any,
    status: number
};

export type AudioDataObjInterface = AudioDataInterface[];