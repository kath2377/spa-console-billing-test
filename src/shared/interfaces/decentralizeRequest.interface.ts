export interface ConfigRequestCustomer {
  configuration: string;
  childNodeId: string;
}

export interface ConfigRequestBranch {
  configuration: string;
  centralizedNodeId: string;
  newValue: string;
}

export interface DecentralizeRequestCustomer {
  nodeId: string;
  configs: ConfigRequestCustomer[];
}

export interface DecentralizeRequestBranch {
  nodeId: string;
  configs: ConfigRequestBranch[];
}

export interface Decentralizerequest {
  branch: DecentralizeRequestBranch[];
  customer: DecentralizeRequestCustomer;
}
