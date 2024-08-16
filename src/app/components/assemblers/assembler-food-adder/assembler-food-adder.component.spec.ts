import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblerFoodAdderComponent } from './assembler-food-adder.component';

describe('AssemblerFoodAdderComponent', () => {
  let component: AssemblerFoodAdderComponent;
  let fixture: ComponentFixture<AssemblerFoodAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssemblerFoodAdderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssemblerFoodAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
