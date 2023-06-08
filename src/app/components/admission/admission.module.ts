import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableFormsModule } from 'src/app/reusable-forms/reusable-forms.module';
import { FieldsetModule } from 'primeng/fieldset';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AdmissionFormComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableFormsModule,
    FieldsetModule,
    MatSnackBarModule,
  ],
})
export class AdmissionModule {}
