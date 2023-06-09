import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface DataResult<T> {
    message: string;
    success: boolean;
    result: T;
    errorMessages?: T;
}

export interface Options {
    headers?: HttpHeaders;
    params?: HttpParams;
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        protected http: HttpClient,
    ) { }

    public createDefaultOptions(): Options {
        return {
            headers: new HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                timeZone: 'SA Pacific Standard Time',
                key: 'oAfs1byfIrrP4UsM7OQToUZ2Jd5NiUzy'
            }),
        };
    }

    public optsName(name: string): Options {
        return this.setHeader('xhr-name', name);
    }

    private setHeader(name: string, value: string): Options {
        const newOpts = this.createDefaultOptions();
        newOpts.headers = newOpts.headers?.set(name, value);
        return newOpts;
    }

    private createOptions(opts?: Options): Options {
        const defaultOpts: Options = this.createDefaultOptions();

        if (!!opts) {
            opts = {
                params: opts.params || defaultOpts.params,
                headers: opts.headers || defaultOpts.headers,
            };

            if (!opts.headers?.get('Content-Type')) {
                opts.headers?.set(
                    'Content-Type',
                    defaultOpts.headers?.get('Content-Type') || ''
                );
            }
        }

        return opts || defaultOpts;
    }

    public get<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);
        return this.http.get<T>(environment.ApiUrl + serviceUrl, ropts);
    }

    public post<T, R>(
        serviceUrl: string,
        body: T,
        opts?: Options
    ): Observable<R> {
        const ropts = this.createOptions(opts);
        return this.http.post<R>(environment.ApiUrl + serviceUrl, body, ropts);
    }

    public put<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
        const ropts = this.createOptions(opts);
        return this.http
            .put<DataResult<R>>(environment.ApiUrl + serviceUrl, body, ropts)
            .pipe(map((x) => x.result));
    }

    public delete<T>(serviceUrl: string, opts?: Options): Observable<T> {
        const ropts = this.createOptions(opts);
        return this.http.delete<T>(environment.ApiUrl + serviceUrl, ropts);
    }

    public getParameters<T>(
        serviceUrl: string,
        param: HttpParams,
        opts?: Options
    ): Observable<T> {
        const ropts = this.createOptions(opts);
        const options =
            param !== null
                ? ({
                    headers: ropts.headers,
                    params: param,
                } as Options)
                : ropts;

        return this.http
            .get<DataResult<T>>(environment.ApiUrl + serviceUrl, options)
            .pipe(map((x) => x.result));
    }
}