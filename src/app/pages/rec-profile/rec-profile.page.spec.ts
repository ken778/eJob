import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecProfilePage } from './rec-profile.page';

describe('RecProfilePage', () => {
  let component: RecProfilePage;
  let fixture: ComponentFixture<RecProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
