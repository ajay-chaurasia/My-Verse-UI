import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceBattleComponent } from './space-battle.component';

describe('SpaceBattleComponent', () => {
  let component: SpaceBattleComponent;
  let fixture: ComponentFixture<SpaceBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
