import { Directive, ElementRef, Input } from '@angular/core';
import { PositionAggregator } from '../../model/PositionAggregator';

@Directive({
  selector: '[appCamionsPerZone]'
})
export class CamionsPerZoneDirective {

  @Input()
  set appCamionsPerZone(value: PositionAggregator | undefined){
    this.initElement(value);
    console.log(value);
  }

  constructor(private el: ElementRef) { }

  initElement( positionAggregator: PositionAggregator | undefined): void{
    console.log('direttiva');

    if (positionAggregator.lontanoEstArray != null) {
      this.el.nativeElement.innerHTML = positionAggregator.lontanoEstArray.length;
    }
  }

}
