import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMakerComponent } from './app-maker.component';

describe('AppMakerComponent', () => {
  let component: AppMakerComponent;
  let fixture: ComponentFixture<AppMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
