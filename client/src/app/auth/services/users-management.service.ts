import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private http: HttpClient) { }

  public users(): Observable<any> {
    return this.http.get('/api/users');
  }
  public postSelectedId(selectedId, action): Observable<any> {
    return this.http.post(`/api/users/${action}`, {selectedId});
  }
}
