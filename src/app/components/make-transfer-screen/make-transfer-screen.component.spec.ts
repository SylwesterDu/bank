import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferScreenComponent } from './make-transfer-screen.component';

describe('MakeTransferScreenComponent', () => {
  let component: MakeTransferScreenComponent;
  let fixture: ComponentFixture<MakeTransferScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTransferScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
