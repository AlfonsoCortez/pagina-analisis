import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoprincipalComponent } from './infoprincipal.component';

describe('InfoprincipalComponent', () => {
  let component: InfoprincipalComponent;
  let fixture: ComponentFixture<InfoprincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoprincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
