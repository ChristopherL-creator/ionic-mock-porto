import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camion, PositionAggregator } from '../model/camion';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  public camion: Camion;

  public positionAggregator: PositionAggregator;

  constructor(private http: HttpClient) { }

  getCamions(): Observable<any>{
    // console.log('service works!');
    return this.http.get(`${environment.camionUrl}`);
  };

  sortByPosition() {
    console.log('sortbyworks!');

    // for (const iterator of object) {
      // if (camion.position <= -200) {
      //   this.positionAggregator.lontanoEstArray.push(camion.truckCode);
      // } else if (camion.position > -200 && camion.position <= -100) {
      //   this.positionAggregator.medioEstArray.push(camion.truckCode);
      // } else if (camion.position > -100 && camion.position < 100) {
      //   this.positionAggregator.vicinoArray.push(camion.truckCode);
      // } else if (camion.position >= 100 && camion.position < 200) {
      //   this.positionAggregator.medioOvestArray.push(camion.truckCode);
      // } else if (camion.position >= 200) {
      //   this.positionAggregator.lontanoOvestArray.push(camion.truckCode);
      // };
    // }
    if (this.camion.position <= -200) {
      this.positionAggregator.lontanoEstArray.push(this.camion.truckCode);
      console.log(this.positionAggregator.lontanoEstArray);
    }

  }

}
