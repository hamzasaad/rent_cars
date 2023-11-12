import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http:HttpClient) { }
  updateImage(client:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/client/image/${id}`,client)
  }
  getOnelient(id:any){
    return this.http.get(`${environment.baseUrl}/users/client/getone/${id}`)
   }
   updateClient(client:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/client/update/${id}`,client)
  }
}
