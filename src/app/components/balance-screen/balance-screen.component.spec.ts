import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceScreenComponent } from './balance-screen.component';

describe('BalanceScreenComponent', () => {
  let component: BalanceScreenComponent;
  let fixture: ComponentFixture<BalanceScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
