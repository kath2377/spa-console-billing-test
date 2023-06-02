export interface Configs {
  configuration?: string;
  value?: string;
  centralizeschildsNodeIds?: string[];
}

export interface CentralizeNodeRequest {
  nodeId: string;
  configs: Configs[];
}
