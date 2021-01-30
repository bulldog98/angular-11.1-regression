import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-emitting',
  template: `<button (click)="test.emit({label: 'test'})">Test</button>
  <button (click)="test.emit({label: 'bar'})">Bar</button>`,
  styleUrls: []
})
export class EmittingComponent {

  @Output()
  test: EventEmitter<{label: string}> = new EventEmitter<{label: string}>();

}
