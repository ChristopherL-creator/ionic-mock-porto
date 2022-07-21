import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gru } from 'src/app/model/gru';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruService {

  public gru: Gru;

  constructor(private http: HttpClient) { }

  getGrus(): Observable<any>{

    console.log('crane service works!');

    return this.http.get(`${environment.gruUrl}`);
  };
}
