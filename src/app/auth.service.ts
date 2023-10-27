import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'http://localhost:9098/auth/users';

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  userId: number | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = {
      emailAddress: username,
      password: password,
    };

    return this.http.post<any>(`${this.API_URL}/login/`, loginData).pipe(
      tap((response) => {
        if (response && response.jwt) {
          localStorage.setItem('token', response.jwt);
          this.tokenSubject.next(response.jwt);
        }
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/register/`, user).pipe(
      tap((response) => {
        console.log('Registration Response:', response);

        // Set the userId when registering
        if (response && response.data && response.data.id) {
          this.setUserId(response.data.id);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUserId(userId: any): void {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
