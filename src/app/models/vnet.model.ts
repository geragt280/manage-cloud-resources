export interface NetworkInterface {
  id: string;
  name: string;
  privateIpAddress: string;
  macAddress: string;
  isPublic: boolean;
}

export interface Subnet {
  id: string;
  name: string;
  addressPrefix: string;
  networkInterfaces: NetworkInterface[];
}

export interface VNet {
  id: string;
  name: string;
  region: string;
  addressSpace: string;
  subnets?: Subnet[];
}

export interface VNetData {
  vnets: VNet[];
}
