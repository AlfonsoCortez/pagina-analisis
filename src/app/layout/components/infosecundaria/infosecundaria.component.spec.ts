import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosecundariaComponent } from './infosecundaria.component';

describe('InfosecundariaComponent', () => {
  let component: InfosecundariaComponent;
  let fixture: ComponentFixture<InfosecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
