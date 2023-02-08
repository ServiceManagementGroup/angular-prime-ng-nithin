import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { AppConstants } from '../models/app-constans';
import { EnvironmentConfig, ENV_CONFIG } from './utils';

@Injectable({
    providedIn: 'root'
})
export class BaseAPIService {
    protected _apiURL: string;
    protected _appConstants!: AppConstants;
    private _httpOptions!: {
        headers: any; ""?: any;
        params?: HttpParams |
        {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | {
            [param: string]: string | number | boolean | readonly (string | number | boolean)[];
        } | undefined;
        // reportProgress?: boolean | undefined;
        // responseType?: "json" | undefined;
        // withCredentials?: boolean | undefined;
    };

    setHttpOptions() {
        this._httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }
    }

    constructor(public http: HttpClient, @Inject(ENV_CONFIG) config: EnvironmentConfig, appConstants: AppConstants) {
        this._apiURL = `${config.environment.baseAPIUrl}`;
        this._appConstants = appConstants;
        this.setHttpOptions();
    }

    setDefaultContentTypeAPIHeader() {
        this._httpOptions.headers = this._httpOptions.headers.set('Content-Type', 'application/json');
    }

    // Error handling 
    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //window.alert(errorMessage);    
        return throwError(errorMessage);
    }

    get<T>(url: string, params?: HttpParams) {
        this._httpOptions.params = params;
        return this.http.get<T>(`${this._apiURL}/${url}`, this._httpOptions)
            .pipe(
                take(1),
                catchError(this.handleError)
            )
    }

    post<T>(url: string, params?: {}): Observable<T> {
        this.setDefaultContentTypeAPIHeader();
        let body = JSON.stringify(params) ?? {};
        return this.http.post<T>(`${this._apiURL}/${url}`, body, this._httpOptions).pipe(
            take(1),
            catchError(this.handleError)
        )
    }

    postForm<T>(url: string, params?: {}): Observable<T> {
        return this.http.post<T>(`${this._apiURL}/${url}`, params).pipe(
            take(1),
            catchError(this.handleError)
        )
    }

    postMultiPart<T>(url: string, params?: {}): Observable<T> {
        return this.http.post<T>(`${this._apiURL}/${url}`, params).pipe(
            take(1),
            catchError(this.handleError)
        )
    }
}