import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'http://localhost:9098/auth/users'; // User Controller path

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

  userId: number | null = null; // needed to be null bc user is yet to create it

  constructor(private http: HttpClient) {}

  /**
   * Authenticates the user using the provided username and password.
   * On successful authentication, saves the token to local storage and informs all subscribers about the token change.
   * @param {string} username - User's email address.
   * @param {string} password - User's password.
   * @returns {Observable<any>} Observable with the server response.
   */
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

  /**
   * Registers a new user using the provided user details.
   * On successful registration, sets the userId of the newly registered user.
   * @param {any} user - Object containing user registration details.
   * @returns {Observable<any>} Observable with the server response.
   */
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

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setUserId(userId: any): void {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }

  getTeamId(): Observable<any> {
    const userId = this.getUserId();
    return this.http.get(`/api/fantasyTeam/${userId}`);
  }
}
