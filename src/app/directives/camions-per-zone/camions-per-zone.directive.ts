import { Directive, ElementRef, Input } from '@angular/core';
import { Camion, PositionAggregator } from 'src/app/model/camion';

@Directive({
  selector: '[appCamionsPerZone]'
})
export class CamionsPerZoneDirective {

  @Input()
  set appCamionsPerZone(value: PositionAggregator | undefined){
    this.ngOninit(value);
    console.log(value);
  }

  constructor(private el: ElementRef) { }

  ngOninit( positionAggregator: PositionAggregator | undefined){

    this.el.nativeElement.innerHTML = positionAggregator.lontanoEstArray.length;
  }

}
