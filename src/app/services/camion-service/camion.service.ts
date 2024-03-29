import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PositionAggregator } from '../../model/position-aggregator';
import { Camion } from '../../model/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  public camion: Camion;

//  inizializzo interfaccia PosAggr per accedere a proprietà:
  public positionAggregator = {} as PositionAggregator;

  constructor(private http: HttpClient) {
//  nel costruttore di service inizializzo arrays di PosAggr come vuote
    this.clearPositionAggr();
  }

  getCamions(): Observable<Camion[]>{
    // console.log('service works!');
    return this.http.get<Camion[]>(`${environment.camionUrl}`);
  };

  clearPositionAggr(){
    this.positionAggregator.lontanoEstArray = [];
    this.positionAggregator.medioEstArray = [];
    this.positionAggregator.vicinoArray = [];
    this.positionAggregator.medioOvestArray = [];
    this.positionAggregator.lontanoOvestArray = [];
  }

  sortByPosition(camion: Camion) {
    // console.log('camion nome',camion.truckCode,'camion posizione', camion.position);

    if (camion.position <= -200) {
      this.positionAggregator.lontanoEstArray.push(camion.truckCode);

    } else if (camion.position > -200 && camion.position <= -100) {
      this.positionAggregator.medioEstArray.push(camion.truckCode);

    } else if (camion.position > -100 && camion.position < 100) {
      this.positionAggregator.vicinoArray.push(camion.truckCode);

    } else if (camion.position >= 100 && camion.position < 200) {
      this.positionAggregator.medioOvestArray.push(camion.truckCode);

    } else if (camion.position >= 200) {
      this.positionAggregator.lontanoOvestArray.push(camion.truckCode);
    };
  }
  //  ci iniflo interfaccia camion per accedere a sue proprietà

}
