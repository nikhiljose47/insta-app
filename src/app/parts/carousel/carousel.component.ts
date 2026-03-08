// carousel.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  items = [
    { id: 1, title: 'Card 1', color: '#ff7675' },
    { id: 2, title: 'Card 2', color: '#74b9ff' },
    { id: 3, title: 'Card 3', color: '#55efc4' },
    { id: 4, title: 'Card 4', color: '#ffeaa7' },
    { id: 5, title: 'Card 5', color: '#a29bfe' }
  ];

  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    }
  }
}
