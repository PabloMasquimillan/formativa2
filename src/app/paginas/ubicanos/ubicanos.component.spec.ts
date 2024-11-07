import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { UbicanosComponent } from './ubicanos.component';



describe('UbicanosComponent', () => {
  let component: UbicanosComponent;
  let fixture: ComponentFixture<UbicanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UbicanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
