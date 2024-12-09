import { TestBed } from '@angular/core/testing'
import { Subject } from 'rxjs'
import { LoadingComponentWithPermissions } from './loading.component'
import { ComponentWithPermissions } from '../with-permissions/with-permissions.component'
import { Component } from '@angular/core'

class MockComponentWithPermissions extends ComponentWithPermissions {}

@Component({
  template: '',
})
class MockLoadingComponent extends LoadingComponentWithPermissions {}

describe('LoadingComponentWithPermissions', () => {
  let component: LoadingComponentWithPermissions

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponentWithPermissions],
    })
    component = new MockLoadingComponent()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have loading set to true by default', () => {
    expect(component.loading).toBeTruthy()
  })

  it('should have reveal set to false by default', () => {
    expect(component.reveal).toBeFalsy()
  })

  it('should call next and complete on unsubscribeNotifier with itself on destroy', () => {
    const nextSpy = jest.spyOn(component['unsubscribeNotifier'], 'next')
    const completeSpy = jest.spyOn(component['unsubscribeNotifier'], 'complete')
    component.ngOnDestroy()
    expect(nextSpy).toHaveBeenCalledWith(component)
    expect(completeSpy).toHaveBeenCalled()
  })
})
