import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresstrackerComponent } from './progresstracker.component';

describe('ProgresstrackerComponent', () => {
  let component: ProgresstrackerComponent;
  let fixture: ComponentFixture<ProgresstrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgresstrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgresstrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
