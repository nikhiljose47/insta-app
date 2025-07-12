// json-data.service.ts
import { Injectable } from '@angular/core';
import { AssetsLoader } from './asset-loader.service';
import { Observable } from 'rxjs';
import cs from '../../assets/data/steps-data.json';


@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {
  constructor(private assetsLoader: AssetsLoader) {}
  stepData: StepData = cs;

  getStageData(): Observable<StageData> {
    var json = cs;
    return this.assetsLoader.read<StageData>(String(cs));
  }
}

// Type definitions (put these in separate files in real project)
// Interfaces
export interface StepData {
  id: {
    meta: string;
    data: StageData[];
  };
}

export interface StageData {
  id: string;
  label: string;
  stepsCount: number;
  steps: Step[];
}

export interface Step {
  label: string;
  content: string[];
}