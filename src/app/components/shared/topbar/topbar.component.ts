import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedPreferenceService } from '../../../services/shared-preference.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FirebaseDataService } from '../../../services/firebase-data.service';
import { signIn, signOut } from '../../../actions/auth.actions';
import { selectIsSignedIn } from '../../../selector';
import { AuthState } from '../../../reducers/auth.reducer';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'topbar-nav',
  imports: [RouterLink, RouterLinkActive, CommonModule, MatIconModule  ],
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent implements OnInit {
  preference$: Observable<string>=new Observable<string>();
  isSignedIn: boolean = false
  test: any
  val: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<{ auth: AuthState }>, private fireService: FirebaseDataService) {
    this.store.select(selectIsSignedIn).subscribe((val)=>{
      this.isSignedIn= val;
     });
  }

  ngOnInit(): void { 
    // this.sharedPreferenceService.setPreference('1');
    // this.preference$ = this.sharedPreferenceService.getPreference();
    // this.preference$.subscribe(value=> this.isSignedIn=value)
  }


  // onLoginClick(e: Event){
  //   this.isSignedIn=='0'?this.router.navigate(['/app-login']):this.router.navigate(['/app-dashboard'])
  // } 
  // onCartClick(e: Event){
  //   this.router.navigate(['/app-checkout']);
  // }

  onTestClick(e:Event){
    console.log("came test btn")

    console.log("isSignedIn", this.isSignedIn )

    
    this.store.dispatch(signOut())

   this.store.select(selectIsSignedIn).subscribe((v)=>{
    console.log("isSignedIn after", v);
  });



  }
  
  // onOrdersClick(e:Event){
  //   this.router.navigate(['/orders-page']);
  // }
  // onAssistanceClick(e:Event){
  //   this.router.navigate(['/app-assistance']);
  // }

}
