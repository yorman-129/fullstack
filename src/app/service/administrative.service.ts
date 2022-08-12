import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrative } from '../models/administrative';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {
URL='http://localhost:8080/administrative/';

  constructor(private httpClient: HttpClient) {}

    /**
     * findAll
     */
     public lista(): Observable<Administrative[]> {
      return this.httpClient.get<Administrative[]>(this.URL + 'findAll');
    }
    /**
     * search
     */
    public search(id: number): Observable<Administrative> {
      return this.httpClient.get<Administrative>(this.URL + `search/${id}`);
    }

    /**
     * save
     */
    public save(administrative: Administrative): Observable<any> {
      return this.httpClient.post<any>(this.URL + `save`, administrative)
    }

    /**
     * update
     */
    public update(id: number,administrative: Administrative): Observable<any> {
      return this.httpClient.put<any>(this.URL + `update/${id}`, administrative)
    }

    /**
     * delete
     */
    public delete(id: number): Observable<any> {
      console.log(id);
      return this.httpClient.delete<any>(this.URL + `delete/${id}`)
    }

}
