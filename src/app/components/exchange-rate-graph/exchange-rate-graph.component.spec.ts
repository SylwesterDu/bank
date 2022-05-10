import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateGraphComponent } from './exchange-rate-graph.component';

describe('ExchangeRateGraphComponent', () => {
  let component: ExchangeRateGraphComponent;
  let fixture: ComponentFixture<ExchangeRateGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
