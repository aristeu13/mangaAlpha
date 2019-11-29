import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorPage } from './leitor.page';

describe('LeitorPage', () => {
  let component: LeitorPage;
  let fixture: ComponentFixture<LeitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
