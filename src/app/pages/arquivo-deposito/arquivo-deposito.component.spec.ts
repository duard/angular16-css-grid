import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoDepositoComponent } from './arquivo-deposito.component';

describe('ArquivoDepositoComponent', () => {
  let component: ArquivoDepositoComponent;
  let fixture: ComponentFixture<ArquivoDepositoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArquivoDepositoComponent]
    });
    fixture = TestBed.createComponent(ArquivoDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
