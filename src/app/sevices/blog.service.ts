import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getOneBlog(id:any){
    return this.http.get(`${environment.baseUrl}/users/blog/getone/${id}`)
  }
  getateblog() {
    return this.http.get(`${environment.baseUrl}/users/blog/get`);
  }
  
}
