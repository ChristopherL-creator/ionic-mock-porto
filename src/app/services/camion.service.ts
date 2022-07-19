import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CamionPage } from '../pages/camion/camion.page';
import { PositionAggregator } from '../model/position-aggregator';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  public camionP: CamionPage;

//  inizializzo interfaccia PosAggr per accedere a proprietà:
  public positionAggregator = {} as PositionAggregator;

  constructor(private http: HttpClient) {
//  nel costruttore di service inizializzo arrays di PosAggr come vuote
    this.positionAggregator.lontanoEstArray = [];
    this.positionAggregator.medioEstArray = [];
    this.positionAggregator.vicinoArray = [];
    this.positionAggregator.medioOvestArray = [];
    this.positionAggregator.lontanoOvestArray = [];
  }

  getCamions(): Observable<any>{
    console.log('service works!');
    return this.http.get(`${environment.camionUrl}`);
  };



}
