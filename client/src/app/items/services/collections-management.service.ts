import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICollection } from '../models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionsManagementService {

  constructor(private http: HttpClient) { }

  public getCollections(): Observable<any> {
    return this.http.get('/api/collections');
  }
  public getUserCollections(userId: string): Observable<any> {
    return this.http.get('/api/collections/user/' + userId);
  }
  public getCollectionById(collectionId: string): Observable<any> {
    return this.http.get('/api/collections/' + collectionId);
  }
  public addCollection(collection: ICollection): Observable<any> {
    return this.http.post('/api/collections', collection);
  }
  public deleteCollection(collectionId: string): Observable<any> {
    return this.http.delete('/api/collections/' + collectionId);
  }
  public editCollection(collectionId: string, collection: ICollection): Observable<any> {
    return this.http.post('/api/collections/' + collectionId, collection);
  }
}
