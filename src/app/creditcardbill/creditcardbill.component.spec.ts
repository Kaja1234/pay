import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardbillComponent } from './creditcardbill.component';

describe('CreditcardbillComponent', () => {
  let component: CreditcardbillComponent;
  let fixture: ComponentFixture<CreditcardbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
