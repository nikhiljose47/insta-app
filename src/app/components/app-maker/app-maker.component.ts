import { Component } from '@angular/core';
import { ProgresstrackerComponent } from '../progresstracker/progresstracker.component';
import { TempComponent } from '../temp/temp.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AssemblerContentComponent } from "../assemblers/assembler-content/assembler-content.component";
import { AssemblerFoodAdderComponent } from '../assemblers/assembler-food-adder/assembler-food-adder.component';

@Component({
  selector: 'app-maker',
  standalone: true,
  imports: [ProgresstrackerComponent, TempComponent, NgSwitch, NgSwitchCase, RouterOutlet, AssemblerContentComponent, AssemblerFoodAdderComponent],
  templateUrl: './app-maker.component.html',
  styleUrl: './app-maker.component.css'
})
export class AppMakerComponent {
  constructor(private router: Router) {}

  currentStep: number = 1;
  lastStep: number = 3;

  nextStep() {
    if (this.currentStep < this.lastStep) {
      this.currentStep++;
    }
    else if(this.currentStep==this.lastStep){
     this.router.navigate(['/app-checkout']);
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}