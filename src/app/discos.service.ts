import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  constructor(private http:HttpClient) { }
getDiscos():any{
  return this.http.get('https://web-production-60cd.up.railway.app/api/listar_discos/');
}
}
