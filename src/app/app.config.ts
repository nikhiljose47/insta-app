import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment.prod';
import { provideStore, StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducer';
import { ModalModule } from 'ngx-bootstrap/modal';



export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
       ModalModule.forRoot(),
        StoreModule.forRoot({auth: authReducer}),
        //StoreModule.forFeature({ 'auth', authReducer })
      ),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    (() => {
        try {
            console.log("came here");
            return provideFirestore(() => getFirestore());
        }
        catch (error) {
            console.error('Error initializing Firestore:', error);
            // Optionally, you can return null or a fallback here if needed
            return [];
        }
    })(),
]
  //providers: [provideRouter(routes), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"insta-app-1cde6","appId":"1:982267945096:web:89b970650b7b1a0bbf3f3d","storageBucket":"insta-app-1cde6.appspot.com","apiKey":"AIzaSyBkBZJsc-XcEX36i_V74jn500FuEqAHIXg","authDomain":"insta-app-1cde6.firebaseapp.com","messagingSenderId":"982267945096"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
