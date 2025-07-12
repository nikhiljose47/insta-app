import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  title: string;
  description: string;
  imageUrl: string;

  constructor(private router: Router) {
    this.title = 'Explore the Learning Path';
    this.description = 'Step into a structured learning experience designed to guide you through well-defined phases of knowledge, with visuals and interactive steps.';
    this.imageUrl = 'https://via.placeholder.com/400x300?text=Preview+Image'; // Replace with actual asset if needed
  }

    navigateToPage() {
     this.router.navigate(['/app-checkout']); // Replace with actual path
  }
}
