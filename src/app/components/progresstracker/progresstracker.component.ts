import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresstracker',
  standalone: true,
  imports: [NgFor],
  templateUrl: './progresstracker.component.html',
  styleUrl: './progresstracker.component.css'
})
export class ProgresstrackerComponent {
  @Input() currentStep: number = 1;

}

