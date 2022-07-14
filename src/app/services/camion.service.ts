import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http: HttpClient) { }

  getCamions(): Observable<any>{
    console.log('service works!');
    return this.http.get(`${environment.camionUrl}`);
  };
}
