import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {
    /**
   * Constructs the interceptor and injects the AuthService to retrieve the JWT token.
   * @param {AuthService} authService - Service that provides authentication-related functionalities.
   */
  constructor(private authService: AuthService) {}

  /**
   * Intercepts outgoing HTTP requests, and if a JWT token exists, appends it to the request headers.
   * If the request is for the registration URL, it bypasses adding the JWT token.
   * @param {HttpRequest<any>} request - The outgoing HTTP request object.
   * @param {HttpHandler} next - The HTTP request handler.
   * @returns {Observable<HttpEvent<any>>} - An observable of the HTTP event flow.
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    // Exclude registration URL from adding token
    if (request.url === 'http://localhost:9098/auth/users/register') {
      return next.handle(request);
    }
    if (token) {
      console.log('sending token', token);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
