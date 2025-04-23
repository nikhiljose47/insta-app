import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { AngularFireModule } from "@angular/fire/compat";
import { FirebaseDataService } from '../../services/firebase-data.service';
import { AppDataModal } from '../../modals/app-data.modal';
import { Title } from '@angular/platform-browser';
import { FunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-maker-unit',
  standalone: true,
  imports: [AngularFireModule, FormsModule, NgIf, NgFor],
  templateUrl: './app-maker-unit.component.html',
  styleUrl: './app-maker-unit.component.css'
})
export class AppMakerUnitComponent {
  @Input() assemblerStep: number=1;
  @Input() submitCallback: (args: any) => void = (data: string)=>{};
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  maxSubcategories = 10;
  subcategories: string[] = [''];
  s: Function = new Function
  formData1: Array<string>=[];
  formData2: Array<string>=[];
  file: any ;
  @Output() data = new EventEmitter<string>();

  constructor(private fireService: FirebaseDataService){}

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      console.log('Selected file:', this.file);
    }
  }

  // Method to handle Sign Up form submission
  onSignupSubmit(form: any): void {
    if (form.valid) {
      this.data.emit(form.value.title+'&&'+form.value.category);
      console.log('Sign Up form data:', this.formData1);
    }
    this.submitCallback(this.formData1);

  }

  // Method to handle Category form submission
  onCategorySubmit(form: any): void {
    if (form.valid) {
      this.data.emit(form.value.categoryName+'&&'+this.subcategories.toString());
      
      console.log('Category form data:', this.formData2);
    }
  }

  // Method to add a new subcategory input field
  addSubcategory(): void {
    if (this.subcategories.length < this.maxSubcategories) {
      this.subcategories.push('');
    }
  }
}