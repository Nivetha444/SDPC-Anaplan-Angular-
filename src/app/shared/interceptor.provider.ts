import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './interceptors/http.interceptor';

export const HttpInterceptorProviders = [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
];
