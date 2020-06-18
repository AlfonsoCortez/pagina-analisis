import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoterciariaComponent } from './infoterciaria.component';

describe('InfoterciariaComponent', () => {
  let component: InfoterciariaComponent;
  let fixture: ComponentFixture<InfoterciariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoterciariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoterciariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
