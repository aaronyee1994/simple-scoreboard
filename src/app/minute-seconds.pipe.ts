import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value:number): string {
    const minutes:number = Math.floor(value / 60);
    var seconds:string = (value - minutes * 60).toString();
    if ((value - minutes * 60) < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
 }
}
