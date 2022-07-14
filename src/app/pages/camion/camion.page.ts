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

  camion = [];

  constructor(private camionService: CamionService, private loadingControl: LoadingController) { }

  ngOnInit() {
    this.camionService.getCamions().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
  }

}
