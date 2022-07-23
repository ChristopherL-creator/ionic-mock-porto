import { Component, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Gru } from 'src/app/model/gru';
import { GruService } from 'src/app/services/gru/gru.service';


@Component({
  selector: 'app-gru-select',
  templateUrl: './gru-select.page.html',
  styleUrls: ['./gru-select.page.scss'],
})
export class GruSelectPage implements OnInit {

  public searchGru = '';

  public selectedGru: Gru[] = [];

  public gruSearchList = [];

  public grusArray: Gru[] = [];

  public gru: any;

  language: string = this.translateServ.currentLang;

  constructor(
    private gruServ: GruService,
    private loadingControl: LoadingController,
    private translateServ: TranslateService,
    ) { }

  ngOnInit() {
    this.loadGrus();
    this.gruServ.selectedGrus.subscribe((value) => {
      this.selectedGru = value;
    });
  }

  async loadGrus(){
    const loadAnim = await this.loadingControl.create({
      message: 'Caricamento...',
      spinner: 'bubbles'
    });
    await loadAnim.present;

    this.gruServ.getGrus().subscribe({
      next: grus => {
        loadAnim.dismiss();
        this.grusArray = grus;
        console.log(this.grusArray);
      },
      error: err => console.log(err)
    });
  }

  autocompleteGru(event: any){

    const val: string = event.target.value;
    console.log(val);

    this.gruServ.getGrus().subscribe({
      next: gruSearchList => {
        this.grusArray = gruSearchList.filter((gru) => {
          return (gru.id.indexOf(val) > -1);
        });
        console.log(this.grusArray);
      },
      error: err => console.log(err)
    });
  }

  onSelectedGru(gru){
    this.gruServ.setGru(gru);
  }
}
