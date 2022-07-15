import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camion } from '../model/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  public camion?: Camion;

  constructor(private http: HttpClient) { }

  getCamions(): Observable<any>{
    // console.log('service works!');
    return this.http.get(`${environment.camionUrl}`);
  };
}
