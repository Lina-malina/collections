import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsManagementService {

  constructor(private http: HttpClient) { }

  public getItems(collectionId: string): Observable<any> {
    return this.http.get('/api/items', { params: { collectionId }});
  }
  public addItem(item: IItem): Observable<any> {
    return this.http.post('/api/items', item);
  }
  public deleteItem(id: string): Observable<any> {
    return this.http.delete('/api/items' + id);
  }
  public editItem(id: string, item: IItem): Observable<any> {
    return this.http.post('/api/items' + id, item);
  }
}
