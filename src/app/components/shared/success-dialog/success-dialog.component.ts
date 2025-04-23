import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-dialog.component.html',
  styleUrl: './success-dialog.component.css'
})
export class SuccessDialogComponent implements OnInit {
  constructor(public modalRef: BsModalRef){}
  progressValue = 0;
  success = false;

  ngOnInit(): void {
    this.startProgress();
  }

  startProgress(): void {
    // Simulate a 2-second progress
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
        this.showSuccess();
      }
    }, 200); // Progress increases every 200ms
  }

  showSuccess(): void {
    // Show success message after progress completes
    setTimeout(() => {
      this.success = true;
    }, 500); // 0.5 second delay for the success animation
  }
}
