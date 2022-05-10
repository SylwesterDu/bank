import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsPanelComponent } from './user-products-panel.component';

describe('UserProductsPanelComponent', () => {
  let component: UserProductsPanelComponent;
  let fixture: ComponentFixture<UserProductsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
