import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-emitting',
  templateUrl: './emitting.component.html',
  styleUrls: ['./emitting.component.css']
})
export class EmittingComponent {

  @Output()
  test: EventEmitter<{label: string}> = new EventEmitter<{label: string}>();

}
