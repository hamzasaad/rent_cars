import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http: HttpClient) { }
  getMarques(){
    return this.http.get(`${environment.baseUrl}/users/marque/get`);
  }
}
