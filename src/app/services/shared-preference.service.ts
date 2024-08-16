import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedPreferenceService {
  private preferenceKey = 'myPreference';
  private preferenceSubject: BehaviorSubject<string>;

  constructor() {
    const initialPreference = localStorage.getItem(this.preferenceKey) || '';
    this.preferenceSubject = new BehaviorSubject<string>(initialPreference);
  }

  // Get the current preference value as an observable
  getPreference(): Observable<string> {
    return this.preferenceSubject.asObservable();
  }

  setPreference(value: string): void {
    localStorage.setItem(this.preferenceKey, value);
    this.preferenceSubject.next(value);
  }
  
  // Set a value in local storage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}
