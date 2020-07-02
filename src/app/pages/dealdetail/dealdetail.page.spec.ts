import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealdetailPage } from './dealdetail.page';

describe('DealdetailPage', () => {
  let component: DealdetailPage;
  let fixture: ComponentFixture<DealdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
