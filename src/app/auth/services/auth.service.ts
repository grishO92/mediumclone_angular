import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { Observable, map } from 'rxjs';
import { authResponseInterface } from '../types/authResponse.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class authService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<authResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}
