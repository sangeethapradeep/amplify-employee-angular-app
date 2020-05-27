import { map } from 'rxjs/operators';
import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../utils/global-contants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = GlobalConstants.SERVER_URL;
  private endpoints = {
    attendance: 'attendance',
    compensation: 'compensation',
    employment: 'employment',
    organization: 'organization',
    performance: 'performance',
    profile: 'profile'
  };

  constructor(private restService: RestApiService) { }

  public getAttendance(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.attendance}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }

  public getCompensation(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.compensation}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }

  public getEmployment(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.employment}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }

  public getOrganization(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.organization}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }

  public getPerformance(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.performance}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }

  public getProfile(employeeId) {
    const url = `${this.baseUrl}/${this.endpoints.profile}/${employeeId}`;
    return this.restService.get(url)
    .pipe(map((_: any) => _.data));
  }
}
