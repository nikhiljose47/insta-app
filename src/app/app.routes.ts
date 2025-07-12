import { Routes } from '@angular/router';
import { AppMakerComponent } from './components/app-maker/app-maker.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { PreviewComponent } from './components/preview/preview.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'app-maker', component: AppMakerComponent, pathMatch: 'full'},
    { path: 'app-login', component: LoginComponent, pathMatch: 'full' },
    { path: 'app-checkout', component: CheckoutComponent, pathMatch: 'full'   },
    { path: 'app-dashboard', component: DashboardComponent, pathMatch: 'full' , canActivate: [AuthGuard] },
    { path: 'app-assistance', component: AssistanceComponent, pathMatch: 'full'  },
    { path: 'app-profile', component: ProfileComponent, pathMatch: 'full'},
    { path: 'app-preview', component: PreviewComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '/home' }
];

