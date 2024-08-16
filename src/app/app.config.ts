import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), 
  ]
  //providers: [provideRouter(routes), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"insta-app-1cde6","appId":"1:982267945096:web:89b970650b7b1a0bbf3f3d","storageBucket":"insta-app-1cde6.appspot.com","apiKey":"AIzaSyBkBZJsc-XcEX36i_V74jn500FuEqAHIXg","authDomain":"insta-app-1cde6.firebaseapp.com","messagingSenderId":"982267945096"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
