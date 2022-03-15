export type CpuDataInterface = {
    manufacturer: string,
    brand: string,
    vendor: string,
    family: 6,
    model: 165,
    stepping: 2,
    revision: string,
    voltage: string,
    speed: 2.7,
    speedMin: 2.7,
    speedMax: 2.71,
    governor: string,
    cores: 12,
    physicalCores: 6,
    processors: 1,
    socket: string,
    flags: string,
    virtualization: false,
    cache: {
        [key: string]: any;
    }
};
