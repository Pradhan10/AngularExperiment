import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let testUsercomponent: UsersComponent;
  let mockDataService;
  beforeEach(async(() => {

    mockDataService = jasmine.createSpyObj(['getUserData']);
    testUsercomponent = new UsersComponent(mockDataService);
  }));
  it('should create', () => {
    expect(testUsercomponent).toBeTruthy();
  });

});
