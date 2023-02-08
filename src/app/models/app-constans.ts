import { Injectable } from "@angular/core";

@Injectable()
export class AppConstants {    
    public readonly ApiGetChildren = (graphId: string, nodeId: string) => `${graphId}/node/${encodeURIComponent(nodeId)}/children`;
}