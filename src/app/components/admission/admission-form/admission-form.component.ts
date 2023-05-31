import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
})
export class AdmissionFormComponent implements OnInit {
  AdmissionForm!: FormGroup;
  constructor(private FB: FormBuilder) {}
  ngOnInit(): void {
    this.AdmissionForm = this.FB.group({
      firstName: ['', Validators.required],
      middlename: ['', Validators.required],
      Lastname: ['', Validators.required],
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]{1}[0-9]{9}$/)],
      ],
      EmailId: ['', [Validators.email, Validators.required]],
      PermanentAddress: ['', Validators.required],
      RelativeAddress: ['', Validators.required],
      BirthDate: ['', Validators.required],
      collegeName: ['', Validators.required],
      courseName: ['', Validators.required],
    });
  }

  SubmitForm() {
    if (!this.AdmissionForm.valid) {
      this.AdmissionForm.markAllAsTouched();
    } else {
      console.log('submitted');
    }
  }
}
