import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.css'],
})
export class InputTagComponent implements ControlValueAccessor {

  @Input() label = '';
  @Input() type = 'text';
  @Input() iconclass = ''
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
