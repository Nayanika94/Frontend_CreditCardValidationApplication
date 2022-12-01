import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Creditcard } from '../models/creditcard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditcardServiceService {
  private creditCardUrl: string;

  constructor(private http: HttpClient) {
    this.creditCardUrl = 'http://localhost:8080/creditcards';
  }

  public findById(id: string): Observable<any> {
    return this.http.get<Creditcard>(this.creditCardUrl, {
      params: {
        id: id,
      },
      withCredentials: true,
    });
  }

  public save(creditCardNumber: string) {
    return this.http.post<Creditcard>(
      `${this.creditCardUrl}/${creditCardNumber}`,
      null
    );
  }
}
