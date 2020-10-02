import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterbillComponent } from './waterbill.component';

describe('WaterbillComponent', () => {
  let component: WaterbillComponent;
  let fixture: ComponentFixture<WaterbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
