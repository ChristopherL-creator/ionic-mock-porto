import { Directive, ElementRef, Input } from '@angular/core';
import { Camion } from 'src/app/model/camion';

@Directive({
  selector: '[appCamionsPerZone]'
})
export class CamionsPerZoneDirective {

  @Input()
  set camion(value: Camion | undefined){
    console.log(value);
  }

  constructor(private el: ElementRef) { }

}
