import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsHomeComponent } from './apps-home.component';

describe('AppsHomeComponent', () => {
  let component: AppsHomeComponent;
  let fixture: ComponentFixture<AppsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
