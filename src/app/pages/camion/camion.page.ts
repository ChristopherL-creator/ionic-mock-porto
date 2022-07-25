import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Camion } from 'src/app/model/camion';
import { CamionService } from 'src/app/services/camion-service/camion.service';
import { TranslateService } from '@ngx-translate/core';
import { PositionAggregator } from 'src/app/model/position-aggregator';
import { Observable } from 'rxjs';
import { Gru } from 'src/app/model/gru';
import { GruService } from 'src/app/services/gru/gru.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.page.html',
  styleUrls: ['./camion.page.scss'],
})
export class CamionPage implements OnInit {

  public selectedGru: Observable<Gru[]>;

//  importato translateservice, e inserito nel costruttore, inizializzo langiage:
  public language: string = this.translateServ.currentLang;

  public camionsArray: Camion[] = [];

  private positionAggregator = {} as PositionAggregator;

  constructor(
    public camionService: CamionService,
    private loadingControl: LoadingController,
    private translateServ: TranslateService,
    private gruServ: GruService
    ) { }

  ngOnInit() {
    this.loadCamions();

    this.selectedGru = this.gruServ.selectedGrus;

    this.selectedGru.subscribe({
      next: currentGru => console.log(currentGru),
      error: err => console.log((err))
      }
    );
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
        this.camionService.clearPositionAggr();
//  ciclo camions per accadere alla posizione di ciascun camion
        for (let i = 0; i < camions.length; i++) {
          const camion = camions[i];
          console.log(camions);
//  richiamo funzione sortbypos, e ci inifilo ciascun camion di camions
          this.camionService.sortByPosition(camion);
        }
      },
      error: err => console.log(err)
    });
  }
}
