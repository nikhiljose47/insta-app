import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData,getDocs, query } from '@angular/fire/firestore';
import { AppDataModal } from '../modals/app-data.modal';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {
  firestore: Firestore = inject(Firestore);

  async getDocs(){
    const ls = await collection(this.firestore,'items')
    const data = collectionData(ls)
    console.log("getDocs data: ",ls)
  }

  async uploadDoc(inst: AppDataModal) {
    console.log(this.firestore);
    const docRef = await addDoc(collection(this.firestore, 'xx'), {
      name: inst.title,
      fileLink: inst.fileLink,
      categoryName: inst.category,
      subcategoryName: inst.subCategoryName,
      category: inst.categoryName
    });
    console.log("Document written with ID: ", docRef.id);
  }
  
  
  async createRobot(name: string, color: string, age: string) {
    console.log(this.firestore);
    const docRef = await addDoc(collection(this.firestore, 'robots'), {
      name: name,
      color: color,
      age: age
    });
    console.log("Document written with ID: ", docRef.id);
  }
  
  async getRobots() {
      return (
       await getDocs(query(collection(this.firestore, 'robots')))
      ).docs.map((robots) => robots.data());
     }
}
