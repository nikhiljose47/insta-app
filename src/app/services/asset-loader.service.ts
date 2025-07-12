// assets-loader.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsLoader {
  /**
   * Reads JSON file from assets folder
   * @param path Path relative to assets folder (e.g., 'data/config.json')
   */
  read<T>(path: string): Observable<T> {
    return from(
      fetch(`../../assets/data/${path}`)
        .then(response => {
          if (!response.ok) {
            console.log(response.statusText)
            throw new Error(`Failed to load ${path}: ${response.statusText}`);
          }
          return response.json() as Promise<T>;
        })
    );
  }
}