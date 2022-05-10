import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenContentComponent } from './welcome-screen-content.component';

describe('WelcomeScreenContentComponent', () => {
  let component: WelcomeScreenContentComponent;
  let fixture: ComponentFixture<WelcomeScreenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
