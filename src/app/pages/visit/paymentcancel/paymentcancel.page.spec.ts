import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentcancelPage } from './paymentcancel.page';

describe('PaymentcancelPage', () => {
  let component: PaymentcancelPage;
  let fixture: ComponentFixture<PaymentcancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentcancelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentcancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
