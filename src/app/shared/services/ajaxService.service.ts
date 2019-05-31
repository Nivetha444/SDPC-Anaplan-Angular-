import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError, Subscription } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class AjaxService {
    rootApiPath: string = environment.rootApiURL;
    httpEmitter: Subscription;
    httpEvent: HttpEvent<Event>;
    constructor(private http: HttpClient) {
    }

    getHttpParams(data: any) {
        let httpParams = new HttpParams();
        // tslint:disable-next-line:only-arrow-functions
        Object.keys(data).forEach(function(key) {
            httpParams = httpParams.append(key, data[key]);
        });
        return httpParams;
    }

    buildFullPath(route) {
        return this.rootApiPath + '/' + route;
    }

    getWithParam(data: any, route: string) {

        const path = this.buildFullPath(route);
        return this.http
        .get(path, {params: this.getHttpParams(data)})
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    getPDFWithParam(data: any, route: string) {
        const path = this.buildFullPath(route);
        return this.http
        .get(path, { params: this.getHttpParams(data) })
        .pipe(
            map((response: any) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            // return  new Blob([response.blob()], { type: 'application/pdf' });
            return {
                    Result: new Blob([blob], { type: 'application/pdf' }),
                    Status: 'success'
                };
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    // {
    //     response: {}
    //     status: success/error/failure
    // }
    getWithRoute(route: string) {
        const path = this.buildFullPath(route);
        return this.http
        .get(path)
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    postData(data: object, route: string) {
        const path = this.buildFullPath(route);
        return this.http
        .post(path, data)
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                console.dir(error);
                return this.handleExceptions(error);
            })
        );
    }

    putData(data: object, route: string) {
        const path = this.buildFullPath(route);
        return this.http
        .put(path, data)
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    importFile(file: any, route: string) {
        const formData: FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        const path = this.buildFullPath(route);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        return this.http
        // tslint:disable-next-line:object-literal-shorthand
        .post(path, formData, { headers: headers, reportProgress: true })
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    postForBlobWithParam(data: any, route: string) {
        const path = this.buildFullPath(route);

        return this.http
        .post(path, data, { responseType: 'blob' })
        .pipe(
            map((response: any) => {
                const blob = new Blob([response], { type: 'application/pdf' });
                return {
                    Result: blob,
                    Status: true
                };
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    deleteData(data: any, route: string) {
        const path = this.buildFullPath(route);
        return this.http
        .delete(path, data)
        .pipe(
            map((response: any) => {
                const result = response;
                if (!result.status) {
                    this.handleValidationErrors();
                }
                return result;
            }),
            catchError((error: Response) => {
                return this.handleExceptions(error);
            })
        );
    }

    handleExceptions(res: any) {
        const errorMessage = {
            status: res.error.status,
            errorMessage: res.error.result
        };
        return  throwError(errorMessage);
    }

    handleValidationErrors() {
    }
}
