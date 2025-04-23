import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedPreferenceService } from '../../services/shared-preference.service';


@Component({
  selector: 'home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private sharedStorageService: SharedPreferenceService) {}


  ngOnInit(): void {
    this.setPreference()
  }

  setPreference() {
    this.sharedStorageService.setItem('isSignedIn', '1');
  }

  onCardClick(){
    this.router.navigate(['/app-maker']);
  }

}
