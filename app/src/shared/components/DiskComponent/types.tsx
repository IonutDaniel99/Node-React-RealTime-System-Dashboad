export type DiskData = {
    fs: string;
    dataType: string;
    size: number;
    used: number;
    available: number;
    use: number;
    mount: string;
  };
  
  export type DiskDataObj = DiskData[];