import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { NgFor, NgIf } from '@angular/common';
import { FirebaseDataService } from '../../../services/firebase-data.service';


@Component({
  selector: 'assembler-content',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, MatCardModule, MatToolbar, NgIf, NgFor],
  templateUrl: './assembler-content.component.html',
  styleUrl: './assembler-content.component.css'
})

export class AssemblerContentComponent {
  @Input() assemblerStep: number=1;
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  maxSubcategories = 10;
  subcategories: string[] = [''];

  addSubcategory(): void {
    if (this.subcategories.length < this.maxSubcategories) {
      this.subcategories.push('');
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    console.log('Selected file:', file);
  }

  onSubmit(form: any): void {
    console.log('Form Submitted!', form);
    FirebaseDataService.prototype.createRobot("Rirle", "sssssa","")
  }
}
