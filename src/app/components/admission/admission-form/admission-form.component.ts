import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import collegeLookup from 'src/app/models/DBmodels/college';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
})
export class AdmissionFormComponent implements OnInit {
  AdmissionForm!: FormGroup;
  collegeLookup!: Array<collegeLookup>;
  constructor(
    private FB: FormBuilder,
    private collegeService: CollegeService,
    private Toastservice: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.GetColleges();
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

  GetColleges() {
    this.collegeService.GetColleges().subscribe({
      next: (colleges) => {
        this.collegeLookup = colleges;
      },
      error: (err) => {
        let Toast = this.Toastservice.open('internal server error', 'Ok', {
          duration: 3000,
        });
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
