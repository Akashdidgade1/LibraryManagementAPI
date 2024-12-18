import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5019/api'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  register(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, credentials);
  }
}
