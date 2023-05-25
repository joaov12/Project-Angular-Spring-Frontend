import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ClientecService {

  // Url da API
  private url:string = 'http://localhost:8080';

  //construtor
  constructor(private http:HttpClient) { }
}
