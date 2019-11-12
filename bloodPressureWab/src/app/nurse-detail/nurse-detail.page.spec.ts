import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDetailPage } from './nurse-detail.page';

describe('NurseDetailPage', () => {
  let component: NurseDetailPage;
  let fixture: ComponentFixture<NurseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
