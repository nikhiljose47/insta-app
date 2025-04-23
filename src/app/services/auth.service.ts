import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { SharedPreferenceService } from './shared-preference.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firebaseAuth: Auth, private sharedPref: SharedPreferenceService) { }

   register(email: string, username: string, password: string): Observable<void>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password).then((response)=> updateProfile(response.user, {displayName: username}));
    return from(promise)
   }


   signIn(email: string, username: string, password: string): Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password).then((response)=> updateProfile(response.user, {displayName: username}));
    return from(promise)
   }

   
  onsignIn(): Observable<void> {
    const promise = signInWithPopup(this.firebaseAuth, new GoogleAuthProvider()).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      if(token){
        this.sharedPref.setItem("token", token)
      }

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    
    return from(promise)
  }


   signOut(){
    signOut(this.firebaseAuth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      
      // An error happened.
    });
   }
}