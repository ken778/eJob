import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecUpdatePage } from './rec-update.page';

describe('RecUpdatePage', () => {
  let component: RecUpdatePage;
  let fixture: ComponentFixture<RecUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
