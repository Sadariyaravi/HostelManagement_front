import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import collegeLookup from '../models/DBmodels/college';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  constructor(private http: HttpClient) {}

  GetColleges() {
    return this.http.get<[collegeLookup]>(environment.baseurl + '/College');
  }
}
