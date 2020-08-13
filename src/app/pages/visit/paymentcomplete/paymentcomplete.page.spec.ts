import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentcompletePage } from './paymentcomplete.page';

describe('PaymentcompletePage', () => {
  let component: PaymentcompletePage;
  let fixture: ComponentFixture<PaymentcompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentcompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentcompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
