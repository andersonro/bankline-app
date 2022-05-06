import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl = 'http://localhost:8080';
const baseUrl = 'https://aro-dio-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao`);
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao/${idConta}`);
  }

  // adicionando o método de inclusão (POST) via API
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacao`,movimentacao);
  }

}
