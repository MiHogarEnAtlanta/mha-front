import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendMessage(body){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post("https://mha-nodemailer.onrender.com/email", body, headers);
  }
}
