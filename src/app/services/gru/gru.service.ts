import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Gru } from 'src/app/model/gru';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruService {

  public gru: Gru;

  constructor(private http: HttpClient, private router: Router) { }

  getGrus(): Observable<Gru[]>{

    console.log('crane service works!');

    return this.http.get<Gru[]>(`${environment.gruUrl}`);
  };

  loginGru(selectedCraneCode: string){
    const url = environment.gruUrl + '?craneCode=' + selectedCraneCode;
    this.http.get<Gru[]>(url).subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }
}
