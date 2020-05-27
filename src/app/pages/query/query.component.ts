import { EmployeeService } from '../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {


  employeeId: any = null;
  showCards = false;
  cardConfigs;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() { }

  search() {
    this.showCards = true;
    this.cardConfigs = [
      { title: 'Profile', message: 'Click to view profile', data: this.employeeService.getProfile(this.employeeId)},
      { title: 'Employment', message: 'Click to view employment', data: this.employeeService.getEmployment(this.employeeId) },
      { title: 'Organization', message: 'Click to view organization', data: this.employeeService.getOrganization(this.employeeId) },
      { title: 'Compensation', message: 'Click to view compensation', data: this.employeeService.getCompensation(this.employeeId)},
      { title: 'Performance', message: 'Click to view performance', data: this.employeeService.getPerformance(this.employeeId) },
      { title: 'Attendance', message: 'Click to view profile', data: this.employeeService.getAttendance(this.employeeId)}
  ];
  }

  refreshQuery() {
    alert('Query Refreshed');
  }

}
