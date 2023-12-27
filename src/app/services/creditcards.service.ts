import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiUrl = 'http://localhost:3000/creditcards';
  constructor(private http: HttpClient) { }

    createCreditCard(creditCard: CreditCard): Observable<CreditCard>{
      return this.http.post<CreditCard>(this.apiUrl, creditCard);
    }

    getCreditCards(): Observable<CreditCard[]>{
      return this.http.get<CreditCard[]>(this.apiUrl);
    }

    getCreditCard(id: number): Observable<CreditCard>{
      return this.http.get<CreditCard>(`${this.apiUrl}/${id}`);
    }

    updateCreditCard(creditCard: CreditCard): Observable<CreditCard>{
      return this.http.put<CreditCard>(`${this.apiUrl}/${creditCard.id}`, creditCard);
    }

    deleteCreditCard(id: number): Observable<CreditCard>{
      return this.http.delete<CreditCard>(`${this.apiUrl}/${id}`);
    }
    

}

