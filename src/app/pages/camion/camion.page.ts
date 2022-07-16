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

  public result = {
    lontanoEstArray: [],
    medioEstArray: [],
    vicinoArray: [],
    medioOvestArray: [],
    lontanoOvestArray: [],
  }

  public areas = [
    {
      area: -200,
      id: 1
    },
    {
      area: -100,
      id: 2
    },
    {
      area: 100,
      id: 3
    },
    {
      area: 200,
      id: 4
    },
  ];

  areas.forEach( el => {
    el.area =< -200 ? lontanoEstArray.push(el) :

  });


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
        console.log(camions);
      },
      error: err => console.log(err)
    });
  }



}
