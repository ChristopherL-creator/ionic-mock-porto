import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camion } from '../model/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http: HttpClient) { }

  getCamions(){
    console.log('service works!');
    return this.http.get<Camion>(`{environment.camionUrl}`);
  }
}
