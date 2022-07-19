import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Camion } from 'src/app/model/camion';
import { CamionService } from 'src/app/services/camion.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.page.html',
  styleUrls: ['./camion.page.scss'],
})
export class CamionPage implements OnInit {

  public camionsArray: Camion[] = [];

  constructor(public camionService: CamionService, private loadingControl: LoadingController) { }

  ngOnInit() {
    this.loadCamions();
  }

  async loadCamions(){
    const loadAnim = await this.loadingControl.create({
      message: 'Caricamento...',
      spinner: 'bubbles'
    });
    await loadAnim.present;

    this.camionService.getCamions().subscribe({
      next: camions => {
        loadAnim.dismiss();
        //  spingo elementi da res a this.camionsarray
        this.camionsArray = camions;

//  ciclo camions per accadere alla posizione di ciascun camion
        for (let i = 0; i < camions.length; i++) {
          const camion = camions[i];
          console.log(this.camionsArray[i].position);
//  richiamo funzione sortbypos, e ci inifilo ciascun camion di camions
          this.sortByPosition(camion);
        }
      },
      error: err => console.log(err)
    });

  }

//  ci iniflo interfaccia camion per accedere a sue proprietà
  sortByPosition(camion: Camion) {
    console.log('camion nome',camion.truckCode,'camion posizione', camion.position);

    // console.log('sortbyworks!');

    if (camion.position <= -200) {
      this.camionService.positionAggregator.lontanoEstArray.push(camion.truckCode);
      console.log(this.camionService.positionAggregator.lontanoEstArray);
    // } else if (camion.position > -200 && camion.position <= -100) {
    //   this.camionService.positionAggregator.lontanoEstArray.push(camion.truckCode);
    //   console.log(this.camionService.positionAggregator.medioEstArray);
    // } else if (camion.position > -100 && camion.position < 100) {
    //   this.camionService.positionAggregator.lontanoEstArray.push(camion.truckCode);
    //   console.log(this.camionService.positionAggregator.vicinoArray);
    // } else if (camion.position >= 100 && camion.position < 200) {
    //   this.camionService.positionAggregator.lontanoEstArray.push(camion.truckCode);
    //   console.log(this.camionService.positionAggregator.medioOvestArray);
    // } else if (camion.position >= 200) {
    //   this.camionService.positionAggregator.lontanoEstArray.push(camion.truckCode);
    //   console.log(this.camionService.positionAggregator.lontanoOvestArray);
    };
  }
}
