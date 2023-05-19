import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteItemsComponent } from './autocomplete-items.component';

describe('AutocompleteItemsComponent', () => {
  let component: AutocompleteItemsComponent;
  let fixture: ComponentFixture<AutocompleteItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteItemsComponent]
    });
    fixture = TestBed.createComponent(AutocompleteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
