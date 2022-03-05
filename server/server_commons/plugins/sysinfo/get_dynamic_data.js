import { get_battery } from './sys_battery';
import { get_disks } from './sys_file';
import { get_current_load, get_full_load, get_processes } from './sys_load';
import { get_memory, get_memory_layout } from './sys_mem';
import { get_wifi_connections} from './sys_wifi';

export const get_dynamic_data = async () => {
    const [
      layout,
      battery,
      disks,
      current_load,
      full_load,
      processes,
      memory_info,
      wifi,
    ] = await Promise.all([
      get_memory_layout(),
      get_battery(),
      get_disks(),
      get_current_load(),
      get_full_load(),
      get_processes(),
      get_memory(),
      get_wifi_connections(),
    ]);
    return {
      layout,
      battery,
      disks,
      load: { current_load, full_load, processes },
      memory_info,
      wifi,
      time: Date.now(),
    };
  };