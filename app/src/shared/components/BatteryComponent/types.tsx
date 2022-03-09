export interface BatteryData {
    hasBattery: boolean,
    cycleCount: number,
    isCharging: boolean,
    designedCapacity: number,
    maxCapacity: number,
    currentCapacity: number,
    voltage: number,
    capacityUnit: string,
    percent: number,
    timeRemaining: null | any,
    acConnected: boolean,
    type: string,
    model: string,
    manufacturer: string,
    serial: string
}