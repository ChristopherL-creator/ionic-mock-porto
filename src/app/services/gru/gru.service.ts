import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gru } from 'src/app/model/gru';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GruService {

  public grus? = new BehaviorSubject<Gru[] | undefined>(this.grus);

  public selectedGrus = this.grus.asObservable();

  constructor(private http: HttpClient,
    private router: Router) {

    // this.getGrus().subscribe({
    //   next: grus => {
    //     this.grus.next(undefined);
    //     console.log(grus);
    //   },
    //   error: err => console.log(err)
    // });
  }

  getGrus(): Observable<Gru[]>{
    console.log('crane service works!');

    return this.http.get<Gru[]>(`${environment.gruUrl}`);
  };

  setGru(gru): void{
    this.grus.next(gru);
    localStorage.setItem('savedGru', JSON.stringify(gru));
    console.log('stored', gru);
    this.router.navigate(['/gru-select/', gru]).then(() => {
      window.location.reload();
    });
  }
}
