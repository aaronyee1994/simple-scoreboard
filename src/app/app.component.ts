import { Component, HostListener } from '@angular/core';
import { MatDialog } from "@angular/material";
import { SetClockDialogComponent } from './set-clock-dialog/set-clock-dialog.component';

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
  public audio = new Audio();


  constructor(private dialog: MatDialog) {
    this.audio.src = '../assets/buzzer.wav';
  }




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
        this.playBuzzer();
        this.pauseTimer();
      }
    },1000)
  }

  private pauseTimer() {
    clearInterval(this.interval);
    this.paused = true;
    this.startStop = 'Start';
  }

  public onStartStop() {
    if (this.paused) {
      this.startTimer();
    }
    else {
      this.pauseTimer();
    }
  }

  public playBuzzer() {
    this.audio.load();
    this.audio.play();
  }

  public onSetClock() {
    this.pauseTimer();
    this.dialog.open(SetClockDialogComponent).afterClosed().subscribe(
      data => {
        if(data) {
          let time = 0;
          if (data.minutes !== "") {
            time += data.minutes * 60;
          }
          if (data.seconds !== "") {
            time += data.seconds;
          }
          this.timeLeft = time;
        }
      }
    )
  }
}
