import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import collegeLookup from 'src/app/models/DBmodels/college';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() model: Array<object> = [];
  @Input() iconclass = '';
  @Input() optionValue = '';
  @Input() optionLabel = '';

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
