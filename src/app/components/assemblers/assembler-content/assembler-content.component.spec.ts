import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblerContentComponent } from './assembler-content.component';

describe('AssemblerContentComponent', () => {
  let component: AssemblerContentComponent;
  let fixture: ComponentFixture<AssemblerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblerContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssemblerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
