import { Routes } from '@angular/router';
import { AppMakerComponent } from './components/app-maker/app-maker.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'app-maker', component: AppMakerComponent, pathMatch: 'full'},
    { path: 'app-login', component: LoginComponent, pathMatch: 'full' },
    { path: 'app-checkout', component: CheckoutComponent, pathMatch: 'full'   },
    { path: 'app-dashboard', component: DashboardComponent, pathMatch: 'full'  },
    { path: 'app-assistance', component: AssistanceComponent, pathMatch: 'full'  },
    { path: 'orders-page', component: OrdersPageComponent, pathMatch: 'full'  },
    { path: '**', redirectTo: '/home' }
];

