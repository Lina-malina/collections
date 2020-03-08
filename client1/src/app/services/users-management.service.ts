import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  public users(): Observable<any> {
    return this.http.get('/api/users', { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  public postSelectedId(selectedId, action): Observable<any> {
    return this.http.post(`/api/users/${action}`, {selectedId},
      { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
  }
}
