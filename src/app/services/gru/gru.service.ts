import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gru } from 'src/app/model/gru';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruService {

  public grus? = new BehaviorSubject<Gru[] | undefined>(this.grus);

  public selectedGrus = this.grus.asObservable();

  constructor(private http: HttpClient) {
    this.getGrus().subscribe({
      next: grus => {
        this.grus.next(undefined);
        console.log(grus);
      },
      error: err => console.log(err)
    });
  }

  getGrus(): Observable<Gru[]>{
    console.log('crane service works!');

    return this.http.get<Gru[]>(`${environment.gruUrl}`);
  };

  setGru(gru): void{
    this.grus.next(gru);
    console.log(gru);
  }
}
