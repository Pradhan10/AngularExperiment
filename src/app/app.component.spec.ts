import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let testAppComponent: AppComponent;
  beforeEach(async(() => {
    testAppComponent = new AppComponent();
  }));

  it('should create the app', () => {
    expect(testAppComponent).toBeTruthy();
  });

  it(`should have as title 'AssignmentOne'`, () => {
    const appTitle = testAppComponent.title;
    expect(appTitle).toEqual('AssignmentOne');
  });

});
