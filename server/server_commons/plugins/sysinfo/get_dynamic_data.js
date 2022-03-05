import { get_battery } from './sys_battery';
import { get_disks } from './sys_file';
import { get_current_load, get_processes } from './sys_load';
import { get_memory } from './sys_mem';
import { get_wifi_connections} from './sys_wifi';

export const get_dynamic_data = async () => {
    const [
      battery,
      disks,
      current_load,
      processes,
      memory_info,
      wifi,
    ] = await Promise.all([
      get_battery(),
      get_disks(),
      get_current_load(),
      get_processes(),
      get_memory(),
      get_wifi_connections(),
    ]);
    return {
      battery,
      disks,
      load: { current_load, processes },
      memory_info,
      wifi,
      time: Date.now(),
    };
  };