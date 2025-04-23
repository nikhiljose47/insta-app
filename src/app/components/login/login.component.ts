import { Component, ComponentFactoryResolver, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { signIn, signOut } from '../../actions/auth.actions';
import { Store } from '@ngrx/store';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { selectIsSignedIn } from '../../selector';
import { SuccessDialogComponent } from '../shared/success-dialog/success-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, DashboardComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('s-msg',  {static: false }) successMessage! : any
  username: string = '';
  password: string = '';
  errorMsg: string | null = null;
  isSignedIn : boolean = false;
  modalRef: BsModalRef = new BsModalRef;
  isToastOn: boolean = false;

  constructor(private modalService: BsModalService, private vcr: ViewContainerRef, private authService: AuthService, private router: Router, private store: Store) { 
    this.store.select(selectIsSignedIn).subscribe((val)=>{
      this.isSignedIn = val;
     });
    
     console.log("test of vie child s-msg:", document.getElementById('s-msg')  );

     
  }

  login() {
    console.log("init login fn")

    console.log(document.getElementById('test'));
    

    this.authService.register("nik@tmail.com","new test","1234567").subscribe(
      {next: ()=> console.log("suucessfull"), error: (err)=> this.errorMsg = err.code})
      this.modalRef = this.modalService.show(SuccessDialogComponent);

      this.authService.onsignIn().subscribe((val) => {
        console.log("return of observable gsignin: ",val)
        this.store.dispatch(signIn());
  
        this.router.navigate(['/home']);
      })

    

  }


  onlogin () {
    this.authService.onsignIn().subscribe((val) => {
      console.log("return of observable gsignin: ",val)
      this.store.dispatch(signIn());  
      this.isToastOn=true;
      setTimeout(() => {
        this.isToastOn=false;
      }, 2000);
    })
  }
  

  logout() {
    //this.auth.signOut();
    this.store.dispatch(signOut());

  }


  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add authentication logic and navigate to the next page upon successful login
  }

}
