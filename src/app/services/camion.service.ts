import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CamionPage } from '../pages/camion/camion.page';
import { PositionAggregator } from '../model/PositionAggregator';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  public camionP: CamionPage;

  public positionAggregator = new PositionAggregator();

  constructor(private http: HttpClient) {
    this.positionAggregator.lontanoEstArray = [];
  }

  getCamions(): Observable<any>{
    console.log('service works!');
    return this.http.get(`${environment.camionUrl}`);
  };



}
