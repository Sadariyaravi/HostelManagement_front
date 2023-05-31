import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() model = [
    { name: 'GIT', id: 1 },
    { name: 'Nirma', id: 2 },
    { name: 'DAIICT', id: 3 },
  ];
  @Input() iconclass = '';

  constructor(@Self() public ngcontrol: NgControl) {
    this.ngcontrol.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.ngcontrol.control as FormControl;
  }
}
