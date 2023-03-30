import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select2Option, Select2UpdateEvent } from 'ng-select2-component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  overlay = false;
  @Input() data: any = [];
  @Output()  valueSelected: EventEmitter<string> = new EventEmitter<string>();
  

  change(key: string, event: Event) {    
    console.log(key, event);
  }
  
  search(text: string) {
    this.data = text
      ? (JSON.parse(JSON.stringify(this.data)) as Select2Option[]).filter(
        option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1,
      )
      : JSON.parse(JSON.stringify(this.data));
  }
  update(key: string, event: Select2UpdateEvent<any>) {
    this.valueSelected.emit(event.value);
  }
  value1 = '';

}
