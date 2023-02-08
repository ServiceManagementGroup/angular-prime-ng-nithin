import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseAPIService } from './base-api.service';

@Injectable({
    providedIn: 'root'
})
export class HierApiService extends BaseAPIService {
    getChildren<ApiResponse>(): Observable<ApiResponse> {
        const graphId = "1";
        const id = "/1/1/1/";
        const url = this._appConstants.ApiGetChildren(graphId, id);
        const params = new HttpParams()
            .set('numLevels', 1);
        return this.get<ApiResponse>(url, params);
    }
}