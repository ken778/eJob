import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailedPage } from './detailed.page';

describe('DetailedPage', () => {
  let component: DetailedPage;
  let fixture: ComponentFixture<DetailedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
