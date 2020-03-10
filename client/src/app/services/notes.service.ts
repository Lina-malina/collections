import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { INote } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  public getNotes(): Observable<any> {
    return this.http.get('/api/notes', { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});
  }
  public addNote(note: INote): Observable<any> {
    return this.http.post('/api/notes', note, { headers: { Authorization: `Bearer ${this.auth.getToken()}`}});
  }
  public deleteNote(id: string): Observable<any> {
    return this.http.delete('/api/notes/' + id, { headers: { Authorization: `Bearer ${this.auth.getToken()}`}});
  }
  public updNote(id: string, note: INote): Observable<any> {
    return this.http.post('/api/notes/' + id, note, { headers: { Authorization: `Bearer ${this.auth.getToken()}`}});
  }
}
