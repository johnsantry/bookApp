import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch1Page } from './ch1.page';

describe('Ch1Page', () => {
  let component: Ch1Page;
  let fixture: ComponentFixture<Ch1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ch1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ch1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
