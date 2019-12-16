import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornalComponent } from './jornal.component';

describe('JornalComponent', () => {
  let component: JornalComponent;
  let fixture: ComponentFixture<JornalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
