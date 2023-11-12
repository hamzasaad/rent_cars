import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }
  getVoitures(){
    return this.http.get(`${environment.baseUrl}/users/voiture/get`);
  }
  getOneVoiture(id:any){
    return this.http.get(`${environment.baseUrl}/users/voiture/getone/${id}`);
  }
  demande(demande:any,id_client:any,id_voiture:any){
    return this.http.post(`${environment.baseUrl}/users/demande/save/${id_client}/${id_voiture}`,demande);
  }
  payement(payement:any){
    return this.http.post(`${environment.baseUrl}/users/payement/post`,payement);
  }
  getOneClient(id:any){
    return this.http.get(`${environment.baseUrl}/users/client/getone/${id}`);
  }

  getcars(date1:any){
    return this.http.get(`${environment.baseUrl}/users/etat/find?date=`+date1);
  }

}
