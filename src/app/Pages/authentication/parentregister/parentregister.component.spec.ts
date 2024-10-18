import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentregisterComponent } from './parentregister.component';

describe('ParentregisterComponent', () => {
  let component: ParentregisterComponent;
  let fixture: ComponentFixture<ParentregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentregisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
