import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


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
}
