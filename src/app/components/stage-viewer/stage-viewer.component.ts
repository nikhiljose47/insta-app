// stage-viewer.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { JsonReaderService, StageData } from '../../services/json-reader.service';
import { Router } from '@angular/router';
import * as data from '../../../assets/data/steps-data.json';

@Component({
  selector: 'stage-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stage-viewer.component.html',
  styleUrls: ['./stage-viewer.component.css'],
  animations: [
    trigger('stageTransition', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class StageViewerComponent {
  stages = [
    { id: 1, title: 'Discovery', content: 'Initial research and requirements gathering phase.' },
    { id: 2, title: 'Planning', content: 'Creating project roadmap and resource allocation.' },
    { id: 3, title: 'Development', content: 'Building the product features and functionality.' },
    { id: 4, title: 'Testing', content: 'Quality assurance and bug fixing process.' },
    { id: 5, title: 'Deployment', content: 'Launching the product to production environment.' }
  ];
  data?: any;
  parsed?: StageData;

  constructor(private jsonReader: JsonReaderService, private router: Router) {}

  currentStage = signal(1);

    ngOnInit() {
    this.data = data;
    this.parsed = JSON.parse(this.data) as StageData
    console.log(this.parsed.label);
  }

  selectStage(stageId: number) {
    this.currentStage.set(stageId);
  }

  nextStage() {
    if (this.currentStage() < this.stages.length) {
      this.currentStage.update(val => val + 1);
    }
    else if(this.currentStage() == this.stages.length){
      this.router.navigate(['/app-preview']);

    }
  }

  prevStage() {
    if (this.currentStage() > 1) {
      this.currentStage.update(val => val - 1);
    }
  }

  isSelected(stageId: number): boolean {
    return this.currentStage() === stageId;
  }
}