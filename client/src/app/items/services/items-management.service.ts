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
  public searchItems(value: string): Observable<any> {
    return this.http.get('/api/search-items', { params: { value }});
  }
  public getItemById(itemId: string): Observable<any> {
    return this.http.get('/api/items/' + itemId);
  }
  public addItem(item: IItem): Observable<any> {
    return this.http.post('/api/items', item);
  }
  public deleteItem(id: string): Observable<any> {
    return this.http.delete('/api/items/' + id);
  }
  public editItem(id: string, item: IItem): Observable<any> {
    return this.http.post('/api/items/' + id, item);
  }
  public addComment(id: string, comment: string, name: string) {
    return this.http.post('/api/items/' + id + '/comments', { comment, name});
  }
}
