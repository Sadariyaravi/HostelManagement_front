import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export default class HostelInterceptor implements HttpInterceptor {
  constructor(private loaderservice: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderservice.show(undefined, {
      type: 'ball-fussion',
    });
    request = request.clone({
      withCredentials: true,
    });
    return next.handle(request).pipe(
      delay(500),
      finalize(() => {
        this.loaderservice.hide();
      })
    );
  }
}
