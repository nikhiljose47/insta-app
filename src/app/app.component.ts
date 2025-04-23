import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/shared/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from "./components/shared/footer/footer.component";
import { AngularFirestoreModule, Query } from '@angular/fire/compat/firestore';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AngularFirestoreModule, RouterOutlet, TopBarComponent,  HomeComponent, FooterComponent, RouterLink, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'insta_app';
}
