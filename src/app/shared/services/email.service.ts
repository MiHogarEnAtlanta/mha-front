import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendMessage(body) {
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      // El backend responde texto plano (no JSON); sin esto HttpClient
      // intenta parsear JSON y dispara el callback de error aun con 200 OK.
      responseType: "text" as "text",
    };
    return this.http.post(
      "https://mha-nodemailer.netlify.app/email",
      body,
      options,
    );
  }
}
