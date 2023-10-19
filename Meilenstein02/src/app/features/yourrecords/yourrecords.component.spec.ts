import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourrecordsComponent } from './yourrecords.component';

describe('YourrecordsComponent', () => {
  let component: YourrecordsComponent;
  let fixture: ComponentFixture<YourrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourrecordsComponent]
    });
    fixture = TestBed.createComponent(YourrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
