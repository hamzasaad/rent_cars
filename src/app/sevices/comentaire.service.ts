import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentaireService {

  constructor(private http:HttpClient) { }
  addComment(comantaire: any,id_client:any,id_blog:any) {
    return this.http.post(`${environment.baseUrl}/users/commentaire/add/${id_client}/${id_blog}`, comantaire)
  }
  Comments(){
    return this.http.get(`${environment.baseUrl}/users/commentaire/get`)
  }
}
