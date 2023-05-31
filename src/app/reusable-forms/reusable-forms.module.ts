import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTagComponent } from './input-tag/input-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  declarations: [
    InputTagComponent,
    TextAreaComponent,
    DatePickerComponent,
    DropDownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KeyFilterModule,
    InputTextareaModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
  ],
  exports: [
    InputTagComponent,
    TextAreaComponent,
    DatePickerComponent,
    DropDownComponent,
  ],
})
export class ReusableFormsModule {}
