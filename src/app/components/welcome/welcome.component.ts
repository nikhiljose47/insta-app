import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  gifs: string[] = [
    'assets/animation1.gif',
    'assets/animation2.gif',
    'assets/animation3.gif',
    'assets/animation4.gif'
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.gifs.length;
    }, 3000); // 3 seconds
  }

  startApp() {
    // Navigate to next page
    console.log('Start button clicked');
  }
}
