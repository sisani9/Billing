import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCoreComponent } from './billing-core.component';

describe('BillingCoreComponent', () => {
  let component: BillingCoreComponent;
  let fixture: ComponentFixture<BillingCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
