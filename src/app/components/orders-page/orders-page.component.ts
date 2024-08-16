import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'orders-page',
  standalone: true,
  imports: [CommonModule, TabsModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css'
})
export class OrdersPageComponent {
  isLogin = true;  // This should be set based on your actual login logic
  upcomingOrders = [
    { title: 'Order 1', requestedTime: '10:00 AM', createdTime: '9:00 AM' },
    { title: 'Order 2', requestedTime: '11:00 AM', createdTime: '10:00 AM' }
  ];
  deliveredOrders = [
    { title: 'Order A', requestedTime: '2:00 PM', createdTime: '1:00 PM' },
    { title: 'Order B', requestedTime: '3:00 PM', createdTime: '2:00 PM' }
  ];

  login() {
    // Implement your login logic here
  }

}
