import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-progresstracker',
  standalone: true,
  imports: [NgFor, MatStepperModule, MatIconModule],
  templateUrl: './progresstracker.component.html',
  styleUrl: './progresstracker.component.css'
})
export class ProgresstrackerComponent {
  @Input() currentStep: number = 1;

}

