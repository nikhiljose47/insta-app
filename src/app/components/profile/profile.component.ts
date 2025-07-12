import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdersPageComponent } from '../orders-page/orders-page.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, OrdersPageComponent, LoginComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  activeTab: 'details' | 'payments' | 'orders' = 'details';
  isLoggedIn : boolean = false;

  setTab(tab: 'details' | 'payments' | 'orders') {
    this.activeTab = tab;
  }


}
