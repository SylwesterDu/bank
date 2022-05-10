import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangePanelComponent } from './currency-exchange-panel.component';

describe('CurrencyExchangePanelComponent', () => {
  let component: CurrencyExchangePanelComponent;
  let fixture: ComponentFixture<CurrencyExchangePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
