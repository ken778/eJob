import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaypalPagePage } from './paypal-page.page';

describe('PaypalPagePage', () => {
  let component: PaypalPagePage;
  let fixture: ComponentFixture<PaypalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaypalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
