import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMakerUnitComponent } from './app-maker-unit.component';

describe('AppMakerUnitComponent', () => {
  let component: AppMakerUnitComponent;
  let fixture: ComponentFixture<AppMakerUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMakerUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppMakerUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
