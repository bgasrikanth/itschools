import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdrecoveryComponent } from './pwdrecovery.component';

describe('PwdrecoveryComponent', () => {
  let component: PwdrecoveryComponent;
  let fixture: ComponentFixture<PwdrecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwdrecoveryComponent]
    });
    fixture = TestBed.createComponent(PwdrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
