import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }
  addMessage(message: any) {
    return this.http.post(`http://127.0.0.1:5000/chat`, message);
  }
}
