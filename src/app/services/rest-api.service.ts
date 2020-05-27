import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap, retryWhen, mergeMap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';

const DEFAULT_MAX_RETRIES = 10;

const getErrorMessage = (maxRetry: number) =>
  `Tried to load resource over XHR for ${maxRetry} times without success. Giving up.`;


@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  constructor(private http: HttpClient) { }

  get(url: string, queryParams?: { [key: string]: any }) {

    const options = {
      params: queryParams
    };

    return this.http.get(url, options)
      .pipe(
        tap(_ => this.logResponse('GET', url, _)),
        take(1));
  }

  getWithRetry(url: string, queryParams?: { [key: string]: any }) {

    const options = {
      params: queryParams
    };

    return this.http.get(url, options)
      .pipe(
        this.delayedRetry(1000, 50),
        tap(_ => this.logResponse('GET', url, _)),
        take(1));
  }

  post(url: string, body: any, queryParams?: { [param: string]: any }) {
    const options = {
      params: queryParams
    };

    return this.http.post(url, body, options)
      .pipe(
        tap(_ => this.logResponse('POST', url, _)),
        take(1));
  }

  // TODO: send the log to remote logging infrastructure
  private logResponse<T>(operation: string, url: string, response?: T): any {
    if (!environment.production) {
      console.log({
        request: `[${operation}] ${url}`,
        response
      });
    }
  }


  private delayedRetry(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES) {
    let retries = maxRetry;

    return (src: Observable<any>) =>
      src.pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
          delay(delayMs),
          mergeMap(error => retries-- > 0 ? of(error) : throwError(getErrorMessage(maxRetry)))
        )));
  }
}
