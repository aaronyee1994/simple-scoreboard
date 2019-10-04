import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public homeScore:number = 0;
  public awayScore:number = 0;
  public timeLeft:number = 600;
  public startStop:string = 'Start';
  public interval;
  public paused = true;

  public setHomeScore(newScore:number) {
    this.homeScore = newScore;
  }

  public setAwayScore(newScore:number) {
    this.awayScore = newScore;
  }

  public onReset() {
    this.timeLeft = 600;
    this.homeScore = 0;
    this.awayScore = 0;
    this.pauseTimer();
  }

  private startTimer() {
    this.paused = false;
    this.startStop = 'Stop';
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
      else {
        //play alarm
      }
    },1000)
  }

  private pauseTimer() {
    clearInterval(this.interval);
    this.paused = true;
    this.startStop = 'Start';
  }

  onStartStop() {
    if (this.paused) {
      this.startTimer();
    }
    else {
      this.pauseTimer();
    }
  }

}
