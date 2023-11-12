import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get(`${environment.baseUrl}/users/produit/get`);
  }
  getOneProduct(id:any){
    return this.http.get(`${environment.baseUrl}/users/produit/getone/${id}`);
  }
  getCateagoryproduct() {
    return this.http.get(`${environment.baseUrl}/users/categoryproduct/get`);
  }
  saveCommande(commande: any, id: any, ids: any[]) {
    return this.http.post(`${environment.baseUrl}/users/commande/submit/${id}/${ids}`,  commande);
  }
}
