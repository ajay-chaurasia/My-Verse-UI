import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeImpactComponent } from './snake-impact.component';

describe('SnakeImpactComponent', () => {
  let component: SnakeImpactComponent;
  let fixture: ComponentFixture<SnakeImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeImpactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
