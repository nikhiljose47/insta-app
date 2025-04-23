import { Component } from '@angular/core';
import { ProgresstrackerComponent } from '../progresstracker/progresstracker.component';
import { TempComponent } from '../temp/temp.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AppMakerUnitComponent } from '../app-maker-unit/app-maker-unit.component';
import { AppDataModal } from '../../modals/app-data.modal';
import { FirebaseDataService } from '../../services/firebase-data.service';

@Component({
  selector: 'app-maker',
  standalone: true,
  imports: [ProgresstrackerComponent, TempComponent, NgSwitch, NgSwitchCase, RouterOutlet, AppMakerUnitComponent],
  templateUrl: './app-maker.component.html',
  styleUrl: './app-maker.component.css'
})
export class AppMakerComponent {
  constructor(private router: Router, private fireService: FirebaseDataService) {}

  currentStep: number = 1;
  lastStep: number = 3;
  finalData : Array<string> = []


  submitCallback(data: string){

    console.log("data at callback",data)

  }

  receiveData(data: string) { 
    var messages = data.split("&&")
    console.log("hi", messages)

    this.finalData.push(...messages);
    console.log(this.finalData)

    //this.fireService.getDocs()


    if(this.finalData.length>2){

   const appData: AppDataModal = {
    title: this.finalData[0],
    category: this.finalData[1],
    fileLink: "",
    categoryName: this.finalData[2],
    subCategoryName: this.finalData[3]

    
  }



  console.log(appData)
  try{
   // this.fireService.createRobot("","s", "s")
    //this.fireService.uploadDoc(appData).then((val)=>console.log("after upload doc firestore: ",val))

  }
  catch(err){
   console.log("erro of firebase call for doc", err)
  }

    }
    
  }

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