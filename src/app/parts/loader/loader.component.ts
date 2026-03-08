
// timer-bar.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.css' ]
})
export class LoaderComponent implements OnInit, OnDestroy {
  duration = 20; // seconds
  remaining = this.duration;
  intervalId: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.remaining = this.duration;
    this.intervalId = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  get progressPercent() {
    return (this.remaining / this.duration) * 100;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
