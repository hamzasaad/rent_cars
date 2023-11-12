import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
    Reclamation(contact:any){
      return this.http.post(`${environment.baseUrl}/users/reclamation/post`,contact);
    }
}
