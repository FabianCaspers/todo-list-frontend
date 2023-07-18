import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginWithUsernameAndPassword(username: string, password: string): Observable<any> {
    const url = environment.baseURL + '/login/';
    const body = {
      "username": username,
      "password": password
    }
    return this.http.post(url, body);
  }
}
