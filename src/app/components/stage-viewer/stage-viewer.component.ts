// stage-viewer.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

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

  currentStage = signal(1);

  selectStage(stageId: number) {
    this.currentStage.set(stageId);
  }

  nextStage() {
    if (this.currentStage() < this.stages.length) {
      this.currentStage.update(val => val + 1);
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