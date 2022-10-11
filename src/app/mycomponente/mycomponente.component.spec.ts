import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponenteComponent } from './mycomponente.component';

describe('MycomponenteComponent', () => {
  let component: MycomponenteComponent;
  let fixture: ComponentFixture<MycomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
