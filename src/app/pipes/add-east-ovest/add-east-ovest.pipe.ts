import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'addEastOvest'
})
export class AddEastOvestPipe implements PipeTransform {

  constructor(private translatorServ: TranslateService){}

  transform(position: number, cardinal: string): string {
    if (position >= 0) {
      cardinal = this.translatorServ.instant('TRUCKS.west');
    } else {
      position = position * -1;
      cardinal = this.translatorServ.instant('TRUCKS.east');
    }

    return cardinal;
  }

}
