import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedPreferenceService } from '../../../services/shared-preference.service';



@Component({
  selector: 'topbar-nav',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive ],
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent implements OnInit {
  preference$: Observable<string>=new Observable<string>();

  isSignedIn: string = ''
  constructor(private sharedPreferenceService: SharedPreferenceService) {}

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

  // onHomeClick(e:Event){
  //   this.router.navigate(['/home']);
  // }
  
  // onOrdersClick(e:Event){
  //   this.router.navigate(['/orders-page']);
  // }
  // onAssistanceClick(e:Event){
  //   this.router.navigate(['/app-assistance']);
  // }

}
