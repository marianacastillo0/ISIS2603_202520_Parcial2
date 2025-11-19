import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprendedor } from './emprendedor';


@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private baseUrl='https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/emprendedores.json'
  constructor(private http: HttpClient ) { }

  getEmprendedores(): Observable<Emprendedor> {
    return this.http.get<Emprendedor>(`${this.baseUrl}/emprendedor.json`);
  }

  getEmprendedorById(id: number): Observable<Emprendedor> {
    return this.http.get<Emprendedor>(`${this.baseUrl}/emprendedor_${id}.json`);
  }
}
