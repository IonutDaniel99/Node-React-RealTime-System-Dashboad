export type DiskInterface = {
    fs: string;
    dataType: string;
    size: number;
    used: number;
    available: number;
    use: number;
    mount: string;
  };
  
  export type DiskDataObjInterface = DiskInterface[];