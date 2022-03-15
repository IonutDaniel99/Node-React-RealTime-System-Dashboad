import { AudioDataInterface } from "./AudioComponent/types";
import { BluetoothDataObjInterface } from "./BluetoothComponent/types";
import { CpuDataInterface } from "./CpuComponent/types";
import { EthernetDataInterface } from "./EthernetComponent/types";

export type StaticDataInterface = {
    audio: AudioDataInterface,
    bluetooth: BluetoothDataObjInterface,
    cpu_info: CpuDataInterface,
    ethernet: EthernetDataInterface,
    gpu: {},
    memory: [],
    os: {},
    printer: [],
    system: {},
    usb: [],
    wifi: {},
};